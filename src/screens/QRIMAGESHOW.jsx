import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
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
} from "../components/SVGIcon";
import QRCodeStyling from "qr-code-styling";

// import {} from "../"
const QRIMAGESHOW = () => {
  const location = useLocation();
  const QRres = location.state || {}; // Access the image path from navigation state
  console.log("imagePath", QRres.generateQr);

  //   if (!imagePath) {
  //     return <div>No image available</div>;
  //   }

  const qrCode = useRef(null);

  const [selectedFrame, setSelectedFrame] = useState(
    QRres.generateQr?.data?.style?.frameName || null
  );
  console.log("selectedFrame", selectedFrame);
  // useEffect(() => {
  //   setSelectedFrame(QRres.generateQr?.data?.style?.frameName);
  // }, [QRres.generateQ]);

  let data = QRres?.generateQr?.outcome;
  console.log("QRres?.outcome", data);
  let dotColor = QRres.generateQr?.data?.style?.dotsColor;
  let CornerbgColor = QRres.generateQr?.data?.style?.cornerBackgroundColor;
  let cornerBorderColor = QRres.generateQr?.data?.style?.cornerBorderColor;
  let cornerDotColor = QRres.generateQr?.data?.style?.cornerDotColor;
  let selectedDotStyle = QRres.generateQr?.data?.style?.dotsStyle;
  let selectedCornerStyle = QRres.generateQr?.data?.style?.cornerStyle;
  //FRAME
  let frameColor = QRres.generateQr?.data?.style?.frameColor;
  let frameBgColor = QRres.generateQr?.data?.style?.backgroundColor;
  let frameText = QRres.generateQr?.data?.style?.frameText;
  let frameTextColor = QRres.generateQr?.data?.style?.frameTextColor;

  console.log("datta", data);

  const qrCodeOptions = {
    width: 130,
    height: 130,
    data: data,
    dotsOptions: {
      color: dotColor,
      type: selectedDotStyle,
    },
    cornersSquareOptions: {
      color: "#000000",
      type: selectedCornerStyle, // This will dynamically change
    },
    cornersDotOptions: {
      color: cornerDotColor, // Customize if needed
    },
    backgroundOptions: {
      color: CornerbgColor, // Background color of the QR code
    },
    cornersSquareOptions: {
      color: cornerBorderColor,
      type: selectedCornerStyle, // Update corner style on change
    },
  };

  useEffect(() => {
    qrCode.current = new QRCodeStyling(qrCodeOptions);
    qrCode.current.append(document.getElementById("qrCode"));
  }, []);

  const renderFrame = () => {
    switch (selectedFrame) {
      case null:
        console.log("INSIDE NULL CASE");
        return (
          <NotSelectedFrameCanvas
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame1":
        console.log("INSIDE CASE 1");
        return (
          <CanvaFrame1
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame2":
        return (
          <CanvaFrame2
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame3":
        return (
          <CanvaFrame3
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame4":
        return (
          <CanvaFrame4
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame5":
        return (
          <CanvaFrame5
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame6":
        return (
          <CanvaFrame6
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame7":
        return (
          <CanvaFrame7
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame8":
        return (
          <CanvaFrame8
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame9":
        return (
          <CanvaFrame9
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame10":
        return (
          <CanvaFrame10
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      case "frame11":
        return (
          <CanvaFrame11
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
            CornerbgColor={CornerbgColor}
            dotColor={dotColor}
            cornerBorderColor={cornerBorderColor}
            cornerDotColor={cornerDotColor}
            selectedCornerStyle={selectedCornerStyle}
            selectedDotStyle={selectedDotStyle}
            data={data}
          />
        );
      // ... Add cases for other frames
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: "column",
        height: "100vh",
        padding: "50px",
      }}
      className="qr-image-show-delete"
    >
      {/* <h1>QR Code Image</h1> */}
      {/* Display QR Code Image */}
      {/* <img src={abc?.generateQr?.path} alt="QR Code" /> */}

      <div className="qr-preview">
        <div className="img-con">
          {renderFrame()}
          {/* <img
            src="/assets/images/phone-frame.jpeg"
            alt=""
            className="mobile-frame"
            style={{
              width: "100%",
              height: "500px",
            }}
          /> */}

          <div className="frame-overlay" style={{ position: "static" }}>
            {/* <img
              src={QRres.generateQr?.path}
              alt="QR Code"
              style={{ width: "150px", position: "absolute", zIndex: 1 }}
              className={`qr-code-test ${selectedFrame}`}
            /> */}

            {/* <div
              id="qrCode"
              className={`canvas-img ${selectedFrame}`}
              style={{ width: "150px", position: "absolute", zIndex: 1 }}
            ></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRIMAGESHOW;
