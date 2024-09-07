import React, { useState } from "react";
import URL from "../../assets/images/url.svg";
import vcard from "../../assets/images/icon-qr-vcard.svg";
import business from "../../assets/images/icon-qr-business.svg";
import social from "../../assets/images/icon-qr-social.svg";
import apps from "../../assets/images/icon-qr-apps.svg";
import video from "../../assets/images/icon-qr-video.svg";
import pdf from "../../assets/images/icon-qr-pdf.svg";
import links from "../../assets/images/icon-qr-links.svg";
import wifi from "../../assets/images/icon-qr-wifi.svg";
import gallery from "../../assets/images/icon-qr-image.svg";
import youtube from "../../assets/images/icon-qr-youtube.svg";
import landing from "../../assets/images/icon-qr-website.svg";
import event from "../../assets/images/icon-qr-event.svg";
import { BottomWrapperStages, Header } from "../../components";
import { useNavigate } from "react-router-dom";

const QrCreator = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const qrCodesList = [
    {
      type: "url",
      title: "URL",
      description: "Link to a website of your choice",
      imgSrc: URL,
      rightImage: "/assets/images/phone-url.png",
    },
    {
      type: "vcard",
      title: "vCard",
      description: "Create a virtual business card",
      imgSrc: vcard,
      rightImage: "/assets/images/phone-vcard.png",
    },
    {
      type: "business_page",
      title: "Business Page",
      description: "Display your business information",
      imgSrc: business, 
      rightImage: "/assets/images/phone-business.png",
    },
    {
      type: "social_media",
      title: "Social Media",
      description: "Link to your social media channels",
      imgSrc: social,
      rightImage: "/assets/images/phone-social.png",
    },
    {
      type: "apps",
      title: "Apps",
      description: "Redirect to biggest app stores",
      imgSrc: apps,
      rightImage: "/assets/images/phone-apps.png",
    },
    {
      type: "video",
      title: "Video",
      description: "Share one or multiple videos",
      imgSrc: video,
      rightImage: "/assets/images/phone-video.png",
    },
    {
      type: "pdf",
      title: "PDF",
      description: "Scan to display a PDF file",
      imgSrc: pdf,
      rightImage: "/assets/images/phone-pdf.png",
    },
    {
      type: "links",
      title: "Links",
      description: "Create a list of useful links",
      imgSrc: links,
      rightImage: "/assets/images/phone-links.png",
    },
    {
      type: "wifi",
      title: "Wi-Fi",
      description: "Connect to wireless network",
      imgSrc: wifi,
      rightImage: "/assets/images/phone-wifi.png",
    },
    {
      type: "image_gallery",
      title: "Images Gallery",
      description: "Show a gallery of images",
      imgSrc: gallery,
      rightImage: "/assets/images/phone-image.png",
    },
    {
      type: "youtube",
      title: "YouTube",
      description: "Take users to a YouTube video",
      imgSrc: youtube,
      rightImage: "/assets/images/phone-youtube.png",
    },
    {
      type: "landing",
      title: "Landing Page",
      description: "Create your own website",
      imgSrc: landing,
      rightImage: "/assets/images/phone-website.png",
    },
    {
      type: "event",
      title: "Event",
      description: "Share event info and invite guests",
      imgSrc: event,
      rightImage: "/assets/images/phone-event.png",
    },
  ];
  const navigate = useNavigate();
  const handleCardClick = (type) => {
    setSelectedCard(type);
    // navigate(`/qr-editor/${type}`);
  };
  const handleNextClick = () => {
    if (selectedCard) {
      navigate(`/qr-editor/${selectedCard}`);
    }
  };
  const handleCancelClick = () => {
    setSelectedCard(null);
    navigate(`/my-qr-codes`);
  };
  return (
    <>
      <Header />
      <div className="qr-creator-main">
        <div className="page1">
          <div className="containerr">
            <div className="left">
              <h1 className="h1">1. Select the QR code you want to create:</h1>
              <div className="card-con">
                {qrCodesList?.map((qrCode) => (
                  <div
                    key={qrCode.type}
                    className={`cardd ${
                      selectedCard === qrCode.type ? "active" : ""
                    }`}
                    onClick={() => handleCardClick(qrCode.type)}
                  >
                    <div
                      className={`img-con ${
                        selectedCard === qrCode.type ? "active" : ""
                      }`}
                    >
                      <img src={qrCode.imgSrc} alt={qrCode.type} />
                    </div>
                    <div className="wrap">
                      <h2>{qrCode.title}</h2>
                      <p>{qrCode.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              {selectedCard && (
                <img
                  src={
                    qrCodesList.find((qrCode) => qrCode.type === selectedCard)
                      .rightImage
                  }
                  alt={`phone-${selectedCard}`}
                />
              )}
              {!selectedCard && (
                <img
                  src="/assets/images/phone-example-default.png"
                  alt="phone-example-default"
                />
              )}
            </div>
          </div>
        </div>

        <BottomWrapperStages
          currentStage={1}
          onNextClick={handleNextClick}
          onCancelClick={handleCancelClick}
          showNextButton={Boolean(selectedCard)}
        />
        {/* <div className="bottom-wrapper">
          <button className="cancel">Cancel</button>
          <div className="stages-con">
            <div className="select-qr">
              <div className="wrap">
                <h5 className="active">1</h5>
                <p className="active">Select QR code</p>
              </div>
              <MdChevronRight />
            </div>
            <div className="select-qr">
              <div className="wrap">
                <h5>2</h5>
                <p>Add content</p>
              </div>
              <MdChevronRight />
            </div>
            <div className="select-qr">
              <div className="wrap">
                <h5>3</h5>
                <p>Customize design</p>
              </div>
            </div>
          </div>
          <div className="btn-next">
            <button className="next">Next</button>
            <MdChevronRight />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default QrCreator;
