import React, { useEffect, useState } from "react";
import {
  BottomWrapperStages,
  ColorPickerComponent,
  Header,
  ViewPreviewModal,
} from "../../components";
import Accordion from "react-bootstrap/Accordion";

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
  PreviewFrame,
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
  TopPreviewHeader,
} from "../../components/SVGIcon";
import { AccordianComponent } from "../../components/AccordianComponent";
import ToggleButton from "../../components/QRDetailPages/QRToggleButton";
import {
  QRPreviewApps,
  QRPreviewBusiness,
  QRPreviewElabelsBeer,
  QRPreviewElabelsCigar,
  QRPreviewElabelsCoffee,
  QRPreviewElabelsFood,
  QRPreviewElabelsProduct,
  QRPreviewElabelsWine,
  QRPreviewEvent,
  QRPreviewGallery,
  QRPreviewLanding,
  QRPreviewLinks,
  QRPreviewPdf,
  QRPreviewSocial,
  QRPreviewURL,
  QRPreviewVCard,
  QRPreviewVideo,
  QRPreviewYoutube,
} from "../../components/QRDetailPages/QRPreviewAll";

const products = [
  "Wine/Spirits",
  "beer",
  "cigars",
  "coffee",
  "food",
  "product",
];
const QRDesign = () => {
  const [selectedOption, setSelectedOption] = useState("QR Code");
  const handleToggle = (option) => {
    setSelectedOption(option);
  };
  const [showModalPreview, setShowModalPreview] = useState(false);

  const { type } = useParams();
  // const qrDataVar = useSelector((state) => state.qrData);
  const navigate = useNavigate();
  const location = useLocation();
  const { qrData } = location.state || {};
  // const [qrLogoFile, setQrLogoFile] = useState(qrData?.qrDesignLogo || null);
  const [QRLogo, setQRLogo] = useState(qrData?.qrDesignLogo || null);
  // console.log("QRLogotetstt", QRLogo);

  console.log("qrDataStateValueDesignPage", qrData);
  useEffect(() => {
    if (!qrData) {
      navigate("/");
    }
  }, [qrData, navigate]);

  //SELECT QR CODE TYPE
  const cards = [
    {
      id: 1,
      title: "Standard QR code",
      description: "Manually design and customize your QR code",
    },
    // {
    //   id: 2,
    //   title: "AI-generated QR code",
    //   description: "Use AI to design and generate your QR code",
    // },
  ];
  const [SelectQrCode, setSelectQrCode] = useState(cards[0].id);
  //SET ELABELS TABS
  const [elabelsSelectedProduct] = useState(
    products.find(
      (product) => qrData[product] === true || qrData[product] === "true"
    )
  );
  // console.log("onDesignelabelsSelectedProduct", elabelsSelectedProduct);

  // State COLOR PASS IN COLOR PICKER COMPONENT
  const [dotsColor, setDotColor] = useState(
    qrData?.style?.dotsColor || "#000000"
  );
  const [cornerBackgroundColor, setCornerBackgroundColor] = useState(
    qrData?.style?.cornerBackgroundColor || "#ffffff"
  );
  const [cornerBorderColor, setCornerBorderColor] = useState(
    qrData?.style?.cornerBorderColor || "#000000"
  );
  const [cornerDotColor, setCornerDotColor] = useState(
    qrData?.style?.cornerDotColor || "#000000"
  );

  //FRAME TOGGLE STATE
  const [selectedFrame, setSelectedFrame] = useState(
    qrData?.style?.frameName || "notSelectedFrame"
  ); //"notSelctedFrame"
  //FRAME FIELD STATE
  const [frameColor, setFrameColor] = useState(
    qrData?.style?.frameColor || "#404040"
  );
  const [backgroundColor, setBackgroundColor] = useState(
    qrData?.style?.backgroundColor
  );
  // console.log("frameBgColor",frameBgColor)
  const [frameText, setFrameText] = useState(
    qrData?.style?.frameText || "Scan Me!"
  );
  const [frameTextColor, setFrameTextColor] = useState(
    qrData?.style?.frameTextColor 
  );

  //DOT STYLE STATE
  const [dotsStyle, setDotsStyle] = useState(
    qrData?.style?.dotsStyle || "classy-rounded"
  );
  const handleDotStyleClick = (styleId) => {
    setDotsStyle(styleId);
  };

  //LOGO
  // const [qrLogo, setQrLogo] = useState(qrData?.qrDesignLogo || null);
  // console.log("qrData?.qrDesignLogo", qrData?.qrDesignLogo);

  //DOT STYLE STATE
  const [selectedCornerStyle, setSelectedCornerStyle] = useState(
    qrData?.style?.cornerStyle || "rounded"
  );
  const handleCornerStyleClick = (styleId) => {
    setSelectedCornerStyle(styleId);
  };

  // SET QR DATA TO QR CODE STYLING ON EDIT
  useEffect(() => {
    if (qrData && qrData.style) {
      qrData.style.dotsColor = dotsColor;
      qrData.style.cornerBackgroundColor = cornerBackgroundColor;
      qrData.style.backgroundColor = backgroundColor;
      qrData.style.cornerBorderColor = cornerBorderColor;
      qrData.style.cornerDotColor = cornerDotColor;
      qrData.style.frameColor = frameColor;
      qrData.style.frameTextColor = frameTextColor;
      qrData.style.frameText = frameText;
      qrData.style.cornerStyle = selectedCornerStyle;
      qrData.style.dotsStyle = dotsStyle;
      qrData.style.frameName = selectedFrame;
    }
  }, [
    dotsColor,
    cornerBackgroundColor,
    backgroundColor,
    cornerBorderColor,
    frameColor,
    frameTextColor,
    frameText,
    selectedCornerStyle,
    dotsStyle,
    qrData,
    selectedFrame,
    cornerDotColor,
  ]);

  // console.log("finalQrData", qrData);
  // console.log("selectedFrame", selectedFrame);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log("fileee", file);
    if (file) {
      setQRLogo(file);
      event.target.value = null;
    }
  };
  const getLogoSrc = () => {
    if (QRLogo instanceof File) {
      return URL.createObjectURL(QRLogo);
    }
    return QRLogo || "/assets/images/default-img.png";
  };
  if (qrData) {
    qrData.qrDesignLogo = QRLogo;
    console.log("qrData with uploaded logo file:", qrData);
  }
  const handleImageDelete = () => {
    setQRLogo(null);
  };

  const previewComponents = {
    url: <QRPreviewURL localQrData={qrData} />,
    vcard: <QRPreviewVCard localQrData={qrData} />,
    social_media: <QRPreviewSocial localQrData={qrData} />,
    business_page: <QRPreviewBusiness localQrData={qrData} />,
    apps: <QRPreviewApps localQrData={qrData} />,
    video: <QRPreviewVideo localQrData={qrData} />,
    pdf: <QRPreviewPdf localQrData={qrData} />,
    links: <QRPreviewLinks localQrData={qrData} />,
    image_gallery: <QRPreviewGallery localQrData={qrData} />,
    youtube: <QRPreviewYoutube localQrData={qrData} />,
    landing: <QRPreviewLanding localQrData={qrData} />,
    events: <QRPreviewEvent localQrData={qrData} />,
    elabels:
      elabelsSelectedProduct === "beer" ? (
        <QRPreviewElabelsBeer localQrData={qrData} />
      ) : elabelsSelectedProduct === "coffee" ? (
        <QRPreviewElabelsCoffee localQrData={qrData} />
      ) : elabelsSelectedProduct === "cigars" ? (
        <QRPreviewElabelsCigar localQrData={qrData} />
      ) : elabelsSelectedProduct === "food" ? (
        <QRPreviewElabelsFood localQrData={qrData} />
      ) : elabelsSelectedProduct === "product" ? (
        <QRPreviewElabelsProduct localQrData={qrData} />
      ) : (
        <QRPreviewElabelsWine localQrData={qrData} />
      ),
  };

  //Render Frame CANVAS

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
    const FrameComponent = FRAME_COMPONENTS[selectedFrame] || null;

    const commonProps = {
      frameColor,
      backgroundColor,
      frameText,
      frameTextColor,
      cornerBackgroundColor,
      dotsColor,
      cornerBorderColor,
      cornerDotColor,
      selectedCornerStyle,
      dotsStyle,
      qrLogo: QRLogo,
    };

    return FrameComponent ? <FrameComponent {...commonProps} /> : null;
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
          <button
            className="viewPreviewbtn"
            onClick={() => setShowModalPreview(true)}
          >
            View Preview
          </button>
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
                            selectedFrame === "notSelectedFrame" ? "active" : ""
                          }`}
                          onClick={() => setSelectedFrame("notSelectedFrame")}
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
                      {selectedFrame !== "notSelctedFrame" &&
                        selectedFrame !== 0 && (
                          <div className="bottom">
                            <div
                              className="up"
                              style={{ marginBottom: "12px" }}
                            >
                              <div className="color-picker-con">
                                <ColorPickerComponent
                                  label="Frame color"
                                  color={frameColor}
                                  setColor={setFrameColor}
                                />
                                <ColorPickerComponent
                                  label="Background color"
                                  color={backgroundColor}
                                  setColor={setBackgroundColor}
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
                                    onChange={(e) =>
                                      setFrameText(e.target.value)
                                    }
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
                              dotsStyle === "classy-rounded"
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
                              dotsStyle === "rounded" ? "active" : ""
                            }
                            onClick={() => handleDotStyleClick("rounded")}
                          >
                            <QRDesignCenter2 />
                          </li>
                          <li
                            className={
                              dotsStyle === "dots" ? "active" : ""
                            }
                            onClick={() => handleDotStyleClick("dots")}
                          >
                            <QRDesignCenter3 />
                          </li>
                          <li
                            className={
                              dotsStyle === "extra-rounded"
                                ? "active"
                                : ""
                            }
                            onClick={() => handleDotStyleClick("extra-rounded")}
                          >
                            <QRDesignCenter4 />
                          </li>
                          <li
                            className={
                              dotsStyle === "classy" ? "active" : ""
                            }
                            onClick={() => handleDotStyleClick("classy")}
                          >
                            <QRDesignCenter5 />
                          </li>
                          <li
                            className={
                              dotsStyle === "extra-rounded"
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
                            color={dotsColor}
                            setColor={setDotColor}
                          />

                          <ColorPickerComponent
                            label="Background Color"
                            color={cornerBackgroundColor}
                            setColor={setCornerBackgroundColor}
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
              <AccordianComponent title={"Add a Logo"}>
                <div className="img-upload-comp">
                  <div className="wrap">
                    <p>Logo</p>
                    <div className="img-wrapper">
                      <img
                        // src={QRLogo || "/assets/images/default-img.png"}
                        src={getLogoSrc()}
                        alt="Uploaded"
                        className="uploaded-img"
                      />
                      <div className="icon-overlay">
                        <label
                          //  htmlFor={uniqueId}
                          className="upload-icon"
                        >
                          <h3>+</h3>
                          <input
                            type="file"
                            // id={uniqueId} // Use the unique id here
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* {QRLogo && (
                    <button className="delete-icon" onClick={handleImageDelete}>
                      Delete
                    </button>
                  )} */}
                </div>
              </AccordianComponent>
            </div>
          </div>
          <div className="right">
            <ToggleButton
              selectedOption={selectedOption}
              onToggle={handleToggle}
              showToggleBtn={"qrDesign"}
            />
            {selectedOption === "QR Code" && (
              <div className="qr-preview design">
                <div className="img-con">
                  <img
                    src="/assets/images/phone-frame.jpeg"
                    alt=""
                    className="mobile-frame"
                  />
                  {renderFrame()}
                </div>
              </div>
            )}
            {selectedOption === "Preview Page" ? (
              qrData?.type === "wifi" ? (
                <img
                  src="/assets/images/phone-wifi.png"
                  alt=" WiFi preview"
                  width={"80%"}
                />
              ) : (
                <div className="qr-preview__layout__image">
                  <div className="Preview-layout Preview-layout--vcard">
                    <TopPreviewHeader
                      className="topHeaderSvg"
                      urlLink={qrData?.field_url}
                    />
                    {previewComponents[type]}
                  </div>

                  <PreviewFrame className="preview-frame" />
                </div>
              )
            ) : null}
          </div>
        </div>
      </div>

      <BottomWrapperStages
        currentStage={3}
        onCancelClick={handleCancelClick}
        showNextButton={true}
        generateQrPayload={qrData}
      />

      <ViewPreviewModal
        setShowModalPreview={setShowModalPreview}
        showModalPreview={showModalPreview}
        localQrData={qrData}
        type={qrData?.type}
        showToggleBtn={"qrDesign"}
        elabelsSelectedProduct={elabelsSelectedProduct}
        style={{
          cornerBackgroundColor,
          dotsColor,
          cornerBorderColor,
          cornerDotColor,
          selectedCornerStyle,
          dotsStyle,
          QRLogo,
          frameColor,
          backgroundColor,
          frameTextColor,
          frameText,
          selectedFrame,
        }}
      />
    </>
  );
};

export default QRDesign;
