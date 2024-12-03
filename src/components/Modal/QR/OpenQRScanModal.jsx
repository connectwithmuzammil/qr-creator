import React from "react";
import { Modal } from "react-bootstrap";
import {
  NotSelectedFrameCanvas,
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
} from "../../SVGIcon";

const OpenQrScanModal = ({
  showPreviewScanModal,
  setShowPreviewScanModal,
  qrObjData,
}) => {
  // console.log("qrObjData", qrObjData);
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
    const FrameComponent =
      FRAME_COMPONENTS[qrObjData?.style?.frameName] || null;

    const commonProps = {
      frameColor: qrObjData?.style?.frameColor,
      backgroundColor: qrObjData?.style?.backgroundColor,
      frameText: qrObjData?.style?.frameText,
      frameTextColor: qrObjData?.style?.frameTextColor,
      cornerBackgroundColor: qrObjData?.style?.cornerBackgroundColor,
      dotColor: qrObjData?.style?.dotColor,
      cornerBorderColor: qrObjData?.style?.cornerBorderColor,
      cornerDotColor: qrObjData?.style?.cornerDotColor,
      selectedCornerStyle: qrObjData?.style?.selectedCornerStyle,
      selectedDotStyle: qrObjData?.style?.selectedDotStyle,
      qrLogo: qrObjData?.qrDesignLogo,
      data: qrObjData?.outcome,
    };

    return FrameComponent ? <FrameComponent {...commonProps} /> : null;
  };

  return (
    <Modal
      show={showPreviewScanModal}
      onHide={() => setShowPreviewScanModal(false)}
      centered
      size="lg"
      className="previewQrCodeSingle"
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="qr-preview">
          <div
            className="img-con"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {renderFrame()}
            <div className="frame-overlay" style={{ position: "static" }}></div>
          </div>
        </div>
        <h3>Scan QR code</h3>
      </Modal.Body>
    </Modal>
  );
};

export default OpenQrScanModal;
