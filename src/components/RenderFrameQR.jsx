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
} from "./SVGIcon";

export const RenderFrame = ({
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
}) => {
  switch (selectedFrame) {
    case "notSelectedFrame":
      return (
        <NotSelectedFrameCanvas
          CornerbgColor={CornerbgColor}
          dotColor={dotColor}
          cornerBorderColor={cornerBorderColor}
          cornerDotColor={cornerDotColor}
          selectedCornerStyle={selectedCornerStyle}
          selectedDotStyle={selectedDotStyle}
          qrLogo={QRLogo}
        />
      );
    case "frame1":
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
          qrLogo={QRLogo}
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
          qrLogo={QRLogo}
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
          qrLogo={QRLogo}
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
          qrLogo={QRLogo}
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
          qrLogo={QRLogo}
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
          qrLogo={QRLogo}
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
          qrLogo={QRLogo}
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
          qrLogo={QRLogo}
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
          qrLogo={QRLogo}
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
          qrLogo={QRLogo}
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
          qrLogo={QRLogo}
        />
      );
    // ... Add cases for other frames
    default:
      return null;
  }
};
