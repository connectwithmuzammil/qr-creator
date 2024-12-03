import React, { useEffect, useRef, useState } from "react";
import {
  ConfirmationModal,
  Sidebar,
  SubscriptionPopup,
  OpenQrScanModal,
} from "../../components";
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
import axios from "axios";
import { IoIosPause } from "react-icons/io";
import { RxCross2, RxResume } from "react-icons/rx";
import QRCodeStyling from "qr-code-styling";

const QrMainPage = () => {
  // const ConfirmationModal = React.lazy(()=> import('../../components'))
  // const { user } = useSelector((store) => store.user);
  // console.log("userdaraatta", user);

  const navigate = useNavigate();
  const qrCodeRef = useRef(null);
  const [showDeleteBox, setShowDeleteBox] = useState(null);
  const [statuses, setStatuses] = useState({});
  const [loadingMap, setLoadingMap] = useState({});
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [modalContent, setModalContent] = useState({});
  const [showPreviewScanModal, setShowPreviewScanModal] = useState(false);
  const [PreviewScanImageData, setPreviewScanImageData] = useState({});
  const [sortBy, setSortBy] = useState("most_recent");

  const handleDeleteBoxToggle = (id) => {
    // console.log("handleDeleteBoxToggleIDDD", id);
    setShowDeleteBox((prevId) => (prevId === id ? null : id));
  };

  const openConfirmationModal = (id, actionType) => {
    let content = {};
    if (actionType === "delete") {
      content = {
        title: "Are you sure you want to delete your QR code?",
        svgType: "delete",
        confirmButtonText: "Yes, Delete",
        onConfirm: () => handleDelete(id),
      };
    } else if (actionType === "pause") {
      content = {
        title: "Are you sure you want to pause this QR code?",
        svgType: "activePaused",
        confirmButtonText: "Yes, Pause",
        onConfirm: () => handleStatusChange(id, 2),
      };
    } else if (actionType === "activate") {
      content = {
        title: "Are you sure you want to activate this QR code?",
        svgType: "activePaused",
        confirmButtonText: "Yes, Activate",
        onConfirm: () => handleStatusChange(id, 1),
      };
    }
    setModalContent(content);
    setShowConfirmationModal(true);
  };

  // Handle status change for active/paused
  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await axios.post(
        "https://qrgenarator.envobyte.dev/api/change_status",
        {
          qrCodeId: id,
          status: newStatus,
        }
      );
      if (response.status === 200) {
        setStatuses((prevStatuses) => ({
          ...prevStatuses,
          [id]: newStatus,
        }));
        alert(
          `QR Code status changed to ${newStatus === 1 ? "Active" : "Paused"}`
        );
      } else {
        alert("Failed to change QR Code status.");
      }
      setShowConfirmationModal(false);
    } catch (error) {
      console.error("Error changing status:", error);
      setShowConfirmationModal(false);
    }
  };
  const {
    isLoading,
    refetch: refetchAllQrCodes,
    data: { data: getALLQrCodes } = {},
  } = useQuery({
    queryKey: ["getALLQrCodes", selectedTypes, sortBy],
    queryFn: () =>
      apis.GETAllQrCode({ type: selectedTypes.join(","), sort: sortBy }),
    // enabled: selectedTypes.length > 0,
    onError: (error) => {
      console.error("Error geting QR Codes:", error);
      // toast.error("Failed to fetch products. Please try again later.");
    },
  });
  // console.log("getALLQrCodes", getALLQrCodes);

  const handleDownload = (styleObj, qrCodeObj) => {
    console.log("qrCodeObj", qrCodeObj);
    // Configure the QR code styling
    const qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      data: qrCodeObj?.outcome || "https://example.com",
      // image: imageLogo,
      dotsOptions: {
        color: styleObj?.dotColor || "#000",
        type: styleObj?.selectedDotStyle || "rounded",
      },
      cornersSquareOptions: {
        color: styleObj?.cornerBorderColor || "#000",
        type: styleObj?.selectedCornerStyle || "extra-rounded",
      },
      cornersDotOptions: {
        color: styleObj?.cornerDotColor || "#000",
      },
      backgroundOptions: {
        color: styleObj?.CornerbgColor || "#fff",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 0,
      },
    });

    // Create a temporary div for QR code rendering
    const tempDiv = document.createElement("div");
    document.body.appendChild(tempDiv);

    // Render the QR code in the temporary div
    qrCode.append(tempDiv);

    // Wait for QR code rendering
    setTimeout(() => {
      // Find the canvas inside the temporary div
      const canvas = tempDiv.querySelector("canvas");

      if (canvas) {
        // Convert the canvas to a data URL
        const dataUrl = canvas.toDataURL("image/png");

        // Create a download link
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${qrCodeObj?.id || "qr-code"}.png`;

        // Programmatically click the link to trigger the download
        link.click();
      } else {
        console.error("QR code canvas not found");
      }

      // Clean up the temporary div
      document.body.removeChild(tempDiv);
    }, 500); // Adjust delay if needed
  };

  const frameComponents = {
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

  const renderFrame = (selectedFrame, qrCodeData, data) => {
    console.log("qrCodeDatatte", data);
    const FrameComponent = frameComponents[selectedFrame];
    return FrameComponent ? (
      <FrameComponent
        {...qrCodeData}
        data={data?.image_path}
        qrLogo={data?.qrDesignLogo}
      />
    ) : null;
  };

  // const renderFrame = (selectedFrame, qrCodeData, data) => {
  //   // console.log("qrCodeData", qrCodeData);
  //   // console.log("dataQrCodeee", data);
  //   // console.log("selectedFramet", selectedFrame);
  //   switch (selectedFrame) {
  //     case "notSelectedFrame":
  //       // console.log("INSIDE notSelctedFrame CASE");
  //       return (
  //         <NotSelectedFrameCanvas
  //           CornerbgColor={qrCodeData?.CornerbgColor}
  //           dotColor={qrCodeData?.dotColor}
  //           cornerBorderColor={qrCodeData?.cornerBorderColor}
  //           cornerDotColor={qrCodeData?.cornerDotColor}
  //           selectedCornerStyle={qrCodeData?.selectedCornerStyle}
  //           selectedDotStyle={qrCodeData?.selectedDotStyle}
  //           data={data?.image_path}
  //           // qrLogo={data?.qrDesignLogo}
  //         />
  //       );
  //     case "frame1":
  //       return (
  //         <CanvaFrame1
  //           frameColor={qrCodeData?.frameColor}
  //           frameBorderColor={qrCodeData?.frameBgColor}
  //           frameText={qrCodeData?.frameText}
  //           frameTextColor={qrCodeData?.frameTextColor}
  //           CornerbgColor={qrCodeData?.CornerbgColor}
  //           dotColor={qrCodeData?.dotColor}
  //           cornerBorderColor={qrCodeData?.cornerBorderColor}
  //           cornerDotColor={qrCodeData?.cornerDotColor}
  //           selectedCornerStyle={qrCodeData?.selectedCornerStyle}
  //           selectedDotStyle={qrCodeData?.selectedDotStyle}
  //           data={data?.image_path}
  //           // qrLogo={data?.qrDesignLogo}
  //         />
  //       );
  //     case "frame2":
  //       return (
  //         <CanvaFrame2
  //           frameColor={qrCodeData?.frameColor}
  //           frameBorderColor={qrCodeData?.frameBgColor}
  //           frameText={qrCodeData?.frameText}
  //           frameTextColor={qrCodeData?.frameTextColor}
  //           CornerbgColor={qrCodeData?.CornerbgColor}
  //           dotColor={qrCodeData?.dotColor}
  //           cornerBorderColor={qrCodeData?.cornerBorderColor}
  //           cornerDotColor={qrCodeData?.cornerDotColor}
  //           selectedCornerStyle={qrCodeData?.selectedCornerStyle}
  //           selectedDotStyle={qrCodeData?.selectedDotStyle}
  //           data={data?.image_path}
  //         />
  //       );
  //     case "frame3":
  //       return (
  //         <CanvaFrame3
  //           frameColor={qrCodeData?.frameColor}
  //           frameBorderColor={qrCodeData?.frameBgColor}
  //           frameText={qrCodeData?.frameText}
  //           frameTextColor={qrCodeData?.frameTextColor}
  //           CornerbgColor={qrCodeData?.CornerbgColor}
  //           dotColor={qrCodeData?.dotColor}
  //           cornerBorderColor={qrCodeData?.cornerBorderColor}
  //           cornerDotColor={qrCodeData?.cornerDotColor}
  //           selectedCornerStyle={qrCodeData?.selectedCornerStyle}
  //           selectedDotStyle={qrCodeData?.selectedDotStyle}
  //           data={data?.image_path}
  //         />
  //       );
  //     case "frame4":
  //       return (
  //         <CanvaFrame4
  //           frameColor={qrCodeData?.frameColor}
  //           frameBorderColor={qrCodeData?.frameBgColor}
  //           frameText={qrCodeData?.frameText}
  //           frameTextColor={qrCodeData?.frameTextColor}
  //           CornerbgColor={qrCodeData?.CornerbgColor}
  //           dotColor={qrCodeData?.dotColor}
  //           cornerBorderColor={qrCodeData?.cornerBorderColor}
  //           cornerDotColor={qrCodeData?.cornerDotColor}
  //           selectedCornerStyle={qrCodeData?.selectedCornerStyle}
  //           selectedDotStyle={qrCodeData?.selectedDotStyle}
  //           data={data?.image_path}
  //         />
  //       );
  //     case "frame5":
  //       return (
  //         <CanvaFrame5
  //           frameColor={qrCodeData?.frameColor}
  //           frameBorderColor={qrCodeData?.frameBgColor}
  //           frameText={qrCodeData?.frameText}
  //           frameTextColor={qrCodeData?.frameTextColor}
  //           CornerbgColor={qrCodeData?.CornerbgColor}
  //           dotColor={qrCodeData?.dotColor}
  //           cornerBorderColor={qrCodeData?.cornerBorderColor}
  //           cornerDotColor={qrCodeData?.cornerDotColor}
  //           selectedCornerStyle={qrCodeData?.selectedCornerStyle}
  //           selectedDotStyle={qrCodeData?.selectedDotStyle}
  //           data={data?.image_path}
  //         />
  //       );
  //     case "frame6":
  //       return (
  //         <CanvaFrame6
  //           frameColor={qrCodeData?.frameColor}
  //           frameBorderColor={qrCodeData?.frameBgColor}
  //           frameText={qrCodeData?.frameText}
  //           frameTextColor={qrCodeData?.frameTextColor}
  //           CornerbgColor={qrCodeData?.CornerbgColor}
  //           dotColor={qrCodeData?.dotColor}
  //           cornerBorderColor={qrCodeData?.cornerBorderColor}
  //           cornerDotColor={qrCodeData?.cornerDotColor}
  //           selectedCornerStyle={qrCodeData?.selectedCornerStyle}
  //           selectedDotStyle={qrCodeData?.selectedDotStyle}
  //           data={data?.image_path}
  //         />
  //       );
  //     case "frame7":
  //       return (
  //         <CanvaFrame7
  //           frameColor={qrCodeData?.frameColor}
  //           frameBorderColor={qrCodeData?.frameBgColor}
  //           frameText={qrCodeData?.frameText}
  //           frameTextColor={qrCodeData?.frameTextColor}
  //           CornerbgColor={qrCodeData?.CornerbgColor}
  //           dotColor={qrCodeData?.dotColor}
  //           cornerBorderColor={qrCodeData?.cornerBorderColor}
  //           cornerDotColor={qrCodeData?.cornerDotColor}
  //           selectedCornerStyle={qrCodeData?.selectedCornerStyle}
  //           selectedDotStyle={qrCodeData?.selectedDotStyle}
  //           data={data?.image_path}
  //         />
  //       );
  //     case "frame8":
  //       return (
  //         <CanvaFrame8
  //           frameColor={qrCodeData?.frameColor}
  //           frameBorderColor={qrCodeData?.frameBgColor}
  //           frameText={qrCodeData?.frameText}
  //           frameTextColor={qrCodeData?.frameTextColor}
  //           CornerbgColor={qrCodeData?.CornerbgColor}
  //           dotColor={qrCodeData?.dotColor}
  //           cornerBorderColor={qrCodeData?.cornerBorderColor}
  //           cornerDotColor={qrCodeData?.cornerDotColor}
  //           selectedCornerStyle={qrCodeData?.selectedCornerStyle}
  //           selectedDotStyle={qrCodeData?.selectedDotStyle}
  //           data={data?.image_path}
  //         />
  //       );
  //     case "frame9":
  //       return (
  //         <CanvaFrame9
  //           frameColor={qrCodeData?.frameColor}
  //           frameBorderColor={qrCodeData?.frameBgColor}
  //           frameText={qrCodeData?.frameText}
  //           frameTextColor={qrCodeData?.frameTextColor}
  //           CornerbgColor={qrCodeData?.CornerbgColor}
  //           dotColor={qrCodeData?.dotColor}
  //           cornerBorderColor={qrCodeData?.cornerBorderColor}
  //           cornerDotColor={qrCodeData?.cornerDotColor}
  //           selectedCornerStyle={qrCodeData?.selectedCornerStyle}
  //           selectedDotStyle={qrCodeData?.selectedDotStyle}
  //           data={data?.image_path}
  //         />
  //       );
  //     case "frame10":
  //       return (
  //         <CanvaFrame10
  //           frameColor={qrCodeData?.frameColor}
  //           frameBorderColor={qrCodeData?.frameBgColor}
  //           frameText={qrCodeData?.frameText}
  //           frameTextColor={qrCodeData?.frameTextColor}
  //           CornerbgColor={qrCodeData?.CornerbgColor}
  //           dotColor={qrCodeData?.dotColor}
  //           cornerBorderColor={qrCodeData?.cornerBorderColor}
  //           cornerDotColor={qrCodeData?.cornerDotColor}
  //           selectedCornerStyle={qrCodeData?.selectedCornerStyle}
  //           selectedDotStyle={qrCodeData?.selectedDotStyle}
  //           data={data?.image_path}
  //         />
  //       );
  //     case "frame11":
  //       return (
  //         <CanvaFrame11
  //           frameColor={qrCodeData?.frameColor}
  //           frameBorderColor={qrCodeData?.frameBgColor}
  //           frameText={qrCodeData?.frameText}
  //           frameTextColor={qrCodeData?.frameTextColor}
  //           CornerbgColor={qrCodeData?.CornerbgColor}
  //           dotColor={qrCodeData?.dotColor}
  //           cornerBorderColor={qrCodeData?.cornerBorderColor}
  //           cornerDotColor={qrCodeData?.cornerDotColor}
  //           selectedCornerStyle={qrCodeData?.selectedCornerStyle}
  //           selectedDotStyle={qrCodeData?.selectedDotStyle}
  //           data={data?.image_path}
  //         />
  //       );
  //     // ... Add cases for other frames
  //     default:
  //       return null;
  //   }
  // };

  const handleDelete = async (id) => {
    // console.log("delete_id", id);
    setShowConfirmationModal(false);
    const res = await apis.deleteQrCode({ id });
    // console.log("ress", res);
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

      navigate("/my-qr-codes-details", {
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
    { id: 7, name: "business_page" },
    { id: 8, name: "social_media" },
    { id: 9, name: "Apps" },
    { id: 10, name: "Links" },
    { id: 11, name: "image_gallery" },
    { id: 12, name: "Landing" },
    { id: 13, name: "Events" },
    { id: 14, name: "elabels" },
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

  const resetFilter = async () => {
    if (selectedTypes.length > 0) {
      setSelectedTypes([]);
      // refetchAllQrCodes();
    }
  };

  useEffect(() => {
    // Only call the API if there are selected types
    if (selectedTypes.length > 0) {
      const timer = setTimeout(() => {
        refetchAllQrCodes();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [selectedTypes, refetchAllQrCodes]);

  const displayText = () => {
    // Map specific types to their custom labels
    const typeLabels = {
      business_page: "Business",
      social_media: "Social",
      image_gallery: "Gallery",
    };

    // Map selected types to display labels and handle more than three selections
    const mappedSelectedTypes = selectedTypes.map(
      (type) => typeLabels[type] || type
    );

    if (mappedSelectedTypes.length > 3) {
      return `${mappedSelectedTypes.slice(0, 2).join(", ")}...`;
    }

    return mappedSelectedTypes.join(", ") || "Select QR Types";
  };

  // FILTER SORT_BY HANDLECHANGE
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  console.log("SORTTT", sortBy);

  // console.log("selectedTypes", selectedTypes);
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
                  <div className="statusDropdown" style={{ display: "none" }}>
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
                              value={type.name}
                              checked={selectedTypes.includes(type.name)}
                              onChange={handleCheckboxChange}
                            />
                            {type.name === "business_page"
                              ? "Business"
                              : type.name === "social_media"
                              ? "Social"
                              : type.name === "image_gallery"
                              ? "Gallery"
                              : type.name}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="cleanFilter" onClick={resetFilter}>
                    <RxCross2 size={22} />
                    <h6>Clean Filter</h6>
                  </div>
                </div>
                <div className="right">
                  <div className="sortByDropdown">
                    <div className="Select__prefix">Sort By:</div>
                    <select
                      name="status"
                      id="qrStatusDropdown"
                      value={sortBy}
                      onChange={handleSortChange}
                    >
                      <option value="most_recent">Most Recent</option>
                      <option value="last_updated">Last Updated</option>
                      <option value="sort_name">Name</option>
                    </select>
                    <FaChevronDown className="dropdown-icon" />
                  </div>
                </div>
              </div>
            </div>
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
                    {getALLQrCodes?.data
                      // ?.slice()
                      // ?.reverse()
                      .map((qrCode, index) => {
                        const selectedFrame = qrCode?.style?.frameName;
                        // console.log("selectedFrametyy", selectedFrame);
                        const isLoading = loadingMap[qrCode.id];
                        // const currentStatus = statuses[qrCode.id] || 2; // Default to "Paused" if no status set
                        const isPaused = 2;
                        console.log("qrcodeee", qrCode);
                        const products = [
                          "wine",
                          "beer",
                          "cigars",
                          "coffee",
                          "food",
                          "product",
                        ];
                        const matchedProduct = products.find(
                          (product) => qrCode[product] === "true"
                        );
                        return (
                          <div
                            className="all-qrCode-con"
                            key={qrCode.id || index}
                          >
                            <div className="result-cardd">
                              <div className="one">
                                <div
                                  className="img-con"
                                  ref={qrCodeRef}
                                  onClick={() => {
                                    setShowPreviewScanModal(true);
                                    setPreviewScanImageData(qrCode);
                                  }}
                                >
                                  {renderFrame(
                                    selectedFrame,
                                    qrCode?.style,
                                    qrCode
                                  )}

                                  {/* <img src="/assets/images/qrDelete.png" alt="qrdelete" style={{width:"80px",height:"80px"}}/> */}
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
                                  <h3>
                                    {qrCode?.type === "elabels"
                                      ? matchedProduct.toUpperCase()
                                      : qrCode?.qr_name}
                                  </h3>
                                </div>
                              </div>
                              <div className="two">
                                <p
                                  className="status"
                                  style={{ display: "none" }}
                                >
                                  Active
                                </p>
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
                                        href={
                                          qrCode.outcome.startsWith("http")
                                            ? qrCode.outcome
                                            : `http://${qrCode.outcome}`
                                        }
                                        // href={qrCode?.outcome}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: "none" }}
                                      >
                                        <h6 className="link">
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
                                  {qrCode?.scan_count
                                    ? qrCode?.scan_count
                                    : "0"}
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
                                <p
                                  onClick={() =>
                                    handleDownload(qrCode?.style, qrCode)
                                  }
                                >
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
                                      <div
                                        className="delete-wrap"
                                        onClick={() =>
                                          openConfirmationModal(
                                            qrCode.id,
                                            "delete"
                                          )
                                        }
                                      >
                                        <MdDelete className="delete-icon" />
                                        <h4>Delete</h4>
                                      </div>

                                      <h4
                                        onClick={() =>
                                          openConfirmationModal(
                                            qrCode.id,
                                            isPaused ? "pause" : "activate"
                                          )
                                        }
                                        style={{ display: "none" }}
                                      >
                                        {isPaused ? (
                                          <div className="delete-wrap">
                                            <IoIosPause size={20} />
                                            Paused
                                          </div>
                                        ) : (
                                          <>
                                            <RxResume size={20} />
                                            Active
                                          </>
                                        )}
                                      </h4>
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
                      loading="lazy"
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
        title={modalContent.title}
        svgType={modalContent.svgType}
        confirmButtonText={modalContent.confirmButtonText}
        onConfirm={modalContent.onConfirm}
      />
      <OpenQrScanModal
        setShowPreviewScanModal={setShowPreviewScanModal}
        showPreviewScanModal={showPreviewScanModal}
        qrObjData = {PreviewScanImageData}
      />
    </>
  );
};

export default QrMainPage;
