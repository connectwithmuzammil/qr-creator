import React from "react";
import { Modal } from "react-bootstrap";

const OpenQrScanModal = ({ showPreviewScanModal, setShowPreviewScanModal }) => {
  // const renderFrame = () => {
  //     switch (selectedFrame) {
  //       case "notSelctedFrame":
  //         console.log("INSIDE notSelctedFrame CASE");
  //         return (
  //           <NotSelectedFrameCanvas
  //             CornerbgColor={CornerbgColor}
  //             dotColor={dotColor}
  //             cornerBorderColor={cornerBorderColor}
  //             cornerDotColor={cornerDotColor}
  //             selectedCornerStyle={selectedCornerStyle}
  //             selectedDotStyle={selectedDotStyle}
  //             data={data}
  //           />
  //         );
  //       case "frame1":
  //         console.log("INSIDE CASE 1");
  //         return (
  //           <CanvaFrame1
  //             frameColor={frameColor}
  //             frameBorderColor={frameBgColor}
  //             frameText={frameText}
  //             frameTextColor={frameTextColor}
  //             CornerbgColor={CornerbgColor}
  //             dotColor={dotColor}
  //             cornerBorderColor={cornerBorderColor}
  //             cornerDotColor={cornerDotColor}
  //             selectedCornerStyle={selectedCornerStyle}
  //             selectedDotStyle={selectedDotStyle}
  //             data={data}
  //           />
  //         );
  //       case "frame2":
  //         return (
  //           <CanvaFrame2
  //             frameColor={frameColor}
  //             frameBorderColor={frameBgColor}
  //             frameText={frameText}
  //             frameTextColor={frameTextColor}
  //             CornerbgColor={CornerbgColor}
  //             dotColor={dotColor}
  //             cornerBorderColor={cornerBorderColor}
  //             cornerDotColor={cornerDotColor}
  //             selectedCornerStyle={selectedCornerStyle}
  //             selectedDotStyle={selectedDotStyle}
  //             data={data}
  //           />
  //         );
  //       case "frame3":
  //         return (
  //           <CanvaFrame3
  //             frameColor={frameColor}
  //             frameBorderColor={frameBgColor}
  //             frameText={frameText}
  //             frameTextColor={frameTextColor}
  //             CornerbgColor={CornerbgColor}
  //             dotColor={dotColor}
  //             cornerBorderColor={cornerBorderColor}
  //             cornerDotColor={cornerDotColor}
  //             selectedCornerStyle={selectedCornerStyle}
  //             selectedDotStyle={selectedDotStyle}
  //             data={data}
  //           />
  //         );
  //       case "frame4":
  //         return (
  //           <CanvaFrame4
  //             frameColor={frameColor}
  //             frameBorderColor={frameBgColor}
  //             frameText={frameText}
  //             frameTextColor={frameTextColor}
  //             CornerbgColor={CornerbgColor}
  //             dotColor={dotColor}
  //             cornerBorderColor={cornerBorderColor}
  //             cornerDotColor={cornerDotColor}
  //             selectedCornerStyle={selectedCornerStyle}
  //             selectedDotStyle={selectedDotStyle}
  //             data={data}
  //           />
  //         );
  //       case "frame5":
  //         return (
  //           <CanvaFrame5
  //             frameColor={frameColor}
  //             frameBorderColor={frameBgColor}
  //             frameText={frameText}
  //             frameTextColor={frameTextColor}
  //             CornerbgColor={CornerbgColor}
  //             dotColor={dotColor}
  //             cornerBorderColor={cornerBorderColor}
  //             cornerDotColor={cornerDotColor}
  //             selectedCornerStyle={selectedCornerStyle}
  //             selectedDotStyle={selectedDotStyle}
  //             data={data}
  //           />
  //         );
  //       case "frame6":
  //         return (
  //           <CanvaFrame6
  //             frameColor={frameColor}
  //             frameBorderColor={frameBgColor}
  //             frameText={frameText}
  //             frameTextColor={frameTextColor}
  //             CornerbgColor={CornerbgColor}
  //             dotColor={dotColor}
  //             cornerBorderColor={cornerBorderColor}
  //             cornerDotColor={cornerDotColor}
  //             selectedCornerStyle={selectedCornerStyle}
  //             selectedDotStyle={selectedDotStyle}
  //             data={data}
  //           />
  //         );
  //       case "frame7":
  //         return (
  //           <CanvaFrame7
  //             frameColor={frameColor}
  //             frameBorderColor={frameBgColor}
  //             frameText={frameText}
  //             frameTextColor={frameTextColor}
  //             CornerbgColor={CornerbgColor}
  //             dotColor={dotColor}
  //             cornerBorderColor={cornerBorderColor}
  //             cornerDotColor={cornerDotColor}
  //             selectedCornerStyle={selectedCornerStyle}
  //             selectedDotStyle={selectedDotStyle}
  //             data={data}
  //           />
  //         );
  //       case "frame8":
  //         return (
  //           <CanvaFrame8
  //             frameColor={frameColor}
  //             frameBorderColor={frameBgColor}
  //             frameText={frameText}
  //             frameTextColor={frameTextColor}
  //             CornerbgColor={CornerbgColor}
  //             dotColor={dotColor}
  //             cornerBorderColor={cornerBorderColor}
  //             cornerDotColor={cornerDotColor}
  //             selectedCornerStyle={selectedCornerStyle}
  //             selectedDotStyle={selectedDotStyle}
  //             data={data}
  //           />
  //         );
  //       case "frame9":
  //         return (
  //           <CanvaFrame9
  //             frameColor={frameColor}
  //             frameBorderColor={frameBgColor}
  //             frameText={frameText}
  //             frameTextColor={frameTextColor}
  //             CornerbgColor={CornerbgColor}
  //             dotColor={dotColor}
  //             cornerBorderColor={cornerBorderColor}
  //             cornerDotColor={cornerDotColor}
  //             selectedCornerStyle={selectedCornerStyle}
  //             selectedDotStyle={selectedDotStyle}
  //             data={data}
  //           />
  //         );
  //       case "frame10":
  //         return (
  //           <CanvaFrame10
  //             frameColor={frameColor}
  //             frameBorderColor={frameBgColor}
  //             frameText={frameText}
  //             frameTextColor={frameTextColor}
  //             CornerbgColor={CornerbgColor}
  //             dotColor={dotColor}
  //             cornerBorderColor={cornerBorderColor}
  //             cornerDotColor={cornerDotColor}
  //             selectedCornerStyle={selectedCornerStyle}
  //             selectedDotStyle={selectedDotStyle}
  //             data={data}
  //           />
  //         );
  //       case "frame11":
  //         return (
  //           <CanvaFrame11
  //             frameColor={frameColor}
  //             frameBorderColor={frameBgColor}
  //             frameText={frameText}
  //             frameTextColor={frameTextColor}
  //             CornerbgColor={CornerbgColor}
  //             dotColor={dotColor}
  //             cornerBorderColor={cornerBorderColor}
  //             cornerDotColor={cornerDotColor}
  //             selectedCornerStyle={selectedCornerStyle}
  //             selectedDotStyle={selectedDotStyle}
  //             data={data}
  //           />
  //         );
  //       // ... Add cases for other frames
  //       default:
  //         return null;
  //     }
  //   };
  return (
    <Modal
      show={showPreviewScanModal}
      onHide={() => setShowPreviewScanModal(false)}
      centered
      size="lg"
      className="confirmationModal"
    >
      <Modal.Header closeButton />
      <Modal.Body></Modal.Body>
    </Modal>
  );
};

export default OpenQrScanModal;
