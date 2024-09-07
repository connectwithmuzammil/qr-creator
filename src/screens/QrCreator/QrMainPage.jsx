import React from "react";
import { Sidebar } from "../../components";
import { SideBarQrCodeSVG } from "../../components/SVGIcon";
import { Link } from "react-router-dom";

const QrMainPage = () => {
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
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
                <div className="four"></div>
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
