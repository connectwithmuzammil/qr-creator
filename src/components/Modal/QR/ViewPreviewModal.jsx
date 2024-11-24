import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { PreviewFrame, TopPreviewHeader } from "../../SVGIcon";
import {
  QRPreviewBusiness,
  QRPreviewURL,
  QRPreviewVCard,
} from "../../QRDetailPages/QRPreviewAll";
import ToggleButton from "../../QRDetailPages/QRToggleButton";

const ViewPreviewModal = ({
  showModalPreview,
  setShowModalPreview,
  type,
  localQrData,
  showToggleBtn,
}) => {
  console.log("check type", type);
  const [selectedOption, setSelectedOption] = useState("Preview Page");
  const handleToggle = (option) => {
    setSelectedOption(option);
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
        <ToggleButton selectedOption={selectedOption} onToggle={handleToggle} />
      )}
      <Modal.Body>
        <div className="right">
          <div className="qr-preview__layout__image">
            <div className="Preview-layout Preview-layout--vcard">
              <TopPreviewHeader
                className="topHeaderSvg"
                urlLink={localQrData?.field_url}
              />
              {type === "url" ? (
                <QRPreviewURL localQrData={localQrData} />
              ) : type === "vcard" ? (
                <QRPreviewVCard localQrData={localQrData} />
              ) : type === "business_page" ? (
                <QRPreviewBusiness localQrData={localQrData} />
              ) : (
                ""
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
