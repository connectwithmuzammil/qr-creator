import React from "react";
import { BottomWrapperStages, Header } from "../../components";

const QRDetail = () => {
  return (
    <>
      <Header />
      <div className="qr-editor-detail">
        <div className="top">
          <h1>2. Your QR code content</h1>
        </div>
        <div className="bottom">
          <div className="containerr">
            <div className="left">
              <div className="cardd">
                <p>Enter the name of your QR code</p>
                <input type="text" name="" id="" placeholder="e.g My QR code" />
              </div>
              <div className="cardd">
                <p>Type in the URL to link with your QR Code *</p>
                <input
                  type="url"
                  name=""
                  id=""
                  placeholder="https://surfershops.com/sale"
                />
              </div>
            </div>
            <div className="right">
              <img src="/assets/images/phone-url.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <BottomWrapperStages
        currentStage={2}
        onCancelClick={() => {}}
        onNextClick={() => {}}
      />
    </>
  );
};

export default QRDetail;
