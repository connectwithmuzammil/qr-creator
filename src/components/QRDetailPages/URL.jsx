import React, { useEffect, useState } from "react";
import { AccordianComponent, AccordianWithInput } from "../AccordianComponent";
import { InputComponent } from "../InputComponent";
import { useLocation } from "react-router-dom";
import ToggleButton from "./QRToggleButton";

const URL = ({ localQrData, setLocalQrData }) => {
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
  };

  console.log("QRDATAUPDATED", localQrData);
  return (
    <>
      <div className="url">
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
              />
            </AccordianComponent>
          </div>
          <div className="right">
            {/* <div className="qr-preview__header__buttons-toggle">
              <button
                aria-label="Preview Page"
                data-testid="button"
                data-qa="qr-editor-preview-button"
                className={`button button-toggle button--secondary button--square ${
                  selectedOption === "Preview Page"
                    ? "button--active"
                    : "button--inactive"
                }`}
                type="button"
                onClick={() => handleToggle("Preview Page")}
              >
                <span data-testid="button-label" className="button__text">
                  Preview Page
                </span>
              </button>
              <button
                aria-label="QR Code"
                data-testid="button"
                data-qa="qr-editor-qr-preview-button"
                className={`button button-toggle button--secondary button--square ${
                  selectedOption === "QR Code"
                    ? "button--active"
                    : "button--inactive"
                }`}
                type="button"
                onClick={() => handleToggle("QR Code")}
              >
                <span data-testid="button-label" class="button__text">
                  QR Code
                </span>
              </button>
            </div> */}
            <ToggleButton
              selectedOption={selectedOption}
              onToggle={handleToggle}
            />

            <img src="/assets/images/phone-url.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default URL;
