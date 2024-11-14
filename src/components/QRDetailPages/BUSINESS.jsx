import React, { useEffect, useState } from "react";
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
import { useLocation } from "react-router-dom";
import ToggleButton from "./QRToggleButton";
import { PreviewFrame, TopPreviewHeader } from "../SVGIcon";
import { QRPreviewBusiness } from "./QRPreviewAll";

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

const BUSINESS = ({ localQrData, setLocalQrData }) => {
  const hasBusinessData =
    localQrData &&
    (localQrData.business_email ||
      localQrData.business_name ||
      localQrData.business_phone ||
      localQrData.business_website ||
      localQrData.business_company ||
      localQrData.business_address ||
      localQrData.business_city ||
      localQrData.business_country ||
      localQrData.business_numeration ||
      localQrData.business_postalcode ||
      localQrData.business_state);

  const [selectedOption, setSelectedOption] = useState("Preview Page");
  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  //EDIT
  const location = useLocation();
  console.log("LOCATIONURLBusiness", location);

  useEffect(() => {
    if (location.state?.qrData) {
      const qrDataFromLocation = location.state.qrData.data;
      console.log("qrDataFromLocation", qrDataFromLocation);
      setLocalQrData(qrDataFromLocation);

      if (qrDataFromLocation?.color) {
        setLocalQrData((prevQrData) => ({
          ...prevQrData,
          color: qrDataFromLocation?.color,
        }));
      }
    }
  }, [location.state, setLocalQrData]);

  console.log("updatedQrDataBusiness", localQrData);

  const [is24HourFormat, setIs24HourFormat] = useState(false);
  const handleImageUpload = (mediaData, name, file) => {
    console.log("Received media data", mediaData); // media data base64
    console.log("Received media name", name); // media name

    setLocalQrData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };
  const handleImageDelete = (fieldName) => {
    console.log("Image deleted");
    // dispatch(resetField({ field: fieldName }));
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
  };
  const handleSocialIconChange = (iconName, url) => {
    console.log("ICONS NAME, URL", iconName, url);
    setLocalQrData((prevData) => ({
      ...prevData,
      business_social: {
        ...prevData.business_social,
        [iconName]: url,
      },
    }));
  };
  const handleFacilitiesIconChange = (iconName, isSelected) => {
    setLocalQrData((prevQrData) => ({
      ...prevQrData,
      business_facilities: {
        ...prevQrData.business_facilities,
        [iconName]: isSelected,
      },
    }));
  };

  const handleTimeDataChange = (timeData) => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const updatedOpeningHours = {};

    days.forEach((day) => {
      const dayData = timeData[day][0];
      updatedOpeningHours[day.toLowerCase()] = {
        enabled: dayData.enabled,
        times: timeData[day].map((slot) => ({
          start: slot.from,
          end: slot.to,
        })),
      };
    });

    setLocalQrData((prevData) => ({
      ...prevData,
      opening_hours_days: updatedOpeningHours,
      opening_hours_format: is24HourFormat ? "24-Hour" : "AM-PM", // Update format based on toggle
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
          <AccordianComponent title={"Business information"}>
            <ImageUploadComponent
              defaultImage={"/assets/images/default-img.png"}
              onImageUpload={handleImageUpload}
              onImageDelete={handleImageDelete}
              label="Logo"
              name="business_logo"
              onEditImagePreview={localQrData?.business_logo}
            />
            <InputComponent
              label={"Company name"}
              name={"business_company"}
              placeholder={"e.g. Artisan Bakery"}
              onChange={handleInputChange}
              // value={
              //   localQrData?.business_company ||
              //   localQrData?.business_page?.business_company
              // }
              value={
                localQrData?.business_company ||
                localQrData?.business_page?.business_company
              }
            />
            <InputComponent
              label={"Title"}
              name={"business_title"}
              placeholder={"e.g. Fresh Bread and Pastries"}
              onChange={handleInputChange}
              value={
                localQrData?.business_title ||
                localQrData?.business_page?.business_title
              }
            />
            <InputComponent
              label={"Subtitle"}
              name={"business_subtitle"}
              placeholder={
                "e.g. Delicious bread and pastries baked daily. vVsit our bakery or order online."
              }
              onChange={handleInputChange}
              value={
                localQrData?.business_subtitle ||
                localQrData?.business_page?.business_subtitle
              }
            />
            <div className="wrap-inp-cmp">
              <InputComponent
                label={"Button text"}
                name={"business_btn_text"}
                placeholder={"e.g. View our products"}
                onChange={handleInputChange}
                value={
                  localQrData?.business_btn_text ||
                  localQrData?.business_page?.business_btn_text
                }
              />
              <InputComponent
                label={"URL"}
                name={"business_url"}
                placeholder={"e.g. https://URL here"}
                onChange={handleInputChange}
                value={
                  localQrData?.business_url ||
                  localQrData?.business_page?.business_url
                }
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title={"Opening hours"}>
            <TimeInputComponent
              onTimeDataChange={handleTimeDataChange}
              is24HourFormat={is24HourFormat}
              setIs24HourFormat={setIs24HourFormat}
              openingHours = {localQrData?.opening_hours_days}
            />
          </AccordianComponent>

          <AccordianComponent title={"Location"}>
            <div className="wrap-inp-cmp">
              <InputComponent
                label={"Address"}
                name={"business_address"}
                placeholder={"e.g. High Street"}
                onChange={handleInputChange}
                value={
                  localQrData?.business_address ||
                  localQrData?.business_page?.business_address
                }
              />
              <InputComponent
                label={"Number"}
                name={"business_numeration"}
                placeholder={"e.g. 10"}
                onChange={handleInputChange}
                value={
                  localQrData?.business_numeration ||
                  localQrData?.business_page?.business_numeration
                }
              />
              <InputComponent
                label={"Zip code"}
                name={"business_postalcode"}
                placeholder={"e.g. 12548"}
                onChange={handleInputChange}
                value={
                  localQrData?.business_postalcode ||
                  localQrData?.business_page?.business_postalcode
                }
              />
            </div>
            <div className="wrap-inp-cmp">
              <InputComponent
                label={"City"}
                name={"business_city"}
                placeholder={"e.g. New York"}
                onChange={handleInputChange}
                value={
                  localQrData?.business_city ??
                  localQrData?.business_page?.business_city
                }
              />
              <InputComponent
                label={"State"}
                name={"business_state"}
                placeholder={"e.g. 10"}
                onChange={handleInputChange}
                value={
                  localQrData?.business_state ||
                  localQrData?.business_page?.business_state
                }
              />
              <InputComponent
                label={"Country"}
                name={"business_country"}
                placeholder={"e.g. USA"}
                onChange={handleInputChange}
                value={
                  localQrData?.business_country ||
                  localQrData?.business_page?.business_country
                }
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title={"Facilities"}>
            <FacilitiesIconComp
              icons={FacilitiesIcon}
              onIconClick={handleFacilitiesIconChange}
              initialSelectedIcons={localQrData.business_facilities}
            />
          </AccordianComponent>
          <AccordianComponent title={"Contact information"}>
            <InputComponent
              label={"Name"}
              name={"business_name"}
              placeholder={"e.g. John Smith"}
              onChange={handleInputChange}
              value={
                localQrData?.business_name ||
                localQrData?.business_page?.business_name
              }
            />
            <InputComponent
              label={"Phone"}
              name={"business_phone"}
              placeholder={"e.g. (123)-123-123-123"}
              onChange={handleInputChange}
              value={
                localQrData?.business_phone ||
                localQrData?.business_page?.business_phone
              }
            />
            <InputComponent
              label={"Email"}
              name={"business_email"}
              placeholder={"e.g. youremail@domain.com"}
              onChange={handleInputChange}
              value={
                localQrData?.business_email ||
                localQrData?.business_page?.business_email
              }
            />
            <InputComponent
              label={"Website"}
              name={"business_website"}
              placeholder={"e.g. https://www.artisian-bakery.com"}
              onChange={handleInputChange}
              value={
                localQrData?.business_website ||
                localQrData?.business_page?.business_website
              }
            />
          </AccordianComponent>
          <AccordianComponent title={"About the company"}>
            <InputComponent
              name={"business_about"}
              placeholder={
                "e.g. Indicate your business opening hour and/or any relevant information about it"
              }
              onChange={handleInputChange}
              value={
                localQrData?.business_about ||
                localQrData?.business_page?.business_about
              }
            />
          </AccordianComponent>
          <AccordianComponent title={"Social networks"}>
            <p className="social-con-content">Add Link to...</p>
            <SocialIconsComp
              icons={icons}
              onIconClick={handleSocialIconChange}
              initialLinks={localQrData?.business_social}
              isEditing={!!location.state?.qrData}
            />
          </AccordianComponent>
        </div>

        <div className="right">
          {
            // hasBusinessData
            true ? (
              <>
                <ToggleButton
                  selectedOption={selectedOption}
                  onToggle={handleToggle}
                />
                <div className="qr-preview__layout__image">
                  <div className="Preview-layout Preview-layout--vcard">
                    <TopPreviewHeader className="topHeaderSvg" />
                    <QRPreviewBusiness localQrData={localQrData} />
                  </div>
                  <PreviewFrame className="preview-frame" />
                </div>
              </>
            ) : (
              <img
                src="/assets/images/phone-business.png"
                alt="phone-business"
              />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default BUSINESS;
