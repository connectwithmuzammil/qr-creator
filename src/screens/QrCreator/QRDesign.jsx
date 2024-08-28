import React, { useState } from "react";
import {
  BottomWrapperStages,
  ColorPickerComponent,
  Header,
} from "../../components";
import Accordion from "react-bootstrap/Accordion";
import { HexColorPicker } from "react-colorful";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
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
  console.log("qrDataStateValue", qrData);
  // State COLOR PASS IN COLOR PICKER COMPONENT
  const [dotColor, setDotColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#000000");
  const [cornerColor, setCornerColor] = useState("#000000");
  const [cornerDotColor, setCornerDotColor] = useState("#000000");

  const [color1, setColor1] = useState("#ff0000");
  const [showColorPicker1, setShowColorPicker1] = useState(false);

  // State for second color picker
  const [color2, setColor2] = useState("#00ff00");
  const [showColorPicker2, setShowColorPicker2] = useState(false);

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
                  <div className="cardd active">
                    <span />
                    <div className="wrap">
                      <h3>Standard QR code</h3>
                      <p>Manually design and customize your QR code</p>
                    </div>
                  </div>
                  <div className="cardd ">
                    <span />
                    <div className="wrap">
                      <h3>Standard QR code</h3>
                      <p>Manually design and customize your QR code</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="two">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>QR code frame</Accordion.Header>
                    <Accordion.Body>
                      <div className="qr-frames-con">
                        <div className="img-con active">
                          <NotSelected />
                        </div>
                        <div className="img-con">
                          <Frame1 />
                        </div>
                        <div className="img-con">
                          <Frame2 />
                        </div>
                        <div className="img-con">
                          <Frame3 />
                        </div>
                        <div className="img-con">
                          <Frame4 />
                        </div>
                        <div className="img-con">
                          <Frame5 />
                        </div>
                        <div className="img-con">
                          <Frame6 />
                        </div>
                        <div className="img-con">
                          <Frame7 />
                        </div>
                        <div className="img-con">
                          <Frame8 />
                        </div>
                        <div className="img-con">
                          <Frame9 />
                        </div>
                        <div className="img-con">
                          <Frame10 />
                        </div>
                        <div className="img-con">
                          <Frame11 />
                        </div>
                      </div>
                      <div className="bottom">
                        {/* <div className="top-con">
                          <div className="color-picker-wrapper">
                            <div className="wrap">
                              <label>Frame color</label>
                              <input type="text" name="" id="" value={color1} />
                            </div>
                            <div
                              className="color-box"
                              style={{ backgroundColor: color1 }}
                              onClick={() =>
                                setShowColorPicker1(!showColorPicker1)
                              }
                            />

                            {showColorPicker1 && (
                              <div className="color-picker-popup">
                                <HexColorPicker
                                  color={color1}
                                  onChange={setColor1}
                                />
                              </div>
                            )}
                          </div>
                          <div className="color-picker-wrapper">
                            <div className="wrap">
                              <label>Background color</label>
                              <input type="text" name="" id="" value={color2} />
                            </div>
                            <div
                              className="color-box"
                              style={{ backgroundColor: color2 }}
                              onClick={() =>
                                setShowColorPicker2(!showColorPicker2)
                              }
                            />

                            {showColorPicker2 && (
                              <div className="color-picker-popup">
                                <HexColorPicker
                                  color={color2}
                                  onChange={setColor2}
                                />
                              </div>
                            )}
                          </div>
                        </div> */}
                      </div>
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
                          <li className="active">
                            <QRDesignCenter1 />
                          </li>
                          <li>
                            <QRDesignCenter2 />
                          </li>
                          <li>
                            <QRDesignCenter3 />
                          </li>
                          <li>
                            <QRDesignCenter4 />
                          </li>
                          <li>
                            <QRDesignCenter5 />
                          </li>
                          <li>
                            <QRDesignCenter6 />
                          </li>
                        </ul>
                      </div>
                      <div className="dot-bg-color-con">
                        <div className="color-picker-con">
                          {/* Dot Color Picker */}
                          <ColorPickerComponent
                            label="Dot Color"
                            color={dotColor}
                            setColor={setDotColor}
                          />
                          {/* Dot Color Picker */}
                          <ColorPickerComponent
                            label="Background Color"
                            color={bgColor}
                            setColor={setBgColor}
                          />
                        </div>
                      </div>
                      <div className="dotStylePicker">
                        <h3>Corners style</h3>
                        <ul>
                          <li className="active-corner">
                            <QRDesignCorner1 />
                          </li>
                          <li>
                            <QRDesignCorner2 />
                          </li>
                          <li>
                            <QRDesignCorner3 />
                          </li>
                          <li>
                            <QRDesignCorner4 />
                          </li>
                          <li>
                            <QRDesignCorner5 />
                          </li>
                          <li>
                            <QRDesignCorner6 />
                          </li>
                        </ul>
                      </div>
                      <div className="dot-bg-color-con">
                        <div className="color-picker-con">
                          <ColorPickerComponent
                            label="Corner square color"
                            color={cornerColor}
                            setColor={setCornerColor}
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
            {/* <img src="/assets/images/phone-url.png" alt="" /> */}
            <div className="img-con">
              <img src="/assets/images/phone-frame.jpeg" alt="" />
              <img src="/assets/images/qr-code.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <BottomWrapperStages
        currentStage={3}
        onCancelClick={handleCancelClick}
        showNextButton={true}
      />
    </>
  );
};

export default QRDesign;
