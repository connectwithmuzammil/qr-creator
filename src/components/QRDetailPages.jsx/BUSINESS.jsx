import React from "react";
import { AccordianComponent } from "../AccordianComponent";
import CutsomColorPickerComp from "../CutsomColorPickerComp";
import { InputComponent } from "../InputComponent";
import {
  FacilitiesAccommodationIcon,
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
  FacilitiesBarIcon,
  FacilitiesCafeIcon,
  FacilitiesChildFriendlyIcon,
  FacilitiesParkingIcon,
  FacilitiesPetFriendlyIcon,
  FacilitiesRestaurantIcon,
  FacilitiesRestroomIcon,
  FacilitiesSeatingIcon,
  FacilitiesNearPublicTransportIcon,
  FacilitiesTaxiIcon,
  FacilitiesWheelChairAccessIcon,
  FacilitiesWifiIcon,
} from "../../Helper/SocialSvgIcons";
import ImageUploadComponent from "../ImageUploadComp";
import SocialIconsComp from "../SocialIconComp";
import FacilitiesIconComp from "../FacilitiesIconComp";
import TimeInputComponent from "../TimeInputComponent";

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
const FacilitiesIcon = {
  Accommodation: <FacilitiesAccommodationIcon />,
  Bar: <FacilitiesBarIcon />,
  Cafe: <FacilitiesCafeIcon />,
  ChildFriendly: <FacilitiesChildFriendlyIcon />,
  Parking: <FacilitiesParkingIcon />,
  PetFriendly: <FacilitiesPetFriendlyIcon />,
  Restaurant: <FacilitiesRestaurantIcon />,
  Restroom: <FacilitiesRestroomIcon />,
  Seating: <FacilitiesSeatingIcon />,
  NearPublicTransport: <FacilitiesNearPublicTransportIcon />,
  Taxi: <FacilitiesTaxiIcon />,
  WheelChairAccess: <FacilitiesWheelChairAccessIcon />,
  Wifi: <FacilitiesWifiIcon />,
};

