import React, { useRef, useState } from "react";
import { QrCodeScanner, Sidebar, SubscriptionPopup } from "../../components";
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

const QrMainPage = () => {
  const navigate = useNavigate();
  const qrCodeRef = useRef(null);
  const [showDeleteBox, setShowDeleteBox] = useState(null);
  const [loadingMap, setLoadingMap] = useState({});

  const handleDeleteBoxToggle = (id) => {
    // console.log("handleDeleteBoxToggleIDDD", id);
    setShowDeleteBox(showDeleteBox === id ? null : id);
  };

  const {
    isLoading,
    refetch: refetchAllQrCodes,
    data: { data: getALLQrCodes } = {},
  } = useQuery({
    queryKey: ["getALLQrCodes"],
    queryFn: () => apis.GETAllQrCode(),
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
      let userQrStats = await apis.getEachUserQRStat(singleViewDetail?.id);
      let statsData = userQrStats?.data;
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
          statsData,
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
      console.log("qrDataEdit", qrData);
      navigate(`/qr-editor/${type}`, { state: { qrData } });
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoadingMap((prev) => ({ ...prev, [id]: false }));
    }
  };
  return (
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
          {isLoading ? (
            <div className="loader-wrapper">
              <div className="loaderr" />
            </div>
          ) : (
            <div className="bottom">
              <div className="status-con"></div>
              {getALLQrCodes?.data.length > 0 &&
                [...getALLQrCodes?.data]?.reverse().map((qrCode, index) => {
                  const selectedFrame = qrCode?.style?.frameName;
                  const isLoading = loadingMap[qrCode.id];

                  return (
                    <div className="all-qrCode-con" key={index}>
                      {/* {console.log("qrCode", qrCode)} */}
                      <div className="result-cardd">
                        <div className="one">
                          <div className="img-con" ref={qrCodeRef}>
                            {renderFrame(selectedFrame, qrCode?.style, qrCode)}

                            {/* <img
                              src="/assets/images/qr-code.png"
                              alt="qr-code"
                            /> */}
                          </div>
                          <div className="content-wrap">
                            <h4>{qrCode?.type}</h4>
                            <h3>{qrCode?.qr_name}</h3>
                          </div>
                        </div>
                        <div className="two">
                          {/* <p className="status">Draft</p> */}
                          <div className="modifiedDate-con">
                            <div className="wrap">
                              <CreatedIconDashboard />
                              <h6>Created: {qrCode?.created_at}</h6>
                            </div>
                            <div className="wrap">
                              <ModifiedIconDashboard />
                              <h6>Modified: {qrCode?.updated_at}</h6>
                            </div>
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
                            onClick={() => handleEdit(qrCode?.id, qrCode.type)}
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
                              onClick={() => handleDeleteBoxToggle(qrCode?.id)}
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

              <div className="pagination-con"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QrMainPage;
