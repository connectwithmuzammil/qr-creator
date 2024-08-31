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
} from "../components/SVGIcon";
import QRCodeStyling from "qr-code-styling";

// import {} from "../"
const QRIMAGESHOW = () => {
  const location = useLocation();
  const abc = location.state || {}; // Access the image path from navigation state
  console.log("imagePath", abc.generateQr);

  //   if (!imagePath) {
  //     return <div>No image available</div>;
  //   }

  const qrCode = useRef(null);

  const [selectedFrame, setSelectedFrame] = useState(
    abc.generateQr?.data?.style?.frameName
  );
  console.log("selectedFrame", selectedFrame);
  useEffect(() => {
    setSelectedFrame(abc.generateQr?.data?.style?.frameName);
  }, [abc.generateQ]);
  //FRAME FIELD STATE
  const [frameColor, setFrameColor] = useState(
    abc.generateQr?.data?.style?.frameColor
  );
  const [frameBgColor, setFrameBgColor] = useState(
    abc.generateQr?.data?.style?.backgroundColor
  );
  const [frameText, setFrameText] = useState(
    abc.generateQr?.data?.style?.frameText
  );
  const [frameTextColor, setFrameTextColor] = useState(
    abc.generateQr?.data?.style?.frameTextColor
  );

  // State COLOR PASS IN COLOR PICKER COMPONENT
  const [dotColor, setDotColor] = useState(abc.generateQr?.data?.style?.dotsColor);
  const [CornerbgColor, setCornerBgColor] = useState(abc.generateQr?.data?.style?.cornerBackgroundColor);
  const [cornerBorderColor, setCornerBorderColor] = useState(abc.generateQr?.data?.style?.cornerBorderColor);
  const [cornerDotColor, setCornerDotColor] = useState(abc.generateQr?.data?.style?.cornerDotColor);
  const [selectedDotStyle, setSelectedDotStyle] = useState(abc.generateQr?.data?.style?.dotsStyle);
  const [selectedCornerStyle, setSelectedCornerStyle] = useState(abc.generateQr?.data?.style?.cornerStyle);

  const qrCodeOptions = {
    width: 130,
    height: 130,
    data: abc?.generateQr?.path,
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
      case "frame1":
        return (
          <CanvaFrame1
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
          />
        );
      case "frame2":
        return (
          <CanvaFrame2
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
          />
        );
      case "frame3":
        return (
          <CanvaFrame3
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
          />
        );
      case "frame4":
        return (
          <CanvaFrame4
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
          />
        );
      case "frame5":
        return (
          <CanvaFrame5
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
          />
        );
      case "frame6":
        return (
          <CanvaFrame6
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
          />
        );
      case "frame7":
        return (
          <CanvaFrame7
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
          />
        );
      case "frame8":
        return (
          <CanvaFrame8
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
          />
        );
      case "frame9":
        return (
          <CanvaFrame9
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
          />
        );
      case "frame10":
        return (
          <CanvaFrame10
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
          />
        );
      case "frame11":
        return (
          <CanvaFrame11
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
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
        flexDirection: "column",
        // height: "100vh",
        padding: "50px",
      }}
      className="qr-image-show-delete"
    >
      {/* <h1>QR Code Image</h1> */}
      {/* Display QR Code Image */}
      {/* <img src={abc?.generateQr?.path} alt="QR Code" /> */}

      <div className="qr-preview">
        <div className="img-con">
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
            {renderFrame()}
            {/* 
            <img
              src={abc?.generateQr?.path}
              alt="QR Code"
              style={{ width: "150px", position: "absolute", zIndex: 1 }}
              className={`qr-code-test ${selectedFrame}`}
            /> */}

            <div
              id="qrCode"
              className={`canvas-img ${selectedFrame}`}
              style={{ width: "150px", position: "absolute", zIndex: 1 }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRIMAGESHOW;