const BUSINESS = ({ qrData, setQrData }) => {
  const handleImageUpload = (mediaData, name) => {
    console.log("Received media data", mediaData); // media data base64
    console.log("Received media name", name); // media name

    setQrData((prevData) => ({
      ...prevData,
      [name]: mediaData,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQrData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSocialIconChange = (iconName, url) => {
    console.log("ICONS NAME, URL", iconName, url);
    setQrData((prevData) => ({
      ...prevData,
      vcard_social: {
        ...prevData.vcard_social,
        [iconName]: url,
      },
    }));
  };
  const handleFacilitiesIconChange = (iconName, isSelected) => {
    setQrData((prevQrData) => ({
      ...prevQrData,
      facilities_icon: {
        ...prevQrData.facilities_icon,
        [iconName]: isSelected,
      },
    }));
  };
  return (
    <div className="business-page">
      <div className="containerr">
        <div className="left">
          <AccordianComponent title={"Enter the name of your QR code"}>
            <InputComponent
              placeholder="e.g My QR code"
              onChange={handleInputChange}
              name="qr_name"
              value={qrData.qr_name}
            />
          </AccordianComponent>
          <AccordianComponent title={"Choose your design"}>
            <CutsomColorPickerComp
              colors={colors}
              qrData={qrData}
              setQrData={setQrData}
            />
          </AccordianComponent>
          <AccordianComponent title={"Business information"}>
            <ImageUploadComponent
              defaultImage={"/assets/images/default-img.png"}
              onImageUpload={handleImageUpload}
              //   onImageDelete={handleImageDelete}
              label="Logo"
              name="business_image"
            />
            <InputComponent
              label={"Company name"}
              name={"business_company_name"}
              placeholder={"e.g. Artisan Bakery"}
              onChange={handleInputChange}
              value={qrData?.business_company_name}
            />
            <InputComponent
              label={"Title"}
              name={"business_title"}
              placeholder={"e.g. Fresh Bread and Pastries"}
              onChange={handleInputChange}
              value={qrData?.business_title}
            />
            <InputComponent
              label={"Subtitle"}
              name={"business_subtitle"}
              placeholder={
                "e.g. Delicious bread and pastries baked daily. vVsit our bakery or order online."
              }
              onChange={handleInputChange}
              value={qrData?.business_subtitle}
            />
            <div className="wrap-inp-cmp">
              <InputComponent
                label={"Button text"}
                name={"business_btn_text"}
                placeholder={"e.g. View our products"}
                onChange={handleInputChange}
                value={qrData?.business_btn_text}
              />
              <InputComponent
                label={"URL"}
                name={"business_url"}
                placeholder={"e.g. https://URL here"}
                onChange={handleInputChange}
                value={qrData?.business_url}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title={"Opening hours"}>
            <TimeInputComponent />
          </AccordianComponent>
          <AccordianComponent title={"Location"}>
            <div className="wrap-inp-cmp">
              <InputComponent
                label={"Address"}
                name={"vcard_address"}
                placeholder={"e.g. High Street"}
                onChange={handleInputChange}
                value={qrData?.vcard_address}
              />
              <InputComponent
                label={"Number"}
                name={"vcard_numeration"}
                placeholder={"e.g. 10"}
                onChange={handleInputChange}
                value={qrData?.vcard_numeration}
              />
              <InputComponent
                label={"Zip code"}
                name={"vcard_zip_code"}
                placeholder={"e.g. 12548"}
                onChange={handleInputChange}
                value={qrData?.vcard_zip_code}
              />
            </div>
            <div className="wrap-inp-cmp">
              <InputComponent
                label={"City"}
                name={"vcard_city"}
                placeholder={"e.g. New York"}
                onChange={handleInputChange}
                value={qrData?.vcard_city}
              />
              <InputComponent
                label={"State"}
                name={"vcard_state"}
                placeholder={"e.g. 10"}
                onChange={handleInputChange}
                value={qrData?.vcard_state}
              />
              <InputComponent
                label={"Country"}
                name={"vcard_country"}
                placeholder={"e.g. USA"}
                onChange={handleInputChange}
                value={qrData?.vcard_country}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title={"Facilities"}>
            <FacilitiesIconComp
              icons={FacilitiesIcon}
              onIconClick={handleFacilitiesIconChange}
            />
          </AccordianComponent>
          <AccordianComponent title={"Contact information"}>
            <InputComponent
              label={"Name"}
              name={"business_name"}
              placeholder={"e.g. John Smith"}
              onChange={handleInputChange}
              value={qrData?.business_name}
            />
            <InputComponent
              label={"Phone"}
              name={"business_phone"}
              placeholder={"e.g. (123)-123-123-123"}
              onChange={handleInputChange}
              value={qrData?.business_phone}
            />
            <InputComponent
              label={"Email"}
              name={"business_email"}
              placeholder={"e.g. youremail@domain.com"}
              onChange={handleInputChange}
              value={qrData?.business_email}
            />
            <InputComponent
              label={"Website"}
              name={"business_website"}
              placeholder={"e.g. https://www.artisian-bakery.com"}
              onChange={handleInputChange}
              value={qrData?.business_website}
            />
          </AccordianComponent>
          <AccordianComponent title={"About the company"}>
            <InputComponent
              name={"business_about"}
              placeholder={
                "e.g. Indicate your business opening hour and/or any relevant information about it"
              }
              onChange={handleInputChange}
              value={qrData?.business_about}
            />
          </AccordianComponent>
          <AccordianComponent title={"Social networks"}>
            <p className="social-con-content">Add Link to...</p>
            <SocialIconsComp
              icons={icons}
              onIconClick={handleSocialIconChange}
            />
          </AccordianComponent>
        </div>
        <div className="right">
          <img src="/assets/images/phone-business.png" alt="phone-business" />
        </div>
      </div>
    </div>
  );
};

export default BUSINESS;
