import React, { useEffect, useState } from "react";
import { AccordianComponent } from "../AccordianComponent";
import { InputComponent } from "../InputComponent";
import CutsomColorPickerComp from "../CutsomColorPickerComp";
import {
  GooglePlaySocial,
  AmazonSocial,
  AppStoreSocial,
} from "../../Helper/SocialSvgIcons";
import SocialIconsComp from "../SocialIconComp";
import ImageUploadComponent from "../ImageUploadComp";
import { useLocation } from "react-router-dom";
import ToggleButton from "./QRToggleButton";
import { PreviewFrame, TopPreviewHeader } from "../SVGIcon";
import { QRPreviewApps } from "./QRPreviewAll";
import ViewPreviewModal from "../Modal/QR/ViewPreviewModal";

const colors = [
  { id: "blue", background: "#d1e5fa", button: "#1466b8" },
  { id: "green", background: "#e8fce8", button: "#0e8b70" },
  { id: "yellow", background: "#fff9cc", button: "#998600" },
  { id: "red", background: "#fecdd6", button: "#b00223" },
];

const icons = {
  googlePlay: <GooglePlaySocial />,
  appStore: <AppStoreSocial />,
  amazon: <AmazonSocial />,
};

const APPS = ({ localQrData, setLocalQrData, errors, setErrors }) => {
  const [selectedOption, setSelectedOption] = useState("Preview Page");
  const [showModalPreview, setShowModalPreview] = useState(false);
  const handleToggle = (option) => {
    setSelectedOption(option);
  };
  //EDIT
  const location = useLocation();
  // console.log("LOCATIONURLSOCAPP", location);

  useEffect(() => {
    if (location.state?.qrData) {
      const qrDataFromLocation = location.state.qrData.data;
      // console.log("qrDataFromLocation", qrDataFromLocation);
      setLocalQrData(qrDataFromLocation);

      // If there's color data in localQrData, ensure it's set correctly
      if (qrDataFromLocation?.color) {
        setLocalQrData((prevQrData) => ({
          ...prevQrData,
          color: qrDataFromLocation?.color,
        }));
      }

      // if (qrDataFromLocation?.app_social) {
      //   setLocalQrData((prevQrData) => ({
      //     ...prevQrData,
      //     app_social: qrDataFromLocation?.app_social,
      //   }));
      // }
    }
  }, [location.state, setLocalQrData]);

  const handleImageUpload = (mediaData, name, file) => {
 

    setLocalQrData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };

  const handleImageDelete = (fieldName) => {

    setLocalQrData((prevData) => ({
      ...prevData,
      [fieldName]: "",
    }));
  };

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
  const handleSocialIconChange = (iconName, url) => {

    setLocalQrData((prevData) => ({
      ...prevData,
      app_social: {
        ...prevData.app_social,
        [iconName]: url,
      },
    }));
  };

  return (
    <>
      <div className="app-page">
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
                value={localQrData.qr_name}
              />
            </AccordianComponent>
            <AccordianComponent title={"Choose your design"}>
              <CutsomColorPickerComp
                colors={colors}
                qrData={localQrData}
                setQrData={setLocalQrData}
              />
            </AccordianComponent>
            <AccordianComponent title={"App information"}>
              <ImageUploadComponent
                defaultImage={"/assets/images/default-img.png"}
                onImageUpload={handleImageUpload}
                onImageDelete={handleImageDelete}
                label="Logo"
                name="app_logo"
                localQrData={localQrData}
                onEditImagePreview={localQrData?.app_logo}
              />
              <InputComponent
                label={"App name*"}
                placeholder={"e.g. FitnessNow"}
                name={"app_name"}
                value={localQrData?.app_name}
                onChange={handleInputChange}
                error={errors?.app_name}
              />
              <InputComponent
                label={"Developer/Company"}
                placeholder={"e.g. App Developer PRO"}
                name={"app_company"}
                value={localQrData?.app_company}
                onChange={handleInputChange}
              />
              <InputComponent
                label={"Description"}
                placeholder={"e.g. The only fitness app you need"}
                name={"app_description"}
                value={localQrData?.app_description}
                onChange={handleInputChange}
              />
              <InputComponent
                label={"Website"}
                placeholder={"e.g. https://www.fitnessnow.com"}
                name={"app_website"}
                value={localQrData?.app_website}
                onChange={handleInputChange}
                error={errors?.app_website}
              />
            </AccordianComponent>
            <AccordianComponent title={"Links to platforms"}>
              <p className="social-con-content">Add at least one link to...</p>
              <SocialIconsComp
                icons={icons}
                // onIconClick={handleSocialIconChange}
                // initialLinks={localQrData?.app_social}
                // isEditing={!!location.state?.qrData}
                className={"app-social"}
                customStyle={"app-social"}
                localQrData={localQrData}
                setLocalQrData={setLocalQrData}
                dataKey={"app_social"}
              />
            </AccordianComponent>
          </div>
          <div className="right">
            {
              // localQrData?.app_name ||
              // localQrData?.app_company ||
              // localQrData?.app_description ||
              // localQrData?.app_website ||
              // localQrData?.app_logo
              true ? (
                <>
                  <ToggleButton
                    selectedOption={selectedOption}
                    onToggle={handleToggle}
                  />
                  <div className="qr-preview__layout__image">
                    <div className="Preview-layout Preview-layout--vcard">
                      <TopPreviewHeader className="topHeaderSvg" />
                      <QRPreviewApps localQrData={localQrData} />
                    </div>
                    <PreviewFrame className="preview-frame" />
                  </div>
                </>
              ) : (
                <img src="/assets/images/phone-apps.png" alt="phone-apps" />
              )
            }
          </div>
        </div>
      </div>
      <ViewPreviewModal
        setShowModalPreview={setShowModalPreview}
        showModalPreview={showModalPreview}
        localQrData={localQrData}
        type={"apps"}
      />
    </>
  );
};

export default APPS;
