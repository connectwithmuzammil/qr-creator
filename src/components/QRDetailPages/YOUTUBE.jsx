import React, { useEffect, useState } from "react";
import { AccordianComponent } from "../AccordianComponent";
import { InputComponent } from "../InputComponent";
import Button from "../Button";
import { useLocation } from "react-router-dom";
import ToggleButton from "./QRToggleButton";
import { PreviewFrame, TopPreviewHeader } from "../SVGIcon";
import { QRPreviewYoutube } from "./QRPreviewAll";

const YOUTUBE = ({ localQrData, setLocalQrData }) => {
  const [selectedOption, setSelectedOption] = useState("Preview Page");
  const handleToggle = (option) => {
    setSelectedOption(option);
  };
  const location = useLocation();
  // console.log("LOCATIONURL",location);

  useEffect(() => {
    if (location.state?.qrData) {
      setLocalQrData(location.state.qrData.data);
    }
  }, [location.state, setLocalQrData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLocalQrData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // console.log("localQrData",localQrData)
  return (
    <div className="youtube-page">
      <div className="containerr">
        <div className="left">
          <AccordianComponent title={"Enter the name of your QR code"}>
            <InputComponent
              placeholder="e.g My QR code"
              onChange={handleInputChange}
              name="qr_name"
              value={localQrData?.qr_name}
            />
          </AccordianComponent>
          <AccordianComponent title={"YouTube URL *"}>
            <div className="wrap-inp-cmp">
              <InputComponent
                placeholder={"e.g https://www.youtube.com/watch?v=1234"}
                onChange={handleInputChange}
                value={localQrData?.youtube_url}
                name="youtube_url"
              />
              {/* <Button title={"Upload Video"} width={"200px"} /> */}
            </div>
          </AccordianComponent>
        </div>
        <div className="right">
          {localQrData?.youtube_url ? (
            <>
              <ToggleButton
                selectedOption={selectedOption}
                onToggle={handleToggle}
              />
              <div className="qr-preview__layout__image">
                <div className="Preview-layout Preview-layout--vcard">
                  <TopPreviewHeader className="topHeaderSvg" />
                  <QRPreviewYoutube localQrData={localQrData} />
                </div>
                <PreviewFrame className="preview-frame" />
              </div>
            </>
          ) : (
            <img src="/assets/images/phone-youtube.png" alt="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default YOUTUBE;
