import React, { useState } from "react";
import { BottomWrapperStages, Header, URL } from "../../components";
import { useNavigate, useParams } from "react-router-dom";

const QRDetail = () => {
  const initialState = {
    type: "url",
    content: {
      qrName: "qr-code",
      fieldUrl: "https://www.qrcreator.com/qr-editor/url",
    },
    style: {
      backgroundColor: "#FFFFFF",
      dotsStyle: "square",
      dotsColor: "#000000",
      cornerStyle: "rounded-dot",
    },
  };
  const [qrData, setQrData] = useState(initialState);
  // console.log("qrDataqrData",qrData)
  const navigate = useNavigate();
  const { type } = useParams();
  // console.log("QR-TYPE", type);

  const handleNextClick = () => {
    navigate(`/qr-editor/${type}/design`);
  };

  const handleCancelClick = () => {
    navigate(`/qr-editor`);
  };

  const renderDetailContent = () => {
    switch (type) {
      case "url":
        return (
          <>
            <URL />
          </>
        );
      case "vcard":
        return <div>Virtual Card Form</div>;
      default:
        return <div>No Form Available</div>;
    }
  };

  return (
    <>
      <Header />
      <div className="qr-editor-detail">
        <div className="top">
          <h1>2. Your QR code content</h1>
        </div>
        {renderDetailContent()}
      </div>

      <BottomWrapperStages
        currentStage={2}
        onNextClick={handleNextClick}
        onCancelClick={handleCancelClick}
        showNextButton={true}
      />
    </>
  );
};

export default QRDetail;
