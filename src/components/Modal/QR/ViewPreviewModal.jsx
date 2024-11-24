import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { PreviewFrame, TopPreviewHeader } from "../../SVGIcon";
import {
  QRPreviewApps,
  QRPreviewBusiness,
  QRPreviewLinks,
  QRPreviewPdf,
  QRPreviewSocial,
  QRPreviewURL,
  QRPreviewVCard,
  QRPreviewVideo,
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
}) => {
  const {
    selectedFrame,
    CornerbgColor,
    dotColor,
    cornerBorderColor,
    cornerDotColor,
    selectedCornerStyle,
    selectedDotStyle,
    QRLogo,
    frameColor,
    frameBgColor,
    frameTextColor,
    frameText,
  } = style;
  console.log("check type", type);
  const location = useLocation();

  const [selectedOption, setSelectedOption] = useState(
    location?.pathname === `/qr-editor/${type}` ? "Preview Page" : "QR Code"
  );
  const handleToggle = (option) => {
    setSelectedOption(option);
  };
  const previewComponents = {
    url: <QRPreviewURL localQrData={localQrData} />,
    vcard: <QRPreviewVCard localQrData={localQrData} />,
    social_media: <QRPreviewSocial localQrData={localQrData} />,
    business_page: <QRPreviewBusiness localQrData={localQrData} />,
    apps: <QRPreviewApps localQrData={localQrData} />,
    video: <QRPreviewVideo localQrData={localQrData} />,
    pdf: <QRPreviewPdf localQrData={localQrData} />,
    links: <QRPreviewLinks localQrData={localQrData} />,
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
          <div className="qr-preview__layout__image">
            <div className="Preview-layout Preview-layout--vcard">
              <TopPreviewHeader
                className="topHeaderSvg"
                urlLink={localQrData?.field_url}
              />
              {selectedOption === "Preview Page" && previewComponents[type]}

              {selectedOption === "QR Code" && (
                <div className="qrCodePreviewMobile">
                  <RenderFrame
                    selectedFrame={selectedFrame}
                    CornerbgColor={CornerbgColor}
                    dotColor={dotColor}
                    cornerBorderColor={cornerBorderColor}
                    cornerDotColor={cornerDotColor}
                    selectedCornerStyle={selectedCornerStyle}
                    selectedDotStyle={selectedDotStyle}
                    QRLogo={QRLogo}
                    frameColor={frameColor}
                    frameBgColor={frameBgColor}
                    frameTextColor={frameTextColor}
                    frameText={frameText}
                  />
                </div>
              )}
            </div>

            <PreviewFrame className="preview-frame" />
          </div>
          {/* <img src="/assets/images/phone-website.png" alt="phone-website" /> */}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ViewPreviewModal;
