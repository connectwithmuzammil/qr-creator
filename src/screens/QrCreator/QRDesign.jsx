import React, { useEffect, useState } from "react";
import {
  BottomWrapperStages,
  ColorPickerComponent,
  Header,
} from "../../components";
import Accordion from "react-bootstrap/Accordion";
import { QRCodeCanvas } from "qrcode.react";

// import { HexColorPicker } from "react-colorful";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  CanvaFrame1,
  CanvaFrame2,
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
  const [frameTextColor, setFrameTextColor] = useState("#ffffff");

  //DOT STYLE STATE
  const [selectedDotStyle, setSelectedDotStyle] = useState("dotStyle1");
  const handleDotStyleClick = (styleId) => {
    setSelectedDotStyle(styleId);
  };

  //DOT STYLE STATE
  const [selectedCornerStyle, setSelectedCornerStyle] =
    useState("cornerStyle1");
  const handleCornerStyleClick = (styleId) => {
    setSelectedCornerStyle(styleId);
  };

  const [localQrData, setLocalQrData] = useState({
    style: {
      dotsColor: dotColor,
      cornerBackgroundColor: CornerbgColor,
      backgroundColor: frameBgColor,
      cornerBorderColor: cornerBorderColor,
      frameColor: frameColor,
      frameTextColor: frameTextColor,
      frameText: frameText,
      cornerStyle: selectedCornerStyle,
      dotsStyle: selectedDotStyle,
    },
  });

  //useEffect
  useEffect(() => {
    // setLocalQrData((prevData) => ({
    //   ...prevData,

    //   style: {
    //     ...prevData.style,
    //     dotsColor: dotColor,
    //     cornerBackgroundColor: CornerbgColor,
    //     backgroundColor: frameBgColor,
    //     cornerBorderColor: cornerBorderColor,
    //     frameColor: frameColor,
    //     frameTextColor: frameTextColor,
    //     frameText: frameText,
    //     cornerStyle: selectedCornerStyle,
    //     dotsStyle: selectedDotStyle,
    //   },
    // }));
    qrData.style.dotsColor = dotColor;
    qrData.style.cornerBackgroundColor = CornerbgColor;
    qrData.style.backgroundColor = frameBgColor;
    qrData.style.cornerBorderColor = cornerBorderColor;
    qrData.style.frameColor = frameColor;
    qrData.style.frameTextColor = frameTextColor;
    qrData.style.frameText = frameText;
    qrData.style.cornerStyle = selectedCornerStyle;
    qrData.style.dotsStyle = selectedDotStyle;
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
  ]);

  // console.log("localQrData", localQrData);
  console.log("finalQrData", qrData);

  //Render Frame
  const renderFrame = () => {
    switch (selectedFrame) {
      case 1:
        return (
          <CanvaFrame1
            frameColor={frameColor}
            frameBorderColor={frameBgColor}
            frameText={frameText}
            frameTextColor={frameTextColor}
          />
        );
      case 2:
        return "";
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
                            selectedFrame === 1 ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame(1)}
                        >
                          <Frame1 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === 2 ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame(2)}
                        >
                          <Frame2 width={72} height={96} />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === 3 ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame(3)}
                        >
                          <Frame3 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === 4 ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame(4)}
                        >
                          <Frame4 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === 5 ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame(5)}
                        >
                          <Frame5 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === 6 ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame(6)}
                        >
                          <Frame6 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === 7 ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame(7)}
                        >
                          <Frame7 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === 8 ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame(8)}
                        >
                          <Frame8 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === 9 ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame(9)}
                        >
                          <Frame9 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === 10 ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame(10)}
                        >
                          <Frame10 />
                        </div>
                        <div
                          className={`img-con ${
                            selectedFrame === 11 ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame(11)}
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
                              selectedDotStyle === "dotStyle1" ? "active" : ""
                            }
                            onClick={() => handleDotStyleClick("dotStyle1")}
                          >
                            <QRDesignCenter1 />
                          </li>
                          <li
                            className={
                              selectedDotStyle === "dotStyle2" ? "active" : ""
                            }
                            onClick={() => handleDotStyleClick("dotStyle2")}
                          >
                            <QRDesignCenter2 />
                          </li>
                          <li
                            className={
                              selectedDotStyle === "dotStyle3" ? "active" : ""
                            }
                            onClick={() => handleDotStyleClick("dotStyle3")}
                          >
                            <QRDesignCenter3 />
                          </li>
                          <li
                            className={
                              selectedDotStyle === "dotStyle4" ? "active" : ""
                            }
                            onClick={() => handleDotStyleClick("dotStyle4")}
                          >
                            <QRDesignCenter4 />
                          </li>
                          <li
                            className={
                              selectedDotStyle === "dotStyle5" ? "active" : ""
                            }
                            onClick={() => handleDotStyleClick("dotStyle5")}
                          >
                            <QRDesignCenter5 />
                          </li>
                          <li
                            className={
                              selectedDotStyle === "dotStyle6" ? "active" : ""
                            }
                            onClick={() => handleDotStyleClick("dotStyle6")}
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
                      <div className="dotStylePicker">
                        <h3>Corners style</h3>
                        <ul>
                          <li
                            className={
                              selectedCornerStyle === "cornerStyle1"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              handleCornerStyleClick("cornerStyle1")
                            }
                          >
                            <QRDesignCorner1 />
                          </li>
                          <li
                            className={
                              selectedCornerStyle === "cornerStyle2"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              handleCornerStyleClick("cornerStyle2")
                            }
                          >
                            <QRDesignCorner2 />
                          </li>
                          <li
                            className={
                              selectedCornerStyle === "cornerStyle3"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              handleCornerStyleClick("cornerStyle3")
                            }
                          >
                            <QRDesignCorner3 />
                          </li>
                          <li
                            className={
                              selectedCornerStyle === "cornerStyle4"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              handleCornerStyleClick("cornerStyle4")
                            }
                          >
                            <QRDesignCorner4 />
                          </li>
                          <li
                            className={
                              selectedCornerStyle === "cornerStyle5"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              handleCornerStyleClick("cornerStyle5")
                            }
                          >
                            <QRDesignCorner5 />
                          </li>
                          <li
                            className={
                              selectedCornerStyle === "cornerStyle6"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              handleCornerStyleClick("cornerStyle6")
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
                <QRCodeCanvas
                  // value="https://reactjs.org/"
                  renderAs="svg"
                  size={180}
                  fgColor={localQrData.style.dotsColor}
                  bgColor={localQrData.style.cornerBackgroundColor}
                  className="canvas-img"
                />
                {/* Overlay the selected frame */}
                <div className="frame-overlay">{renderFrame()}</div>
              </div>
            </div>

            {/* <div
              className="qr-preview"
              style={{ position: "relative", width: "256px", height: "256px" }}
            > */}
            {/* QR Code Canvas */}
            {/* <QRCodeCanvas
                // value={qrData}
                size={256}
                bgColor={bgColor}
                fgColor={dotColor}
                level={"H"}
              /> */}

            {/* Overlay the frame if selected */}
            {/* {frame === "frame1" && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Frame1 /> 
                </div>
              )} */}
            {/* </div> */}
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
