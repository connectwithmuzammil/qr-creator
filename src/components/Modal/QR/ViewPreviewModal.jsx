import React from "react";
import { Modal } from "react-bootstrap";
import { PreviewFrame, TopPreviewHeader } from "../../SVGIcon";
import { QRPreviewURL } from "../../QRDetailPages/QRPreviewAll";

const ViewPreviewModal = ({ showModalPreview, setShowModalPreview,type,localQrData }) => {
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
                <QRPreviewURL localQrData={localQrData} />
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
