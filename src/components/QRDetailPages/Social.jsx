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
import ImageUploadComponent from "../ImageUploadComp";
import SocialIconsComp from "../SocialIconComp";
import { useLocation } from "react-router-dom";
import ToggleButton from "./QRToggleButton";
import { PreviewFrame, TopPreviewHeader } from "../SVGIcon";
import { QRPreviewSocial } from "./QRPreviewAll";
import { MdErrorOutline } from "react-icons/md";
import ViewPreviewModal from "../Modal/QR/ViewPreviewModal";

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

const Social = ({ localQrData, setLocalQrData, errors, setErrors }) => {
  // console.log("rrrerrr", errors);
  const [showModalPreview, setShowModalPreview] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Preview Page");
  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  //EDIT
  const location = useLocation();
  // console.log("LOCATIONURLSOCIAL", location);

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

      // Set initial vcard_social links if present (edit mode)
      // if (qrDataFromLocation?.media_social) {
      //   setLocalQrData((prevQrData) => ({
      //     ...prevQrData,
      //     media_social: qrDataFromLocation?.media_social,
      //   }));
      // }
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

  const handleImageUpload = (mediaData, name, file) => {


    setLocalQrData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };
  const handleImageDelete = (fieldName) => {

    // dispatch(resetField({ field: fieldName }));
    setLocalQrData((prevData) => ({
      ...prevData,
      [fieldName]: "",
    }));
  };
  const handleSocialIconChange = (iconName, url) => {

    setLocalQrData((prevData) => ({
      ...prevData,
      media_social: {
        ...prevData.media_social,
        [iconName]: url,
      },
    }));
  };

  // console.log("localQrDataSocial", localQrData);
  return (
    <>
      <div className="social-page">
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
            <AccordianComponent title={"Basic information"}>
              <div className="wrapper-img-upload-dashed">
                <ImageUploadComponent
                  defaultImage={"/assets/images/default-img.png"}
                  //   onImageDelete={handleImageDelete}
                  label="Upload Your Own Image"
                  onImageUpload={handleImageUpload}
                  onImageDelete={handleImageDelete}
                  name="social_logo"
                  localQrData={localQrData}
                  onEditImagePreview={localQrData?.social_logo}
                />
              </div>
              <InputComponent
                label={"Headline*"}
                name={"media_headline"}
                placeholder={"e.g. Connect with us"}
                onChange={handleInputChange}
                value={localQrData.media_headline}
                error={errors?.media_headline}
              />
              <InputComponent
                label={"Description"}
                name={"media_description"}
                placeholder={
                  "e.g. If you would like to keep up on the latest content, come by and follow us"
                }
                onChange={handleInputChange}
                value={localQrData.media_description}
              />
            </AccordianComponent>
            <AccordianComponent title={"Social Media Channels"}>
              <SocialIconsComp
                icons={icons}
                // onIconClick={handleSocialIconChange}
                // initialLinks={localQrData?.media_social}
                // isEditing={!!location.state?.qrData}
                localQrData={localQrData}
                setLocalQrData={setLocalQrData}
                dataKey={"media_social"}
              />

              {errors?.media_social && (
                <div className="error-message">
                  <MdErrorOutline className="error-icon" />
                  {errors.media_social}
                </div>
              )}
            </AccordianComponent>
          </div>
          <div className="right">
            {
              // localQrData.media_headline ||
              // localQrData.media_description ||
              // localQrData?.social_logo
              true ? (
                <>
                  <ToggleButton
                    selectedOption={selectedOption}
                    onToggle={handleToggle}
                  />
                  <div className="qr-preview__layout__image">
                    <div className="Preview-layout Preview-layout--vcard">
                      <TopPreviewHeader className="topHeaderSvg" />
                      <QRPreviewSocial localQrData={localQrData} />
                    </div>
                    <PreviewFrame className="preview-frame" />
                  </div>
                </>
              ) : (
                <img src="/assets/images/phone-social.png" alt="phone-social" />
              )
            }
          </div>
        </div>
      </div>

      <ViewPreviewModal
        setShowModalPreview={setShowModalPreview}
        showModalPreview={showModalPreview}
        localQrData={localQrData}
        type={"social_media"}
      />
    </>
  );
};

export default Social;
