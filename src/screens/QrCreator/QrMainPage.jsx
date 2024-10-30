import React, { useEffect, useRef, useState } from "react";
import { Sidebar, SubscriptionPopup } from "../../components";
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
  CreatedIconDashboard,
  ModifiedIconDashboard,
  NotSelectedFrameCanvas,
  SideBarQrCodeSVG,
} from "../../components/SVGIcon";
import { Link, useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import apis from "../../services";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { IoLinkOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import ConfirmationModal from "../../components/Modal/QR/ConfirmationModal";

const QrMainPage = () => {
  const navigate = useNavigate();
  const qrCodeRef = useRef(null);
  const [showDeleteBox, setShowDeleteBox] = useState(null);
  const [loadingMap, setLoadingMap] = useState({});
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleDeleteBoxToggle = (id) => {
    // console.log("handleDeleteBoxToggleIDDD", id);
    setShowDeleteBox(showDeleteBox === id ? null : id);
  };

  const {
    isLoading,
    refetch: refetchAllQrCodes,
    data: { data: getALLQrCodes } = {},
  } = useQuery({
    queryKey: ["getALLQrCodes", selectedTypes],
    queryFn: () => apis.GETAllQrCode({ type: selectedTypes.join(",") }),
    // enabled: selectedTypes.length > 0,
    onError: (error) => {
      console.error("Error geting Order History:", error);
      // toast.error("Failed to fetch products. Please try again later.");
    },
  });
  console.log("getALLQrCodes", getALLQrCodes);

  // let selectedFrame = getALLQrCodes?.data[0]?.style?.frameName
  // console.log("selectedFrame",selectedFrame)

  // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

  const handleDownload = (qrCode) => {
    // if (qrCodeRef.current) {
    //   toPng(qrCodeRef.current)
    //     .then((dataUrl) => {
    //       const link = document.createElement("a");
    //       link.href = dataUrl;
    //       link.download = `${qrCodeName}.png`; // Download with the QR code name
    //       link.click();
    //     })
    //     .catch((err) => {
    //       console.error("Error generating QR code image:", err);
    //     });
    // }

    // const imageUrl = qrCode?.image_path;

    // if (imageUrl) {
    //   const proxiedUrl = CORS_PROXY + imageUrl;

    //   fetch(proxiedUrl)
    //     .then((response) => response.blob())
    //     .then((blob) => {
    //       saveAs(blob, 'qr-code.png');
    //     })
    //     .catch((error) => {
    //       console.error('Error downloading the image:', error);
    //     });
    // } else {
    //   console.error('No image path provided.');
    // }

    if (qrCode?.image_path) {
      console.log("INSIDE IF CONDITION");
      const link = document.createElement("a");
      link.href = qrCode.image_path; // Set the href to the image path
      link.download = `${qrCode?.qr_name || "qr-code"}.png`; // Set the download name

      // Append link to the body (required for some browsers)
      document.body.appendChild(link);

      // Programmatically click the link to trigger the download
      link.click();

      // Remove the link from the body
      document.body.removeChild(link);
    } else {
      console.error("No image path available for download.");
    }
  };

  const renderFrame = (selectedFrame, qrCodeData, data) => {
    // console.log("qrCodeData", qrCodeData);
    // console.log("dataQrCodeee", data);
    switch (selectedFrame) {
      case "notSelctedFrame":
        console.log("INSIDE notSelctedFrame CASE");
        return (
          <NotSelectedFrameCanvas
            CornerbgColor={qrCodeData?.CornerbgColor}
            dotColor={qrCodeData?.dotColor}
            cornerBorderColor={qrCodeData?.cornerBorderColor}
            cornerDotColor={qrCodeData?.cornerDotColor}
            selectedCornerStyle={qrCodeData?.selectedCornerStyle}
            selectedDotStyle={qrCodeData?.selectedDotStyle}
            data={data?.image_path}
          />
        );
      case "frame1":
        console.log("INSIDE CASE 1");
        return (
          <CanvaFrame1
            frameColor={qrCodeData?.frameColor}
            frameBorderColor={qrCodeData?.frameBgColor}
            frameText={qrCodeData?.frameText}
            frameTextColor={qrCodeData?.frameTextColor}
            CornerbgColor={qrCodeData?.CornerbgColor}
            dotColor={qrCodeData?.dotColor}
            cornerBorderColor={qrCodeData?.cornerBorderColor}
            cornerDotColor={qrCodeData?.cornerDotColor}
            selectedCornerStyle={qrCodeData?.selectedCornerStyle}
            selectedDotStyle={qrCodeData?.selectedDotStyle}
            data={data?.image_path}
          />
        );
      case "frame2":
        return (
          <CanvaFrame2
            frameColor={qrCodeData?.frameColor}
            frameBorderColor={qrCodeData?.frameBgColor}
            frameText={qrCodeData?.frameText}
            frameTextColor={qrCodeData?.frameTextColor}
            CornerbgColor={qrCodeData?.CornerbgColor}
            dotColor={qrCodeData?.dotColor}
            cornerBorderColor={qrCodeData?.cornerBorderColor}
            cornerDotColor={qrCodeData?.cornerDotColor}
            selectedCornerStyle={qrCodeData?.selectedCornerStyle}
            selectedDotStyle={qrCodeData?.selectedDotStyle}
            data={data?.image_path}
          />
        );
      case "frame3":
        return (
          <CanvaFrame3
            frameColor={qrCodeData?.frameColor}
            frameBorderColor={qrCodeData?.frameBgColor}
            frameText={qrCodeData?.frameText}
            frameTextColor={qrCodeData?.frameTextColor}
            CornerbgColor={qrCodeData?.CornerbgColor}
            dotColor={qrCodeData?.dotColor}
            cornerBorderColor={qrCodeData?.cornerBorderColor}
            cornerDotColor={qrCodeData?.cornerDotColor}
            selectedCornerStyle={qrCodeData?.selectedCornerStyle}
            selectedDotStyle={qrCodeData?.selectedDotStyle}
            data={data?.image_path}
          />
        );
      case "frame4":
        return (
          <CanvaFrame4
            frameColor={qrCodeData?.frameColor}
            frameBorderColor={qrCodeData?.frameBgColor}
            frameText={qrCodeData?.frameText}
            frameTextColor={qrCodeData?.frameTextColor}
            CornerbgColor={qrCodeData?.CornerbgColor}
            dotColor={qrCodeData?.dotColor}
            cornerBorderColor={qrCodeData?.cornerBorderColor}
            cornerDotColor={qrCodeData?.cornerDotColor}
            selectedCornerStyle={qrCodeData?.selectedCornerStyle}
            selectedDotStyle={qrCodeData?.selectedDotStyle}
            data={data?.image_path}
          />
        );
      case "frame5":
        return (
          <CanvaFrame5
            frameColor={qrCodeData?.frameColor}
            frameBorderColor={qrCodeData?.frameBgColor}
            frameText={qrCodeData?.frameText}
            frameTextColor={qrCodeData?.frameTextColor}
            CornerbgColor={qrCodeData?.CornerbgColor}
            dotColor={qrCodeData?.dotColor}
            cornerBorderColor={qrCodeData?.cornerBorderColor}
            cornerDotColor={qrCodeData?.cornerDotColor}
            selectedCornerStyle={qrCodeData?.selectedCornerStyle}
            selectedDotStyle={qrCodeData?.selectedDotStyle}
            data={data?.image_path}
          />
        );
      case "frame6":
        return (
          <CanvaFrame6
            frameColor={qrCodeData?.frameColor}
            frameBorderColor={qrCodeData?.frameBgColor}
            frameText={qrCodeData?.frameText}
            frameTextColor={qrCodeData?.frameTextColor}
            CornerbgColor={qrCodeData?.CornerbgColor}
            dotColor={qrCodeData?.dotColor}
            cornerBorderColor={qrCodeData?.cornerBorderColor}
            cornerDotColor={qrCodeData?.cornerDotColor}
            selectedCornerStyle={qrCodeData?.selectedCornerStyle}
            selectedDotStyle={qrCodeData?.selectedDotStyle}
            data={data?.image_path}
          />
        );
      case "frame7":
        return (
          <CanvaFrame7
            frameColor={qrCodeData?.frameColor}
            frameBorderColor={qrCodeData?.frameBgColor}
            frameText={qrCodeData?.frameText}
            frameTextColor={qrCodeData?.frameTextColor}
            CornerbgColor={qrCodeData?.CornerbgColor}
            dotColor={qrCodeData?.dotColor}
            cornerBorderColor={qrCodeData?.cornerBorderColor}
            cornerDotColor={qrCodeData?.cornerDotColor}
            selectedCornerStyle={qrCodeData?.selectedCornerStyle}
            selectedDotStyle={qrCodeData?.selectedDotStyle}
            data={data?.image_path}
          />
        );
      case "frame8":
        return (
          <CanvaFrame8
            frameColor={qrCodeData?.frameColor}
            frameBorderColor={qrCodeData?.frameBgColor}
            frameText={qrCodeData?.frameText}
            frameTextColor={qrCodeData?.frameTextColor}
            CornerbgColor={qrCodeData?.CornerbgColor}
            dotColor={qrCodeData?.dotColor}
            cornerBorderColor={qrCodeData?.cornerBorderColor}
            cornerDotColor={qrCodeData?.cornerDotColor}
            selectedCornerStyle={qrCodeData?.selectedCornerStyle}
            selectedDotStyle={qrCodeData?.selectedDotStyle}
            data={data?.image_path}
          />
        );
      case "frame9":
        return (
          <CanvaFrame9
            frameColor={qrCodeData?.frameColor}
            frameBorderColor={qrCodeData?.frameBgColor}
            frameText={qrCodeData?.frameText}
            frameTextColor={qrCodeData?.frameTextColor}
            CornerbgColor={qrCodeData?.CornerbgColor}
            dotColor={qrCodeData?.dotColor}
            cornerBorderColor={qrCodeData?.cornerBorderColor}
            cornerDotColor={qrCodeData?.cornerDotColor}
            selectedCornerStyle={qrCodeData?.selectedCornerStyle}
            selectedDotStyle={qrCodeData?.selectedDotStyle}
            data={data?.image_path}
          />
        );
      case "frame10":
        return (
          <CanvaFrame10
            frameColor={qrCodeData?.frameColor}
            frameBorderColor={qrCodeData?.frameBgColor}
            frameText={qrCodeData?.frameText}
            frameTextColor={qrCodeData?.frameTextColor}
            CornerbgColor={qrCodeData?.CornerbgColor}
            dotColor={qrCodeData?.dotColor}
            cornerBorderColor={qrCodeData?.cornerBorderColor}
            cornerDotColor={qrCodeData?.cornerDotColor}
            selectedCornerStyle={qrCodeData?.selectedCornerStyle}
            selectedDotStyle={qrCodeData?.selectedDotStyle}
            data={data?.image_path}
          />
        );
      case "frame11":
        return (
          <CanvaFrame11
            frameColor={qrCodeData?.frameColor}
            frameBorderColor={qrCodeData?.frameBgColor}
            frameText={qrCodeData?.frameText}
            frameTextColor={qrCodeData?.frameTextColor}
            CornerbgColor={qrCodeData?.CornerbgColor}
            dotColor={qrCodeData?.dotColor}
            cornerBorderColor={qrCodeData?.cornerBorderColor}
            cornerDotColor={qrCodeData?.cornerDotColor}
            selectedCornerStyle={qrCodeData?.selectedCornerStyle}
            selectedDotStyle={qrCodeData?.selectedDotStyle}
            data={data?.image_path}
          />
        );
      // ... Add cases for other frames
      default:
        return null;
    }
  };

  const handleDelete = async (id) => {
    console.log("delete_id", id);
    const res = await apis.deleteQrCode({ id });
    console.log("ress", res);
    toast.success("QR Delete Successfully!!");
    refetchAllQrCodes();
    setShowDeleteBox(null);
  };
  const handleViewDetail = async (singleViewDetail) => {
    try {
      // let userQrStats = await apis.getEachUserQRStat(singleViewDetail?.id);
      // let statsData = userQrStats?.data;
      let userQrSystem = await apis.getEachUserQRSystem(singleViewDetail?.id);
      let statsDataSystem = userQrSystem?.data;
      let userQrScanActivity = await apis.getEachUserQRScanActivity(
        singleViewDetail?.id
      );
      // console.log("userQrScanActivity",userQrScanActivity?.data);
      let statsDataScanActivity = userQrScanActivity?.data;

      navigate("/qr-image", {
        state: {
          singleViewDetail,
          // statsData,
          statsDataSystem,
          statsDataScanActivity,
        },
      });

      if (singleViewDetail?.id) {
        await apis.viewQrCode(singleViewDetail.id);
      } else {
        throw new Error("QR Code ID is missing");
      }
    } catch (error) {
      console.error("Failed to view QR code detail:", error);
    }
  };

  const handleEdit = async (id, type) => {
    // console.log("EDIT IDDD", id);
    setLoadingMap((prev) => ({ ...prev, [id]: true }));
    try {
      let res = await apis.getSingleQr(id);
      let qrData = res.data;
      // console.log("qrDataEdit", qrData);
      navigate(`/qr-editor/${type}`, { state: { qrData } });
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoadingMap((prev) => ({ ...prev, [id]: false }));
    }
  };

  const SkeletonLoader = () => {
    return (
      <div className="qr-code-card-skeleton">
        <div className="one-con">
          <div className="img" />
          <div className="text-con">
            <div className="text1" />
            <div className="text1" />
          </div>
        </div>
        <div className="two-con">
          <div className="text1" />
          <div className="text1" />
        </div>
        <div className="three-con">
          <div className="text1" />
          <div className="text1" />
        </div>
        <div className="four-con">
          <div className="btn"></div>
          <div className="btn"></div>
          <div className="btn"></div>
          <div className="btn"></div>
        </div>
      </div>
    );
  };

  const [status, setStatus] = useState("All");

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const qrTypes = [
    { id: 1, name: "Url" },
    { id: 2, name: "Youtube" },
    { id: 3, name: "Pdf" },
    { id: 4, name: "Wifi" },
    { id: 5, name: "Video" },
    { id: 6, name: "Vcard" },
    { id: 7, name: "Business" },
    { id: 8, name: "Social" },
    { id: 9, name: "Apps" },
    { id: 10, name: "Links" },
    { id: 11, name: "Image Gallery" },
    { id: 12, name: "Landing" },
    { id: 13, name: "Event" },
  ];

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedTypes((prevSelected) => {
      const newSelectedTypes = prevSelected.includes(value)
        ? prevSelected.filter((type) => type !== value)
        : [...prevSelected, value];

      // Return the new selected types
      return newSelectedTypes;
    });
  };

  useEffect(() => {
    // Only call the API if there are selected types
    if (selectedTypes.length > 0) {
      const timer = setTimeout(() => {
        refetchAllQrCodes();
      }, 300); // Wait for 300ms before calling the API

      return () => clearTimeout(timer); // Cleanup the timer on unmount or re-render
    }
  }, [selectedTypes, refetchAllQrCodes]);

  const displayText = () => {
    // if (selectedTypes.length === 0) return "Select QR Types";
    // if (selectedTypes.length > 3) return 'Selected: ...';
    if (selectedTypes.length > 3) {
      return `${selectedTypes.slice(0, 2).join(", ")}...`;
    }
    return selectedTypes.join(", ");
  };
  return (
    <>
      <div className="qr-main-page">
        <div className="userDashboard">
          <Sidebar />
          <div className="content-page">
            <div className="top">
              <h1>QR Codes</h1>
              <div className="btn-wrapper">
                <Link to={"/qr-editor"}>
                  <button>
                    <span>Generate QR code</span> <SideBarQrCodeSVG />
                  </button>
                </Link>
              </div>
            </div>
            <SubscriptionPopup />

            <div className="qrFilterCon">
              <div className="containerr">
                <div className="left">
                  <div className="statusDropdown">
                    <div className="Select__prefix">QR Status:</div>
                    <select
                      name="status"
                      id="qrStatusDropdown"
                      value={status}
                      onChange={handleChange}
                    >
                      <option value="all">All</option>
                      <option value="active">Active</option>
                      <option value="paused">Paused</option>
                    </select>
                    <FaChevronDown className="dropdown-icon" />
                  </div>

                  {/* <div className="qrTypeDropdown">
                  <div className="Select__prefix">QR Type:</div>
                  <select
                    name="status"
                    id="qrStatusDropdown"
                    value={status}
                    onChange={handleChange}
                  >
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                  </select>
                  <FaChevronDown className="dropdown-icon" />
                </div> */}

                  <div className="qrTypeDropdown">
                    <div className="Select__prefix">QR Type:</div>
                    <div className="dropdown">
                      <div className="dropdown-selected">{displayText()}</div>
                      {/* <FaChevronDown className="dropdown-icon" /> */}
                      <div className="dropdown-options">
                        {qrTypes.map((type) => (
                          <label key={type.id}>
                            <input
                              type="checkbox"
                              value={
                                type.name === "Business"
                                  ? "business_page"
                                  : type.name === "Social"
                                  ? "social_media"
                                  : type.name
                              }
                              checked={selectedTypes.includes(type.name)}
                              onChange={handleCheckboxChange}
                            />
                            {type.name}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="sortByDropdown">
                    <div className="Select__prefix">Sort By:</div>
                    <select
                      name="status"
                      id="qrStatusDropdown"
                      value={status}
                      onChange={handleChange}
                    >
                      <option value="mostrecent">Most Recent</option>
                      <option value="lastupdated">Last Updated</option>
                      <option value="name">Name</option>
                    </select>
                    <FaChevronDown className="dropdown-icon" />
                  </div>
                </div>
              </div>
            </div>

            {/* Check if the data is still loading */}
            {isLoading ? (
              <div className="bottom">
                <div className="status-con">
                  {/* Render multiple skeleton cards */}
                  {[...Array(8)].map((_, index) => (
                    <SkeletonLoader key={index} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="bottom">
                {getALLQrCodes?.data && getALLQrCodes?.data.length > 0 ? (
                  <>
                    {[...getALLQrCodes.data]?.reverse().map((qrCode, index) => {
                      const selectedFrame = qrCode?.style?.frameName;
                      const isLoading = loadingMap[qrCode.id];
                      console.log("qrcodeee", qrCode);
                      return (
                        <div className="all-qrCode-con" key={qrCode.id}>
                          <div className="result-cardd">
                            <div className="one">
                              <div className="img-con" ref={qrCodeRef}>
                                {renderFrame(
                                  selectedFrame,
                                  qrCode?.style,
                                  qrCode
                                )}
                              </div>
                              <div className="content-wrap">
                                <h4>
                                  {qrCode?.type === "social_media"
                                    ? "Social Media"
                                    : qrCode?.type === "image_gallery"
                                    ? "Image Gallery"
                                    : qrCode?.type === "business_page"
                                    ? "Business"
                                    : qrCode?.type}
                                </h4>
                                <h3>{qrCode?.qr_name}</h3>
                              </div>
                            </div>
                            <div className="two">
                              <p className="status">Active</p>
                              <div className="modifiedDate-con">
                                <div className="wrap">
                                  <CreatedIconDashboard />
                                  <h6>Created: {qrCode?.created_at}</h6>
                                </div>
                                <div className="wrap">
                                  <ModifiedIconDashboard />
                                  <h6>Modified: {qrCode?.updated_at}</h6>
                                </div>
                                {qrCode?.type !== "wifi" && (
                                  <div className="wrap">
                                    <IoLinkOutline size={22} />
                                    <a
                                      // href={
                                      //   qrCode.outcome.startsWith("http")
                                      //     ? qrCode.outcome
                                      //     : `http://${qrCode.outcome}`
                                      // }
                                      href={qrCode?.outcome}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{ textDecoration: "none" }}
                                    >
                                      <h6>
                                        {qrCode?.outcome}
                                        {/* https://qr-creator-black.vercel.app/ */}
                                      </h6>
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="three">
                              <p>Scans</p>
                              <h1>
                                {qrCode?.scan_count ? qrCode?.scan_count : "0"}
                              </h1>
                            </div>
                            <div className="four">
                              <p onClick={() => handleViewDetail(qrCode)}>
                                View details
                              </p>
                              <p
                                onClick={() =>
                                  handleEdit(qrCode?.id, qrCode.type)
                                }
                              >
                                {isLoading ? (
                                  "Loading..."
                                ) : (
                                  <>
                                    Edit
                                    <span>
                                      <MdEdit size={14} />
                                    </span>
                                  </>
                                )}
                              </p>
                              <p onClick={() => handleDownload(qrCode)}>
                                Download
                                <span>
                                  <MdDownload size={18} />
                                </span>
                              </p>
                              <div className="delete-box">
                                <p
                                  onClick={() =>
                                    handleDeleteBoxToggle(qrCode?.id)
                                  }
                                >
                                  <BsThreeDotsVertical size={18} />
                                </p>
                                {showDeleteBox === qrCode?.id && (
                                  <div className="box">
                                    <MdDelete
                                      className="delete-icon"
                                      onClick={() => handleDelete(qrCode.id)}
                                    />
                                    <h4>Delete</h4>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <div className="no-qr-found">
                    <img
                      src="/assets/images/noQRFound.jpg"
                      alt="No QR Codes"
                      className="no-qr-image"
                    />
                    <h2>No QR Codes Found</h2>
                    <p>
                      You haven’t created any QR codes yet. Start by creating
                      your first one to track and manage your QR codes easily.
                    </p>
                    <button className="create-qr-btn">
                      <Link to={"/qr-editor"}>Create QR Code</Link>
                    </button>
                  </div>
                )}

                <div className="pagination-con"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ConfirmationModal
        showConfirmationModal={showConfirmationModal}
        setShowConfirmationModal={setShowConfirmationModal}
      />
    </>
  );
};

export default QrMainPage;
