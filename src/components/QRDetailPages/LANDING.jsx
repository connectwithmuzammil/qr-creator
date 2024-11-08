import React, { useEffect, useState } from "react";
import { AccordianComponent } from "../AccordianComponent";
import { InputComponent } from "../InputComponent";
import CutsomColorPickerComp from "../CutsomColorPickerComp";
import {
  DribbleSocial,
  FacebookSocial,
  FlikrSocial,
  GithubSocial,
  InstagramSocial,
  LineSocial,
  LinkedinSocial,
  RedditSocial,
  SkypeSocial,
  SnapchatSocial,
  TiktokSocial,
  TripadvisorSocial,
  TumblrSocial,
  TwitterSocial,
  VimeoSocial,
  VkontakteSocial,
  WebSocial,
  XingSocial,
} from "../../Helper/SocialSvgIcons";
import SocialIconsComp from "../SocialIconComp";
import ImageUploadComponent from "../ImageUploadComp";
import { useLocation } from "react-router-dom";
import ToggleButton from "./QRToggleButton";
import { PreviewFrame, TopPreviewHeader } from "../SVGIcon";
import { QRPreviewLanding } from "./QRPreviewAll";
import { resetField, resetQrData } from "../../redux/slice/qrSlice";
import { useDispatch } from "react-redux";
const colors = [
  { id: "blue", background: "#d1e5fa", button: "#1466b8" },
  { id: "green", background: "#e8fce8", button: "#0e8b70" },
  { id: "yellow", background: "#fff9cc", button: "#998600" },
  { id: "red", background: "#fecdd6", button: "#b00223" },
];
const icons = {
  facebook: <FacebookSocial />,
  instagram: <InstagramSocial />,
  twitter: <TwitterSocial />,
  dribble: <DribbleSocial />,
  flickr: <FlikrSocial />,
  github: <GithubSocial />,
  line: <LineSocial />,
  linkedin: <LinkedinSocial />,
  reddit: <RedditSocial />,
  skype: <SkypeSocial />,
  snapchat: <SnapchatSocial />,
  tiktok: <TiktokSocial />,
  tripadvisor: <TripadvisorSocial />,
  tumblr: <TumblrSocial />,
  vimeo: <VimeoSocial />,
  vkontakte: <VkontakteSocial />,
  web: <WebSocial />,
  xing: <XingSocial />,
};
const LANDING = ({ localQrData, setLocalQrData }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("Preview Page");
  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  //EDIT
  const location = useLocation();
  console.log("LANDINGDATAEDITT", location);
  console.log("localQrData", localQrData);

  useEffect(() => {
    if (location.state?.qrData) {
      const localQrDataFromLocation = location?.state?.qrData?.data;
      console.log("localQrDataFromLocation", localQrDataFromLocation);
      setLocalQrData(localQrDataFromLocation);

      // If there's color data in localQrData, ensure it's set correctly
      if (localQrDataFromLocation?.color) {
        setLocalQrData((prevlocalQrData) => ({
          ...prevlocalQrData,
          color: localQrDataFromLocation?.color,
        }));
      }
    }
  }, [location?.state, setLocalQrData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalQrData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (mediaData, name, file) => {
    console.log("Received media data", mediaData); // media data base64
    console.log("Received media name", name); // media name

    setLocalQrData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };
  const handleImageDelete = (fieldName) => {
    dispatch(resetField({ field: fieldName }));
    setLocalQrData((prevData) => ({
      ...prevData,
      [fieldName]: "", 
    }));
    console.log(`Deleted image for field: ${fieldName}`);
  };
  const handleSocialIconChange = (iconName, url) => {
    console.log("ICONS NAME, URL", iconName, url);
    setLocalQrData((prevData) => ({
      ...prevData,
      landing_social: {
        ...prevData.landing_social,
        [iconName]: url,
      },
    }));
  };
  return (
    <div className="landing-page">
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
          <AccordianComponent title={"Choose your design"}>
            <CutsomColorPickerComp
              colors={colors}
              qrData={localQrData}
              setQrData={setLocalQrData}
            />
          </AccordianComponent>
          <AccordianComponent title={"Website information"}>
            <ImageUploadComponent
              defaultImage={"/assets/images/default-img.png"}
              onImageUpload={handleImageUpload}
              onImageDelete={handleImageDelete}
              label="Logo"
              name="landing_logo"
              localQrData={localQrData}
              onEditImagePreview={location?.state?.qrData?.data?.landing_logo}

            />
            <InputComponent
              label={"Company"}
              name={"landing_company"}
              placeholder={"e.g. Summer Store"}
              onChange={handleInputChange}
              value={localQrData?.landing_company}
            />
            <InputComponent
              label={"Title"}
              name={"landing_title"}
              placeholder={"e.g. Summer Collection"}
              onChange={handleInputChange}
              value={localQrData?.landing_title}
            />
            <InputComponent
              label={"Subtitle"}
              name={"landing_subtitle"}
              placeholder={"e.g. Shop for summer essentials at great prices"}
              onChange={handleInputChange}
              value={localQrData?.landing_subtitle}
            />
            <InputComponent
              label={"Button text"}
              name={"landing_btn_text"}
              placeholder={"e.g. Browse the collection"}
              onChange={handleInputChange}
              value={localQrData?.landing_btn_text}
            />
            <InputComponent
              label={"URL"}
              name={"landing_action_url"}
              placeholder={"e.g. https://www.yourclothesshop.com/summer"}
              onChange={handleInputChange}
              value={localQrData?.landing_action_url}
            />
          </AccordianComponent>
          <AccordianComponent title={"Social networks"}>
            <p className="social-con-content">Add Link to...</p>
            <SocialIconsComp
              icons={icons}
              onIconClick={handleSocialIconChange}
              initialLinks={localQrData?.landing_social}
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
              <TopPreviewHeader className="topHeaderSvg" />
              <QRPreviewLanding localQrData={localQrData} />
            </div>

            <PreviewFrame className="preview-frame" />
          </div>
          {/* <img src="/assets/images/phone-website.png" alt="phone-website" /> */}
        </div>
      </div>
    </div>
  );
};

export default LANDING;
