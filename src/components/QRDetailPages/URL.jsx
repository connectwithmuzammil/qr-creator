import React, { useEffect, useState } from "react";
import { AccordianComponent, AccordianWithInput } from "../AccordianComponent";
import { InputComponent } from "../InputComponent";
import { useLocation } from "react-router-dom";
import ToggleButton from "./QRToggleButton";
import { PreviewFrame, TopPreviewHeader } from "../SVGIcon";
import { QRPreviewLanding, QRPreviewURL } from "./QRPreviewAll";
import ViewPreviewModal from "../Modal/QR/ViewPreviewModal";

const URL = ({ localQrData, setLocalQrData, errors, setErrors }) => {
  const [showModalPreview, setShowModalPreview] = useState(false);
  const location = useLocation();
  console.log("LOCATIONURL", location);

  const [selectedOption, setSelectedOption] = useState("Preview Page");
  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (location.state?.qrData) {
      setLocalQrData(location?.state?.qrData?.data);
    }
  }, [location.state, setLocalQrData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalQrData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  console.log("QRDATAUPDATED", localQrData);
  return (
    <>
      <div className="url">
        <button
          className="viewPreviewbtn"
          onClick={() => setShowModalPreview(true)}
        >
          View Preview
        </button>
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
            <AccordianComponent
              title={"Type in the URL to link with your QR Code *"}
            >
              <InputComponent
                placeholder={"https://surfershops.com/sale"}
                type={"url"}
                onChange={handleInputChange}
                value={localQrData?.field_url}
                name={"field_url"}
                error={errors.field_url}
              />
            </AccordianComponent>
          </div>

          <div className="right">
            <ToggleButton
              selectedOption={selectedOption}
              onToggle={handleToggle}
            />
            <div className="qr-preview__layout__image">
              <div className="Preview-layout Preview-layout--vcard">
                <TopPreviewHeader
                  className="topHeaderSvg"
                  urlLink={localQrData?.field_url}
                />
                <QRPreviewURL localQrData={localQrData} />
              </div>

              <PreviewFrame className="preview-frame" />
            </div>
            {/* <img src="/assets/images/phone-website.png" alt="phone-website" /> */}
          </div>

          {/* <img src="/assets/images/phone-url.png" alt="" /> */}
        </div>
      </div>
      <ViewPreviewModal
        setShowModalPreview={setShowModalPreview}
        showModalPreview={showModalPreview}
        localQrData={localQrData}
      />
    </>
  );
};

export default URL;
