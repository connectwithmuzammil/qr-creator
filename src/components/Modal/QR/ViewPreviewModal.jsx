import React from "react";
import { Modal } from "react-bootstrap";
import { PreviewFrame, TopPreviewHeader } from "../../SVGIcon";
import { QRPreviewBusiness, QRPreviewURL, QRPreviewVCard } from "../../QRDetailPages/QRPreviewAll";

const ViewPreviewModal = ({
  showModalPreview,
  setShowModalPreview,
  type,
  localQrData,
}) => {
  console.log("check type", type);
  return (
    <Modal
      show={showModalPreview}
      onHide={() => setShowModalPreview(false)}
      centered
      size="lg"
      className="previewModal"
    >
      <Modal.Header closeButton />
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
