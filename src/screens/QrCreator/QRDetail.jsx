import React, { useEffect, useState } from "react";
import { BottomWrapperStages, Header, URL } from "../../components";
import { useNavigate, useParams } from "react-router-dom";

const QRDetail = () => {
  const { type } = useParams();
  const initialState = {
    qr_name: "",
    field_url: "",
    type: "",
    style: {
      backgroundColor: "#FFFFFF",
      dotsStyle: "square",
      dotsColor: "#000000",
      cornerStyle: "rounded-dot",
      cornerBackgroundColor: "#000000",
      cornerBorderColor: "#000000",
      frameStyle: "none",
      frameColor: "#404040",
      frameText: "SCAN ME!",
      frameTextColor: "#FFFFFF",
    },
  };
  const [qrData, setQrData] = useState(initialState);
  // console.log("qrDataqrData",qrData)

  useEffect(() => {
    setQrData((prevState) => ({
      ...prevState,
      type: type,
    }));
  }, [type]);

  console.log("qrData.type", qrData?.type);

  const getPayload = () => {
    switch (qrData.type) {
      case "url":
        return {
          field_url: qrData.field_url,
          type: qrData.type,
          style: qrData.style,
        };
      case "vcard":
        return {
          name: "John Doe", // Example vCard fields
          phone: "1234567890",
          type: qrData.type,
          style: qrData.style,
        };
      // Add other cases for different types if needed
      default:
        return {
          error: "Unknown type",
        };
    }
  };

  const navigate = useNavigate();

  const handleNextClick = () => {
    const dataToSend = {
      type: qrData.type,
      style: qrData.style,
      ...(type === 'url' ? { field_url: qrData.field_url, qr_name: qrData.qr_name } : {}),
      ...(type === 'vcard' ? { field_name: qrData.field_name, field_phone: qrData.field_phone } : {}),
    };
    navigate(`/qr-editor/${type}/design`, { state: { qrData: dataToSend } });
  };

  const handleCancelClick = () => {
    navigate(`/qr-editor`);
  };

  const renderDetailContent = () => {
    switch (type) {
      case "url":
        return (
          <>
            <URL qrData={qrData} setQrData={setQrData} />
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
        qrData={qrData}
        getPayload={getPayload}
      />
    </>
  );
};

export default QRDetail;
