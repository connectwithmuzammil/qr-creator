import React, { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material/styles";

import {
  BarChartAnalytics,
  DatePickerInput,
  LineChartComp,
  Sidebar,
} from "../../components";
import { useQuery } from "@tanstack/react-query";
import apis from "../../services";

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
                <StyledEngineProvider injectFirst>
                  <DatePickerInput />
                </StyledEngineProvider>
              </div>

              <button className="export-data" disabled>
                Export data
              </button>
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

              <LineChartComp data={formattedData} />
            </div>

            <div className="all-card-con">
              <div className="cardd">
                <p>Scans per operating system</p>
                {dataOS && dataOS.length > 0 ? (
                  <BarChartAnalytics data={dataOS} />
                ) : (
                  <h4 className="stats-txt">
                    Need more data to show statistics
                  </h4>
                )}
              </div>
              <div className="cardd">
                <p>Scans per country</p>
                {dataCountry && dataCountry.length > 0 ? (
                  <BarChartAnalytics data={dataCountry} />
                ) : (
                  <h4 className="stats-txt">
                    Need more data to show statistics
                  </h4>
                )}
              </div>

              <div className="cardd">
                <p>Scans per city/region</p>
                {dataCity && dataCity.length > 0 ? (
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
