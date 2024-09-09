import React, { useState } from "react";
import { Sidebar } from "../../components";
import {
  CreatedIconDashboard,
  ModifiedIconDashboard,
  SideBarQrCodeSVG,
} from "../../components/SVGIcon";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const QrMainPage = () => {
  const [showDeleteBox, setShowDeleteBox] = useState(false);

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
          <div className="bottom">
            <div className="status-con"></div>
            <div className="all-qrCode-con">
              <div className="result-cardd">
                <div className="one">
                  <div className="img-con">
                    <img src="/assets/images/qr-code.png" alt="qr-code" />
                  </div>
                  <div className="content-wrap">
                    <h4>Wifi</h4>
                    <h3>Your QR Code</h3>
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
                    <p onClick={() => setShowDeleteBox(!showDeleteBox)}>
                      <BsThreeDotsVertical size={18} />
                    </p>
                    {showDeleteBox && (
                      <div className="box">
                        <MdDelete className="delete-icon" />
                        <h4>Delete</h4>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination-con"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrMainPage;
