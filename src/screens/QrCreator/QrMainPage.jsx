import React, { useState } from "react";
import { Sidebar } from "../../components";
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
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import apis from "../../services";
import { useQuery } from "@tanstack/react-query";

const QrMainPage = () => {
  const [showDeleteBox, setShowDeleteBox] = useState(null);
  const handleDeleteBoxToggle = (id) => {
    setShowDeleteBox(showDeleteBox === id ? null : id);
  };

  const {
    isLoading,
    error,
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

  const renderFrame = () => {
    switch (selectedFrame) {
      case "notSelctedFrame":
        console.log("INSIDE notSelctedFrame CASE");
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
        console.log("INSIDE CASE 1");
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

  const handleDelete = async (id) => {
    console.log("delete_id", id);
    const res = await apis.deleteQrCode({ id });
    console.log("ress", res);
    refetchAllQrCodes();
    setShowDeleteBox(null);
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
          {isLoading ? (
            <></>
          ) : (
            <div className="bottom">
              <div className="status-con"></div>
              {getALLQrCodes?.data.length > 0 &&
                getALLQrCodes?.data.map((qrCode, index) => {
                  return (
                    <div className="all-qrCode-con" key={index}>
                      {console.log("qrCode", qrCode)}
                      <div className="result-cardd">
                        <div className="one">
                          <div className="img-con">
                            <img
                              src="/assets/images/qr-code.png"
                              alt="qr-code"
                            />
                          </div>
                          <div className="content-wrap">
                            <h4>Wifi</h4>
                            <h3>{qrCode?.qr_name}</h3>
                          </div>
                        </div>
                        <div className="two">
                          <p className="status">Draft</p>
                          <div className="modifiedDate-con">
                            <div className="wrap">
                              <CreatedIconDashboard />
                              <h6>Created: Sep 7, 2024</h6>
                            </div>
                            <div className="wrap">
                              <ModifiedIconDashboard />
                              <h6>Modified: Sep 7, 2024</h6>
                            </div>
                          </div>
                        </div>
                        <div className="three">
                          <p>Scans</p>
                          <h1>0</h1>
                        </div>
                        <div className="four">
                          <p>View details</p>
                          <p>
                            Edit
                            <span>
                              <MdEdit size={14} />
                            </span>
                          </p>
                          <p>
                            Download
                            <span>
                              <MdDownload size={18} />
                            </span>
                          </p>
                          <div className="delete-box">
                            <p onClick={() => handleDeleteBoxToggle(qrCode.id)}>
                              <BsThreeDotsVertical size={18} />
                            </p>
                            {showDeleteBox === qrCode.id && (
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
