import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  CanvaFrame1,
  CanvaFrame10,
  CanvaFrame11,
  CanvaFrame2,
  CanvaFrame3,
  CanvaFrame4,
  CanvaFrame5,
  CanvaFrame6,
  CanvaFrame7,
  CanvaFrame8,
  CanvaFrame9,
  NotSelectedFrameCanvas,
} from "../components/SVGIcon";
import { LineChartComp, BarChartAnalytics, BackButton, Header } from "../components";
import QRCodeStyling from "qr-code-styling";
import { FaQrcode } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import apis from "../services";
import Skeleton from "react-loading-skeleton";

const QRCodeDetail = () => {
  const [dataOS, setDataOS] = useState([]);
  const [dataCountry, setDataCountry] = useState([]);
  const [dataCity, setDataCity] = useState([]);
  const [activeTab, setActiveTab] = useState("analytics");
  const analyticsRef = useRef(null);
  const reviewRef = useRef(null);
  const location = useLocation();
  const QRres = location.state || {};
  const qrCode = useRef(null);
  // console.log("QRres", QRres);

  const selectedFrame = QRres?.singleViewDetail?.style?.frameName;
  // console.log("selectedFrame", selectedFrame);

  let typeWifiData = `WIFI:S:${QRres?.singleViewDetail?.network_name};T:${QRres?.singleViewDetail?.network_security_type};P:${QRres?.singleViewDetail?.password};;`;

  let data =
    QRres?.singleViewDetail?.type === "wifi"
      ? typeWifiData
      : QRres?.singleViewDetail?.outcome;
  // console.log("QRres?.singleViewDetail?.outcome", data);
  let dotColor = QRres?.singleViewDetail?.style?.dotsColor;
  let CornerbgColor = QRres?.singleViewDetail?.style?.cornerBackgroundColor;
  let cornerBorderColor = QRres?.singleViewDetail?.style?.cornerBorderColor;
  let cornerDotColor = QRres?.singleViewDetail?.style?.cornerDotColor;
  let selectedDotStyle = QRres?.singleViewDetail?.style?.dotsStyle;
  let selectedCornerStyle = QRres?.singleViewDetail?.style?.cornerStyle;
  //FRAME
  let frameColor = QRres?.singleViewDetail?.style?.frameColor;
  let frameBgColor = QRres?.singleViewDetail?.style?.backgroundColor;
  let frameText = QRres?.singleViewDetail?.style?.frameText;
  let frameTextColor = QRres?.singleViewDetail?.style?.frameTextColor;

  const qrCodeOptions = {
    width: 130,
    height: 130,
    data: data,
    dotsOptions: {
      color: dotColor,
      type: selectedDotStyle,
    },
    cornersSquareOptions: {
      color: "#000000",
      type: selectedCornerStyle, // This will dynamically change
    },
    cornersDotOptions: {
      color: cornerDotColor, // Customize if needed
    },
    backgroundOptions: {
      color: CornerbgColor, // Background color of the QR code
    },
    cornersSquareOptions: {
      color: cornerBorderColor,
      type: selectedCornerStyle, // Update corner style on change
    },
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  };

  useEffect(() => {
    qrCode.current = new QRCodeStyling(qrCodeOptions);
    qrCode.current.append(document.getElementById("qrCode"));
  }, [qrCodeOptions]);

  const [userQrStats, setUserQrStats] = useState(null);
  const [isUserQRStatsLoading, setIsUserQRStatsLoading] = useState(true);
  useEffect(() => {
    const UserQRStat = async () => {
      console.log("testtt")
      setIsUserQRStatsLoading(true);
      try {
        const fetchedUserQrStats = await apis.getEachUserQRStat(
          QRres?.singleViewDetail?.id
        );
        setUserQrStats(fetchedUserQrStats);
      } catch (error) {
        console.error("Error fetching user QR stats:", error);
      } finally {
        setIsUserQRStatsLoading(false);
      }
    };
    if (QRres?.singleViewDetail?.id) {
      UserQRStat();
    }
  }, [QRres]);

  // console.log("userQrStats", userQrStats);

  const renderFrame = () => {
    switch (selectedFrame) {
      case "notSelectedFrame":
        return (
          <NotSelectedFrameCanvas
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame1":
        return (
          <CanvaFrame1
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame2":
        return (
          <CanvaFrame2
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame3":
        return (
          <CanvaFrame3
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame4":
        return (
          <CanvaFrame4
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame5":
        return (
          <CanvaFrame5
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame6":
        return (
          <CanvaFrame6
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame7":
        return (
          <CanvaFrame7
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame8":
        return (
          <CanvaFrame8
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame9":
        return (
          <CanvaFrame9
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame10":
        return (
          <CanvaFrame10
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame11":
        return (
          <CanvaFrame11
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      // ... Add cases for other frames
      default:
        return null;
    }
  };

  useEffect(() => {
    if (QRres?.statsDataSystem?.data) {
      const {
        os = [],
        countries = [],
        cities = [],
      } = QRres?.statsDataSystem?.data;

      // Format the data for each category
      setDataOS(os.map(({ name, scans }) => ({ name, scans })));
      setDataCountry(countries.map(({ name, scans }) => ({ name, scans })));
      setDataCity(cities.map(({ name, scans }) => ({ name, scans })));
    }
  }, [QRres?.statsDataSystem]);

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

  // Format API data for the chart
  const formattedData = QRres?.statsDataScanActivity?.data?.map((item) => ({
    name: monthNames[item.month - 1], // Convert month number to month name
    scans: item.scans,
  }));

  //TAB TOGGLE

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Scroll to the respective section when the tab changes
    if (activeTab === "analytics" && analyticsRef.current) {
      analyticsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (activeTab === "review" && reviewRef.current) {
      reviewRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeTab]);

  return (
    <>
    <Header />
    <div className="qrDetailsPage">
      <BackButton onPageCSS={"30px"} redirectTo={"/my-qr-codes"} />
      <div className="qr-preview">
        <div
          className="img-con"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {renderFrame()}
          {/* <img
            src="/assets/images/qrDelete.png"
            alt="qrdelete"
            style={{ width: "250px", height: "250px" }}
          /> */}
          <div className="frame-overlay" style={{ position: "static" }}></div>
        </div>
      </div>
      <div className="userAnalyticscon">
        <div className="cardd">
          <FaQrcode />
          <h3>Total Views</h3>
          {isUserQRStatsLoading ? (
            <Skeleton width={100} height={20} />
          ) : (
            <p>
              {userQrStats?.data?.total_qr ? userQrStats?.data?.total_qr : "0"}
            </p>
          )}
        </div>

        <div className="cardd">
          <AiOutlineEye />
          <h3>Total Scan</h3>
          {isUserQRStatsLoading ? (
            <Skeleton width={100} height={20} />
          ) : (
            <p>
              {userQrStats?.data?.total_scan
                ? userQrStats?.data?.total_scan
                : "0"}
            </p>
          )}
        </div>
      </div>

      <div className="toggle-con">
        <div className="tab-buttons">
          <button
            className={`tab-button ${
              activeTab === "analytics" ? "active" : ""
            }`}
            onClick={() => handleTabChange("analytics")}
          >
            View Analytics
          </button>
          <button
            className={`tab-button ${activeTab === "review" ? "active" : ""}`}
            onClick={() => handleTabChange("review")}
          >
            Reviews
          </button>
        </div>
      </div>

      {activeTab === "analytics" && (
        <>
          <div
            ref={analyticsRef}
            className="graph-con"
            style={{ width: "100%", height: "400px" }}
          >
            <div className="main-filter-con">
              <p>Scans Activity </p>
            </div>

            {false ? (
              <h4>Loading...</h4>
            ) : (
              <>
                {formattedData && formattedData.length > 0 ? (
                  <LineChartComp data={formattedData} />
                ) : (
                  <h4 className="stats-txt">
                    Need more data to show statistics
                  </h4>
                )}
              </>
            )}
          </div>
          <div className="all-card-con">
            <div className="cardd">
              <p>Scans per operating system</p>
              {QRres?.statsDataSystem?.data?.os?.length < 0 ? (
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
                <h4 className="stats-txt">Need more data to show statistics</h4>
              )}
            </div>

            <div className="cardd">
              <p>Scans per country</p>
              {QRres?.statsDataSystem?.data?.countries?.length < 0 ? (
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
                <h4 className="stats-txt">Need more data to show statistics</h4>
              )}
            </div>

            <div className="cardd">
              <p>Scans per city/region</p>
              {QRres?.statsDataSystem?.data?.cities?.length < 0 ? (
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
                <h4 className="stats-txt">Need more data to show statistics</h4>
              )}
            </div>
          </div>
        </>
      )}

      {activeTab === "review" && <div ref={reviewRef}>Review upcoming</div>}
    </div>
    </>
  );
};

export default QRCodeDetail;