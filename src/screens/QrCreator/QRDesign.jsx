import React, { useEffect, useRef, useState } from "react";
import {
  BottomWrapperStages,
  ColorPickerComponent,
  Header,
} from "../../components";
import Accordion from "react-bootstrap/Accordion";
import { QRCodeCanvas } from "qrcode.react";
import QRCodeStyling from "qr-code-styling";

// import { HexColorPicker } from "react-colorful";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
  Frame1,
  Frame10,
  Frame11,
  Frame2,
  Frame3,
  Frame4,
  Frame5,
  Frame6,
  Frame7,
  Frame8,
  Frame9,
  NotSelected,
  NotSelectedFrameCanvas,
  QRDesignCenter1,
  QRDesignCenter2,
  QRDesignCenter3,
  QRDesignCenter4,
  QRDesignCenter5,
  QRDesignCenter6,
  QRDesignCorner1,
  QRDesignCorner2,
  QRDesignCorner3,
  QRDesignCorner4,
  QRDesignCorner5,
  QRDesignCorner6,
  QRDesignDetailIcon,
} from "../../components/SVGIcon";

const QRDesign = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { qrData } = location.state || {};
  console.log("qrDataStateValueDesignPage", qrData);

  //SELECT QR CODE TYPE
  const cards = [
    {
      id: 1,
      title: "Standard QR code",
      description: "Manually design and customize your QR code",
    },
    {
      id: 2,
      title: "AI-generated QR code",
      description: "Use AI to design and generate your QR code",
    },
  ];
  const [SelectQrCode, setSelectQrCode] = useState(cards[0].id);

  // State COLOR PASS IN COLOR PICKER COMPONENT
  const [dotColor, setDotColor] = useState("#000000");
  const [CornerbgColor, setCornerBgColor] = useState("#ffffff");
  const [cornerBorderColor, setCornerBorderColor] = useState("#000000");
  const [cornerDotColor, setCornerDotColor] = useState("#000000");

  //FRAME TOGGLE STATE
  const [selectedFrame, setSelectedFrame] = useState(null);
  //FRAME FIELD STATE
  const [frameColor, setFrameColor] = useState("#404040");
  const [frameBgColor, setFrameBgColor] = useState("#ffffff");
  const [frameText, setFrameText] = useState("Scan Me!");
  const [frameTextColor, setFrameTextColor] = useState("#000");

  //DOT STYLE STATE
  const [selectedDotStyle, setSelectedDotStyle] = useState("classy-rounded");
  const handleDotStyleClick = (styleId) => {
    setSelectedDotStyle(styleId);
  };

  //DOT STYLE STATE
  const [selectedCornerStyle, setSelectedCornerStyle] = useState("rounded");

  // const qrCode = useRef(null);

  //DEFAULT QR CODE OPTIONS
  const qrCodeOptions = {
    width: 130,
    height: 130,
    data: "https://example.com",
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
  };

  // useEffect(() => {
  //   qrCode.current = new QRCodeStyling(qrCodeOptions);
  //   qrCode.current.append(document.getElementById("qrCode"));
  // }, []);

  // useEffect(() => {
  //   qrCode.current.update({
  //     dotsOptions: {
  //       color: dotColor,
  //       type: selectedDotStyle, // Update dot style on change
  //     },
  //     cornersSquareOptions: {
  //       color: cornerBorderColor,
  //       type: selectedCornerStyle, // Update corner style on change
  //     },
  //     backgroundOptions: {
  //       color: CornerbgColor, // Background color of the QR code
  //     },
  //     cornersDotOptions: {
  //       color: cornerDotColor, // Customize if needed
  //     },
  //   });
  // }, [
  //   selectedDotStyle,
  //   cornerBorderColor,
  //   dotColor,
  //   selectedCornerStyle,
  //   CornerbgColor,
  //   cornerDotColor,
  // ]);
  const handleCornerStyleClick = (styleId) => {
    setSelectedCornerStyle(styleId);
  };

  //useEffect
  useEffect(() => {
    qrData.style.dotsColor = dotColor;
    qrData.style.cornerBackgroundColor = CornerbgColor;
    qrData.style.backgroundColor = frameBgColor;
    qrData.style.cornerBorderColor = cornerBorderColor;
    qrData.style.cornerDotColor = cornerDotColor;
    qrData.style.frameColor = frameColor;
    qrData.style.frameTextColor = frameTextColor;
    qrData.style.frameText = frameText;
    qrData.style.cornerStyle = selectedCornerStyle;
    qrData.style.dotsStyle = selectedDotStyle;
    qrData.style.frameName = selectedFrame;
  }, [
    dotColor,
    CornerbgColor,
    frameBgColor,
    cornerBorderColor,
    frameColor,
    frameTextColor,
    frameText,
    selectedCornerStyle,
    selectedDotStyle,
    qrData,
    selectedFrame,
    cornerDotColor,
  ]);

  console.log("finalQrData", qrData);
  console.log("selectedFrame", selectedFrame);
  //Render Frame
  const renderFrame = () => {
    switch (selectedFrame) {
      case null:
        return <NotSelectedFrameCanvas />;
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
          />
        );
      // ... Add cases for other frames
      default:
        return null;
    }
  };
  const handleCancelClick = () => {
    navigate(`/qr-editor/${type}`);
  };

  return (
    <>
      <Header />
      <div className="qr-design">
        <div className="top">
          <h1>3. Design your QR code</h1>
        </div>
        <div className="containerr">
          <div className="left">
            <div className="bottom">
              <div className="one">
                <h1>Select the type of QR code you want to create</h1>
                <div className="card-con">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className={`cardd ${
                        SelectQrCode === card.id ? "active" : ""
                      }`}
                      onClick={() => setSelectQrCode(card.id)}
                    >
                      <span />
                      <div className="wrap">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="two">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>QR code frame</Accordion.Header>
                    <Accordion.Body>
                      <div className="qr-frames-con">
                        <div
                          className={`img-con ${
                            selectedFrame === null ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame(null)}
                        >
                          <NotSelected />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === "frame1" ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame("frame1")}
                        >
                          <Frame1 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === "frame2" ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame("frame2")}
                        >
                          <Frame2 width={72} height={96} />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === "frame3" ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame("frame3")}
                        >
                          <Frame3 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === "frame4" ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame("frame4")}
                        >
                          <Frame4 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === "frame5" ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame("frame5")}
                        >
                          <Frame5 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === "frame6" ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame("frame6")}
                        >
                          <Frame6 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === "frame7" ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame("frame7")}
                        >
                          <Frame7 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === "frame8" ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame("frame8")}
                        >
                          <Frame8 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === "frame9" ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame("frame9")}
                        >
                          <Frame9 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === "frame10" ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame("frame10")}
                        >
                          <Frame10 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === "frame11" ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame("frame11")}
                        >
                          <Frame11 />
                        </div>
                      </div>
                      {selectedFrame !== null && selectedFrame !== 0 && (
                        <div className="bottom">
                          <div className="up" style={{ marginBottom: "12px" }}>
                            <div className="color-picker-con">
                              <ColorPickerComponent
                                label="Frame color"
                                color={frameColor}
                                setColor={setFrameColor}
                              />
                              <ColorPickerComponent
                                label="Background color"
                                color={frameBgColor}
                                setColor={setFrameBgColor}
                              />
                            </div>
                          </div>
                          <div className="down">
                            <div className="color-picker-con">
                              <div className="input-text-con">
                                <label htmlFor="">Frame text</label>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  defaultValue={frameText}
                                  onChange={(e) => setFrameText(e.target.value)}
                                />
                              </div>
                              <ColorPickerComponent
                                label="Text color"
                                color={frameTextColor}
                                setColor={setFrameTextColor}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="three">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>QR Code pattern</Accordion.Header>
                    <Accordion.Body>
                      <div className="choose-contrasting-color">
                        <QRDesignDetailIcon />
                        <p>
                          Choose contrasting colors to make your QR codes easier
                          to read. We recommend using a light and dark color for
                          optimal performance.
                        </p>
                      </div>
                      <div className="dotStylePicker">
                        <ul>
                          <li
                            className={
                              selectedDotStyle === "classy-rounded"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              handleDotStyleClick("classy-rounded")
                            }
                          >
                            <QRDesignCenter1 />
                          </li>
                          <li
                            className={
                              selectedDotStyle === "rounded" ? "active" : ""
                            }
                            onClick={() => handleDotStyleClick("rounded")}
                          >
                            <QRDesignCenter2 />
                          </li>
                          <li
                            className={
                              selectedDotStyle === "dots" ? "active" : ""
                            }
                            onClick={() => handleDotStyleClick("dots")}
                          >
                            <QRDesignCenter3 />
                          </li>
                          <li
                            className={
                              selectedDotStyle === "extra-rounded"
                                ? "active"
                                : ""
                            }
                            onClick={() => handleDotStyleClick("extra-rounded")}
                          >
                            <QRDesignCenter4 />
                          </li>
                          <li
                            className={
                              selectedDotStyle === "classy" ? "active" : ""
                            }
                            onClick={() => handleDotStyleClick("classy")}
                          >
                            <QRDesignCenter5 />
                          </li>
                          <li
                            className={
                              selectedDotStyle === "extra-rounded"
                                ? "active"
                                : ""
                            }
                            onClick={() => handleDotStyleClick("extra-rounded")}
                          >
                            <QRDesignCenter6 />
                          </li>
                        </ul>
                      </div>
                      <div className="dot-bg-color-con">
                        <div className="color-picker-con">
                          <ColorPickerComponent
                            label="Dot Color"
                            color={dotColor}
                            setColor={setDotColor}
                          />

                          <ColorPickerComponent
                            label="Background Color"
                            color={CornerbgColor}
                            setColor={setCornerBgColor}
                          />
                        </div>
                      </div>

                      {/* CORNER STYLING */}
                      <div className="dotStylePicker">
                        <h3>Corners style</h3>
                        <ul>
                          <li
                            className={
                              selectedCornerStyle === "rounded" ? "active" : ""
                            }
                            onClick={() => handleCornerStyleClick("rounded")}
                          >
                            <QRDesignCorner1 />
                          </li>
                          <li
                            className={
                              selectedCornerStyle === "dot" ? "active" : ""
                            }
                            onClick={() => handleCornerStyleClick("dot")}
                          >
                            <QRDesignCorner2 />
                          </li>
                          <li
                            className={
                              selectedCornerStyle === "extra-rounded"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              handleCornerStyleClick("extra-rounded")
                            }
                          >
                            <QRDesignCorner3 />
                          </li>
                          <li
                            className={
                              selectedCornerStyle === "rounded-dot"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              handleCornerStyleClick("rounded-dot")
                            }
                          >
                            <QRDesignCorner4 />
                          </li>
                          <li
                            className={
                              selectedCornerStyle === "square" ? "active" : ""
                            }
                            onClick={() => handleCornerStyleClick("square")}
                          >
                            <QRDesignCorner5 />
                          </li>
                          <li
                            className={
                              selectedCornerStyle === "square-square"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              handleCornerStyleClick("square-square")
                            }
                          >
                            <QRDesignCorner6 />
                          </li>
                        </ul>
                      </div>
                      <div className="dot-bg-color-con">
                        <div className="color-picker-con">
                          <ColorPickerComponent
                            label="Corner square color"
                            color={cornerBorderColor}
                            setColor={setCornerBorderColor}
                          />
                          <ColorPickerComponent
                            label="Corner dot color"
                            color={cornerDotColor}
                            setColor={setCornerDotColor}
                          />
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="four">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Add a logo</Accordion.Header>
                    <Accordion.Body>
                      <div className="input-con">
                        <p>Logo</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="qr-preview">
              <div className="img-con">
                <img
                  src="/assets/images/phone-frame.jpeg"
                  alt=""
                  className="mobile-frame"
                />

                {renderFrame()}

                {/* <div className="frame-overlay"> */}
                {/* {renderFrame()} */}
                {/* <div
                    id="qrCode"
                    className={`canvas-img ${selectedFrame}`}
                  ></div> */}

                {/* <QRCodeCanvas
                    renderAs="svg"
                    size={130}
                    qrStyle="dots"
                    fgColor={qrData.style.dotsColor}
                    bgColor={qrData.style.cornerBackgroundColor}
                    className={`canvas-img ${selectedFrame}`}
                  /> */}
                {/* </div> */}
              </div>
            </div>

            {/* <div className="img-con">
              <img
                src="/assets/images/phone-frame.jpeg"
                alt=""
                className="mobile-framee"
              />
              <div className="frame-overlay">
                {renderFrame()}
                <div id="qrCode" className="qr-code-container"></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <BottomWrapperStages
        currentStage={3}
        onCancelClick={handleCancelClick}
        showNextButton={true}
        generateQrPayload={qrData}
      />
    </>
  );
};

export default QRDesign;

{
  /* <div className="img-con">
              <img src="/assets/images/phone-frame.jpeg" alt="" />
              <img src="/assets/images/qr-code.png" alt="" />
            </div> */
}
