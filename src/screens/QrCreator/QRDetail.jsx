import React, { useEffect, useState } from "react";
import {
  APPS,
  BottomWrapperStages,
  GALLERY,
  Header,
  LANDING,
  LINKS,
  PDF,
  Social,
  URL,
  VCARD,
  Video,
  WIFI,
  YOUTUBE,
} from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import {
  UrlSchema,
  WifiSchema,
  youtubeSchema,
} from "../../Helper/QRValidation";
import { toast } from "react-toastify";

const QRDetail = () => {
  const { type } = useParams();
  const initialState = {
    qr_name: "",
    //URL
    field_url: "",
    //WIFI
    network_name: "",
    network_password: "",
    network_security_type: "",
    //YOTUBE
    youtube_url: "",
    //PDF
    pdf_file: "",
    pdf_company: "",
    pdf_title: "",
    pdf_description: "",
    pdf_website: "",
    //APPS
    app_name: "",
    app_company: "",
    app_description: "",
    app_logo: "",
    app_website: "",

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
    color: {
      background: "",
      button: "",
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

  console.log("qrData", qrData);

  const navigate = useNavigate();

  const handleNextClick = async () => {
    try {
      if (type === "youtube") {
        await youtubeSchema.validate(qrData);
      } else if (type === "url") {
        await UrlSchema.validate(qrData);
      } else if (type === "wifi") {
        await WifiSchema.validate(qrData);
      }

      const dataToSend = {
        type: qrData.type,
        style: qrData.style,
        ...(type === "url"
          ? { field_url: qrData.field_url, qr_name: qrData.qr_name }
          : {}),
        ...(type === "vcard"
          ? { field_name: qrData.field_name, field_phone: qrData.field_phone }
          : {}),
        ...(type === "wifi"
          ? {
              qr_name: qrData.qr_name,
              network_name: qrData.network_name,
              network_password: qrData.network_password,
              network_security_type: qrData.network_security_type,
            }
          : {}),
        ...(type === "youtube"
          ? {
              qr_name: qrData.qr_name,
              youtube_url: qrData.youtube_url,
            }
          : {}),
        ...(type === "pdf"
          ? {
              qr_name: qrData.qr_name,
              pdf_file: qrData.pdf_file,
              pdf_company: qrData.pdf_company,
              pdf_title: qrData.pdf_title,
              pdf_description: qrData.pdf_description,
              pdf_website: qrData.pdf_website,
              color: qrData.color,
            }
          : {}),
        ...(type === "apps"
          ? {
              qr_name: qrData?.qr_name,
              app_name: qrData?.app_name,
              app_company: qrData?.app_company,
              app_description: qrData?.app_description,
              app_website: qrData?.app_website,
              color: qrData.color,
            }
          : {}),
      };
      navigate(`/qr-editor/${type}/design`, { state: { qrData: dataToSend } });
    } catch (error) {
      console.log("error", error);
      toast.error(error.errors[0]);
    }
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
        return <VCARD qrData={qrData} setQrData={setQrData} />;
      case "pdf":
        return (
          <div>
            <PDF qrData={qrData} setQrData={setQrData} />
          </div>
        );
      case "wifi":
        return (
          <div>
            <WIFI qrData={qrData} setQrData={setQrData} />
          </div>
        );
      case "youtube":
        return (
          <div>
            <YOUTUBE qrData={qrData} setQrData={setQrData} />
          </div>
        );
      case "apps":
        return (
          <div>
            <APPS qrData={qrData} setQrData={setQrData} />
          </div>
        );
      case "gallery":
        return (
          <div>
            <GALLERY qrData={qrData} setQrData={setQrData} />
          </div>
        );
      case "links":
        return (
          <div>
            <LINKS qrData={qrData} setQrData={setQrData} />
          </div>
        );
      case "landing":
        return (
          <div>
            <LANDING qrData={qrData} setQrData={setQrData} />
          </div>
        );
      case "social":
        return (
          <div>
            <Social qrData={qrData} setQrData={setQrData} />
          </div>
        );
      case "video":
        return (
          <div>
            <Video qrData={qrData} setQrData={setQrData} />
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

// let isValid = true;
// let errorMessage = "";

// if (type === "url") {
//   if (!qrData.field_url) {
//     isValid = false;
//     errorMessage = "Please enter the URL";
//   }
// }
// if (!isValid) {

//   toast.error(errorMessage);
//   return;
// }
