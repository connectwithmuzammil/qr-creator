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
import {
  LineChartComp,
  BarChartAnalytics,
  BackButton,
  Header,
} from "../components";
import QRCodeStyling from "qr-code-styling";
import { FaQrcode } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import apis from "../services";
import Skeleton from "react-loading-skeleton";
import { AccordianComponent } from "../components/AccordianComponent";
import { useQuery } from "@tanstack/react-query";
import { Rating, Stack } from "@mui/material";

const ReviewItem = ({ question, answers }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <AccordianComponent title={question}>
      <ul className="review-answers">
        {answers.length === 0 ? (
          <li className="no-answer">No reviews available for this question.</li>
        ) : (
          answers.slice(0, showMore ? answers.length : 5).map((answer, i) => (
            <li key={i} className="review-answer">
              {answer?.answer || "No answer provided"}
            </li>
          ))
        )}
      </ul>
      {answers.length > 5 && (
        <div className="button-container">
          <button
            className="show-more-btn"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </AccordianComponent>
  );
};
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

  console.log("QRres", QRres);

  const selectedFrame = QRres?.singleViewDetail?.style?.frameName;
  // console.log("selectedFrame", selectedFrame);

  let typeWifiData = `WIFI:S:${QRres?.singleViewDetail?.network_name};T:${QRres?.singleViewDetail?.network_security_type};P:${QRres?.singleViewDetail?.password};;`;

  let data =
    QRres?.singleViewDetail?.type === "wifi"
      ? typeWifiData
      : QRres?.singleViewDetail?.outcome;
  // console.log("QRres?.singleViewDetail?.outcome", data);
  let dotColor = QRres?.singleViewDetail?.style?.dotsColor;
  let cornerBackgroundColor = QRres?.singleViewDetail?.style?.cornerBackgroundColor;
  let cornerBorderColor = QRres?.singleViewDetail?.style?.cornerBorderColor;
  let cornerDotColor = QRres?.singleViewDetail?.style?.cornerDotColor;
  let selectedDotStyle = QRres?.singleViewDetail?.style?.dotsStyle;
  let selectedCornerStyle = QRres?.singleViewDetail?.style?.cornerStyle;
  //FRAME
  let frameColor = QRres?.singleViewDetail?.style?.frameColor;
  let backgroundColor = QRres?.singleViewDetail?.style?.backgroundColor;
  let frameText = QRres?.singleViewDetail?.style?.frameText;
  let frameTextColor = QRres?.singleViewDetail?.style?.frameTextColor;
  // console.log("frameText",frameText)

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
      color: cornerBackgroundColor, // Background color of the QR code
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
      console.log("testtt");
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

  const FRAME_COMPONENTS = {
    notSelectedFrame: NotSelectedFrameCanvas,
    frame1: CanvaFrame1,
    frame2: CanvaFrame2,
    frame3: CanvaFrame3,
    frame4: CanvaFrame4,
    frame5: CanvaFrame5,
    frame6: CanvaFrame6,
    frame7: CanvaFrame7,
    frame8: CanvaFrame8,
    frame9: CanvaFrame9,
    frame10: CanvaFrame10,
    frame11: CanvaFrame11,
  };

  const renderFrame = () => {
    const FrameComponent = FRAME_COMPONENTS[selectedFrame] || null;
    const commonProps = {
      frameColor,
      backgroundColor,
      frameText,
      frameTextColor,
      cornerBackgroundColor,
      dotColor,
      cornerBorderColor,
      cornerDotColor,
      selectedCornerStyle,
      selectedDotStyle,
      qrLogo: QRres?.singleViewDetail?.qrDesignLogo,
      data: QRres?.singleViewDetail?.outcome,
    };
    return FrameComponent ? <FrameComponent {...commonProps} /> : null;
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

  //API CALL FOR GET REVIEWS
  const { isLoadingReviews, data: { data: getReviews } = {} } = useQuery({
    queryKey: ["getReviews"],
    queryFn: () => apis.getReviews(QRres?.singleViewDetail?.id),
    enabled: activeTab === "review",
    onError: (error) => {
      console.error("Error fetching reviews:", error);
    },
  });
  // console.log("getReviewsAll", getReviews?.data);

  //API CALL FOR GET REVIEWS STARR
  const {
    isLoading: isLoadingStarReview,
    data: { data: getReviewsStar } = {},
  } = useQuery({
    queryKey: ["getReviewsStar"],
    queryFn: () => apis.getReviewsRating(QRres?.singleViewDetail?.id),
    enabled: activeTab === "review",
    onError: (error) => {
      console.error("Error getting star reviews:", error);
    },
  });

  console.log("getReviewsStarr", getReviewsStar);
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
                {userQrStats?.data?.total_qr
                  ? userQrStats?.data?.total_qr
                  : "0"}
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

        {QRres?.singleViewDetail?.type === "elabels" && (
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
                className={`tab-button ${
                  activeTab === "review" ? "active" : ""
                }`}
                onClick={() => handleTabChange("review")}
              >
                Reviews
              </button>
            </div>
          </div>
        )}
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
                  <h4 className="stats-txt">
                    Need more data to show statistics
                  </h4>
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
                  <h4 className="stats-txt">
                    Need more data to show statistics
                  </h4>
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
                  <h4 className="stats-txt">
                    Need more data to show statistics
                  </h4>
                )}
              </div>
            </div>
          </>
        )}

        {activeTab === "review" && (
          <div ref={reviewRef} className="review-list-container">
            {isLoadingStarReview ? (
              <div className="loader-wrapper">
                <div className="loaderr" />
              </div>
            ) : (
              <>
                {getReviewsStar?.rating > 0 ? (
                  <div
                    className="rating-container"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "16px",
                      marginBottom: "24px",
                      backgroundColor: "#ffffff",
                      borderRadius: "8px",
                      boxShadow: "0 2px 4px rgba(89, 89, 89, 0.18)",
                    }}
                  >
                    <p
                      className="rating-title"
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#333",
                        marginBottom: "12px",
                      }}
                    >
                      Average Rating
                    </p>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating"
                        value={getReviewsStar?.rating}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                  </div>
                ) : (
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#666",
                      marginBottom: "4px",
                      textAlign: "center",
                    }}
                  >
                    No ratings available yet.
                  </p>
                )}

                {/* {getReviewsStar?.rating === 0 && (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "8px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#666",
                        marginBottom: "0px",
                      }}
                    >
                      No ratings available yet.
                    </p>
                  </div>
                )} */}
              </>
            )}

            {isLoadingReviews ? (
              <div className="loader-wrapper">
                <div className="loaderr" />
              </div>
            ) : getReviews?.data?.length > 0 ? (
              getReviews.data.map((review, index) => {
                console.log("review", review);
                return (
                  <ReviewItem
                    key={index}
                    question={review.question}
                    answers={review.answers}
                  />
                );
              })
            ) : (
              <p
                className="text-center m-0 "
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#666",
                  marginBottom: "0px",
                }}
              >
                No reviews available yet.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default QRCodeDetail;
