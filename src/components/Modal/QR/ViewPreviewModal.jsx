import React, { useState } from "react";
import { Modal } from "react-bootstrap";
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
  NotSelectedFrameCanvas,
  PreviewFrame,
  TopPreviewHeader,
} from "../../SVGIcon";
import {
  QRPreviewApps,
  QRPreviewBusiness,
  QRPreviewElabelsBeer,
  QRPreviewElabelsCigar,
  QRPreviewElabelsCoffee,
  QRPreviewElabelsFood,
  QRPreviewElabelsProduct,
  QRPreviewElabelsWine,
  QRPreviewEvent,
  QRPreviewGallery,
  QRPreviewLanding,
  QRPreviewLinks,
  QRPreviewPdf,
  QRPreviewSocial,
  QRPreviewURL,
  QRPreviewVCard,
  QRPreviewVideo,
  QRPreviewYoutube,
} from "../../QRDetailPages/QRPreviewAll";
import ToggleButton from "../../QRDetailPages/QRToggleButton";
import { RenderFrame } from "../../RenderFrameQR";
import { useLocation } from "react-router-dom";

const ViewPreviewModal = ({
  showModalPreview,
  setShowModalPreview,
  type,
  localQrData,
  showToggleBtn,
  style = {},
  elabelsSelectedProduct,
}) => {
  const {
    selectedFrame,
    cornerBackgroundColor,
    dotsColor,
    cornerBorderColor,
    cornerDotColor,
    selectedCornerStyle,
    dotsStyle,
    QRLogo,
    frameColor,
    backgroundColor,
    frameTextColor,
    frameText,
  } = style;
  console.log("check type", style);
  const location = useLocation();

  const [selectedOption, setSelectedOption] = useState(
    location?.pathname === `/qr-editor/${type}` ? "Preview Page" : "QR Code"
  );
  const handleToggle = (option) => {
    setSelectedOption(option);
  };
  // console.log("elabelsSelectedProduct", elabelsSelectedProduct);
  const previewComponents = {
    url: <QRPreviewURL localQrData={localQrData} />,
    vcard: <QRPreviewVCard localQrData={localQrData} />,
    social_media: <QRPreviewSocial localQrData={localQrData} />,
    business_page: <QRPreviewBusiness localQrData={localQrData} />,
    apps: <QRPreviewApps localQrData={localQrData} />,
    video: <QRPreviewVideo localQrData={localQrData} />,
    pdf: <QRPreviewPdf localQrData={localQrData} />,
    links: <QRPreviewLinks localQrData={localQrData} />,
    image_gallery: <QRPreviewGallery localQrData={localQrData} />,
    youtube: <QRPreviewYoutube localQrData={localQrData} />,
    landing: <QRPreviewLanding localQrData={localQrData} />,
    events: <QRPreviewEvent localQrData={localQrData} />,
    elabels:
      elabelsSelectedProduct === "beer" ? (
        <QRPreviewElabelsBeer localQrData={localQrData} />
      ) : elabelsSelectedProduct === "coffee" ? (
        <QRPreviewElabelsCoffee localQrData={localQrData} />
      ) : elabelsSelectedProduct === "cigars" ? (
        <QRPreviewElabelsCigar localQrData={localQrData} />
      ) : elabelsSelectedProduct === "food" ? (
        <QRPreviewElabelsFood localQrData={localQrData} />
      ) : elabelsSelectedProduct === "product" ? (
        <QRPreviewElabelsProduct localQrData={localQrData} />
      ) : (
        <QRPreviewElabelsWine localQrData={localQrData} />
      ),
  };

  //Render Frame CANVAS

  const FRAME_COMPONENTS = {
    notSelectedFrame: NotSelectedFrameCanvas,
    frame1: CanvaFrame1,
    frame2: CanvaFrame2,
    frame3: CanvaFrame3,
    frame4: CanvaFrame4,
    frame5: CanvaFrame5,
    frame6: CanvaFrame6,
    frame7: CanvaFrame7,
    frame8: CanvaFrame8,
    frame9: CanvaFrame9,
    frame10: CanvaFrame10,
    frame11: CanvaFrame11,
  };

  const renderFrame = () => {
    const FrameComponent = FRAME_COMPONENTS[selectedFrame] || null;

    const commonProps = {
      frameColor,
      backgroundColor,
      frameText,
      frameTextColor,
      cornerBackgroundColor,
      dotsColor,
      cornerBorderColor,
      cornerDotColor,
      selectedCornerStyle,
      dotsStyle,
      qrLogo: QRLogo,
    };

    return FrameComponent ? <FrameComponent {...commonProps} /> : null;
  };
  return (
    <Modal
      show={showModalPreview}
      onHide={() => setShowModalPreview(false)}
      centered
      size="lg"
      className="previewModal"
    >
      <Modal.Header closeButton />
      {showToggleBtn === "qrDesign" && (
        <ToggleButton
          selectedOption={selectedOption}
          onToggle={handleToggle}
          // showToggleBtn={"qrDesign"}
          showToggleBtn={
            location?.pathname === `/qr-editor/${type}` ? null : "qrDesign"
          }
        />
      )}
      <Modal.Body>
        <div className="right">
          {selectedOption === "Preview Page" && type === "wifi" ? (
            <img
              src="/assets/images/phone-wifi.png"
              alt=" WiFi preview"
              width={"90%"}
            />
          ) : (
            <div className="qr-preview__layout__image">
              <div className="Preview-layout Preview-layout--vcard">
                <TopPreviewHeader
                  className="topHeaderSvg"
                  urlLink={localQrData?.field_url}
                />
                {selectedOption === "Preview Page" && previewComponents[type]}

                {selectedOption === "QR Code" && (
                  <div className="qrCodePreviewMobile">
                    {/* <RenderFrame
                      selectedFrame={selectedFrame}
                      cornerBackgroundColor={cornerBackgroundColor}
                      dotsColor={dotsColor}
                      cornerBorderColor={cornerBorderColor}
                      cornerDotColor={cornerDotColor}
                      selectedCornerStyle={selectedCornerStyle}
                      dotsStyle={dotsStyle}
                      QRLogo={QRLogo}
                      frameColor={frameColor}
                      backgroundColor={backgroundColor}
                      frameTextColor={frameTextColor}
                      frameText={frameText}
                    /> */}
                    {renderFrame()}
                  </div>
                )}
              </div>

              <PreviewFrame className="preview-frame" />
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ViewPreviewModal;
