import React, { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { saveAs } from "file-saver"; // For saving files on client-side
import { CSVLink } from "react-csv"; // CSV link for downloading file
import dayjs from "dayjs";
import axios from "axios";

import {
  BarChartAnalytics,
  DatePickerInput,
  LineChartComp,
  Sidebar,
} from "../../components";
import { useQuery } from "@tanstack/react-query";
import apis from "../../services";
import { toast } from "react-toastify";

const dataCountry = [
  { name: "USA", scans: 500 },
  { name: "Canada", scans: 350 },
  { name: "UK", scans: 300 },
  { name: "India", scans: 450 },
];
const dataOS = [
  { name: "Windows", scans: 400 },
  { name: "Mac", scans: 300 },
  { name: "Linux", scans: 300 },
  { name: "Android", scans: 200 },
];
const dataCity = [
  { name: "New York", scans: 450 },
  { name: "Los Angeles", scans: 300 },
  { name: "Chicago", scans: 250 },
  { name: "Houston", scans: 320 },
];
const QrAnalytics = () => {
  const [dataOS, setDataOS] = useState([]);
  const [dataCountry, setDataCountry] = useState([]);
  const [dataCity, setDataCity] = useState([]);

  const {
    isLoading,
    error,
    refetch,
    data: { data: getQrCount } = {},
  } = useQuery({
    queryKey: ["getQrCount"],
    queryFn: () => apis.QRCount(),
    onError: (error) => {
      console.error("Error geting Order History:", error);
      // toast.error("Failed to fetch products. Please try again later.");
    },
  });
  // console.log("getQrCount", getQrCount);

  const {
    isLoading: isLoadingScanCount,
    error: errorScanCount,
    refetch: refetchScanCount,
    data: { data: getScanCount } = {},
  } = useQuery({
    queryKey: ["getScanCount"],
    queryFn: () => apis.getScanCount(),
    onError: (error) => {
      console.error("Error geting Order History:", error);
      // toast.error("Failed to fetch products. Please try again later.");
    },
  });
  // console.log("getScanCount", getScanCount);

  //

  const { isLoading: isLoadingStats, data: { data: getQRStats } = {} } =
    useQuery({
      queryKey: ["getQRStats"],
      queryFn: () => apis.getQRStats(),
      onError: (error) => {
        console.error("Error geting QRStats:", error);
        // toast.error("Failed to fetch products. Please try again later.");
      },
    });
  // console.log("getQRStats", getQRStats);

  useEffect(() => {
    if (getQRStats?.data) {
      const { os = [], countries = [], cities = [] } = getQRStats.data;

      // Format the data for each category
      setDataOS(os.map(({ name, scans }) => ({ name, scans })));
      setDataCountry(countries.map(({ name, scans }) => ({ name, scans })));
      setDataCity(cities.map(({ name, scans }) => ({ name, scans })));
    }
  }, [getQRStats]);

  const {
    isLoading: isLoadingScanActivity,
    data: { data: getQrScanActivity } = {},
  } = useQuery({
    queryKey: ["getQrScanActivity"],
    queryFn: () => apis.getQRScansActivity(),
    onError: (error) => {
      console.error("Error geting QRStats:", error);
      // toast.error("Failed to fetch products. Please try again later.");
    },
  });
  console.log("getQrScanActivity", getQrScanActivity);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Format API data to match the chart structure
  const formattedData = getQrScanActivity?.data?.map((item) => ({
    name: monthNames[item.month - 1], // Convert month number to month name
    scans: item.scans,
  }));

  // EXPORT DATA CSV
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [csvData, setCsvData] = useState([]);
  const [csvFileReady, setCsvFileReady] = useState(false);

  // Handler for date change
  const handleDateChange = ({ startDate, endDate }) => {
    setDateRange({ startDate, endDate });
  };

  // Handler for fetching data and generating CSV
  const handleFetchData = async () => {
    const { startDate, endDate } = dateRange;

    if (startDate && endDate) {
      try {
        const start = dayjs(startDate).format("YYYY-MM-DD");
        const end = dayjs(endDate).format("YYYY-MM-DD");

        const { data } = await apis.exportAnalyticData(start, end);
        console.log(data, "response");
        console.log(data?.data, "data?.data");

        const formattedData = data?.data?.flatMap((qrCode) => {
          console.log("qrCodemnmmn", qrCode);

          return qrCode?.data?.map((row) => ({
            qrCodeName: qrCode?.qr_name,
            qrCodeType: qrCode?.type,
            dateTime: row?.datetime,
            country: row?.country,
            city: row?.city,
            os: row?.os,
          }));
        });

        // Example data format as array of objects (each object is a row)
        // const formattedData = [
        //   {
        //     qrCodeName: "Example QR Code",
        //     qrCodeType: "URL",
        //     dateTime: "2023-09-22 10:30:00",
        //     country: "USA",
        //     city: "New York",
        //     os: "iOS",
        //   },
        //   {
        //     qrCodeName: "Another QR Code",
        //     qrCodeType: "Business Card",
        //     dateTime: "2023-09-23 12:45:00",
        //     country: "Canada",
        //     city: "Toronto",
        //     os: "Android",
        //   },
        // ];

        setCsvData(formattedData);
        setCsvFileReady(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      toast.error("Please select a valid date range.");
    }
  };
  // Reset date range after download
  const handleDownloadComplete = () => {
    setDateRange({ startDate: null, endDate: null });
    setCsvFileReady(false);
  };

  return (
    <div className="qrAnalytics">
      <div className="userDashboard">
        <Sidebar />
        <div className="content-page">
          <div className="top">
            <h1>QR code analytics</h1>
          </div>
          <div className="bottom">
            <div className="period-con">
              <div className="wrap">
                <p>Period</p>
                <DatePickerInput
                  startDate={dateRange.startDate}
                  endDate={dateRange.endDate}
                  onDateChange={handleDateChange}
                />
              </div>

              <button
                className="export-data"
                disabled={!dateRange.startDate || !dateRange.endDate}
                style={{
                  backgroundColor:
                    dateRange.startDate && dateRange.endDate
                      ? "#e0201c"
                      : "#e16a68",
                  cursor:
                    dateRange.startDate && dateRange.endDate
                      ? "pointer"
                      : "not-allowed",
                }}
                onClick={handleFetchData}
              >
                Export data
              </button>
            </div>
            <div className="download-csv-con">
              {csvFileReady && (
                <CSVLink
                  data={csvData}
                  filename={`qr-analytics-${dayjs(dateRange.startDate).format(
                    "YYYY-MM-DD"
                  )}-to-${dayjs(dateRange.endDate).format("YYYY-MM-DD")}.csv`}
                  className="download-csv-btn"
                  onClick={handleDownloadComplete}
                >
                  Download CSV
                </CSVLink>
              )}
            </div>

            <div className="analytics-con">
              <div className="cardd">
                <div className="wrap">
                  <img src="/assets/images/icons/eye.png" alt="eye" />
                  <p>Number of QR codes</p>
                </div>
                <h3>{getQrCount?.count}</h3>
              </div>
              <div className="cardd">
                <div className="wrap">
                  <img src="/assets/images/icons/eye.png" alt="eye" />
                  <p>Number of scans</p>
                </div>
                <h3>{getScanCount?.count}</h3>
              </div>
              {/* <div className="cardd">
                <div className="wrap">
                  <img src="/assets/images/icons/eye.png" alt="eye" />
                  <p>Number of unique scans</p>
                </div>
                <h3>0</h3>
              </div> */}
            </div>

            <div
              className="graph-con"
              style={{ width: "100%", height: "400px" }}
            >
              <p>Scans activity</p>
              {/* <StyledEngineProvider injectFirst> */}
              {/* {dates.length > 0 && scans.length > 0 ? (
                <LineChartComp  />
              ) : (
                <h4>Need more data to show statistics</h4>
              )} */}
              {/* </StyledEngineProvider> */}

              {getQrScanActivity?.data?.length > 0 ? (
                <>
                  <LineChartComp data={formattedData} />
                </>
              ) : (
                <h4 className="stats-txt">Need more data to show statistics</h4>
              )}
            </div>

            <div className="all-card-con">
              <div className="cardd">
                <p>Scans per operating system</p>
                {isLoadingStats ? (
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: "250px",
                    }}
                  >
                    Loading...
                  </p>
                ) : dataOS && dataOS.length > 0 ? (
                  <BarChartAnalytics data={dataOS} />
                ) : (
                  <h4 className="stats-txt">
                    Need more data to show statistics
                  </h4>
                )}
              </div>

              <div className="cardd">
                <p>Scans per country</p>
                {isLoadingStats ? (
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: "250px",
                    }}
                  >
                    Loading...
                  </p>
                ) : dataCountry && dataCountry.length > 0 ? (
                  <BarChartAnalytics data={dataCountry} />
                ) : (
                  <h4 className="stats-txt">
                    Need more data to show statistics
                  </h4>
                )}
              </div>

              <div className="cardd">
                <p>Scans per city/region</p>
                {isLoadingStats ? (
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: "250px",
                    }}
                  >
                    Loading...
                  </p>
                ) : dataCity && dataCity.length > 0 ? (
                  <BarChartAnalytics data={dataCity} />
                ) : (
                  <h4 className="stats-txt">
                    Need more data to show statistics
                  </h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrAnalytics;
