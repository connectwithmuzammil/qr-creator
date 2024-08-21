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
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default QrMainPage;
