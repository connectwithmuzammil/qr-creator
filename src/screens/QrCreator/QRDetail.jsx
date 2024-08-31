import React, { useEffect, useState } from "react";
import { BottomWrapperStages, Header, PDF, URL } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import apis from "../../services";
import { toast } from "react-toastify";

const QRDetail = () => {
  const { type } = useParams();
  const initialState = {
    qr_name: "",
    field_url: "",
    type: "",
    style: {
      dotsStyle: "square",
      dotsColor: "#000000",
      cornerStyle: "rounded-dot",
      cornerBackgroundColor: "#ffffff",
      cornerBorderColor: "#000000",
      cornerDotColor: "#000000",
      backgroundColor: "#FFFFFF",
      frameStyle: "none",
      frameColor: "#404040",
      frameText: "SCAN ME!",
      frameTextColor: "#FFFFFF",
      frameName: "",
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

  const navigate = useNavigate();

  const handleNextClick = async () => {
    const dataToSend = {
      type: qrData.type,
      style: qrData.style,
      ...(type === "url"
        ? { field_url: qrData.field_url, qr_name: qrData.qr_name }
        : {}),
      ...(type === "vcard"
        ? { field_name: qrData.field_name, field_phone: qrData.field_phone }
        : {}),
    };
    // try {
    //   let res = await apis.validateQrCode(type);
    //   console.log("ress", res);
    //   toast.error(res.data.message)
    // } catch (error) {
    // }
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
      case "pdf":
        return (
          <div>
            <PDF />
          </div>
        );
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
        // qrData={qrData}
      />
    </>
  );
};

export default QRDetail;
