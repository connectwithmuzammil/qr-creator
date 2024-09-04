import React, { useState } from "react";
import { AccordianComponent } from "../AccordianComponent";
import { InputComponent } from "../InputComponent";
import CutsomColorPickerComp from "../CutsomColorPickerComp";
import SocialIconsComp from "../SocialIconComp";
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

const VCARD = ({ qrData, setQrData }) => {
  const handleImageUpload = (image) => {
    console.log("Image uploaded:", image);
  };
  const handleImageDelete = () => {
    console.log("Image deleted");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQrData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="vcard-page">
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
          <AccordianComponent title={"Add vCard information"}>
            <ImageUploadComponent
              defaultImage={
                qrData?.landing_logo && qrData?.landing_logo !== ""
                  ? qrData.landing_logo
                  : "/assets/images/default-img.png"
              }
              onImageUpload={handleImageUpload}
              onImageDelete={handleImageDelete}
              label="Profile picture"
            />
            <div className="wrap-inp-cmp">
              <InputComponent
                label={"Full name*"}
                name={"full_name"}
                placeholder={"e.g. Johana Smith"}
                onChange={handleInputChange}
                value={qrData.network_password}
              />
              <InputComponent
                label={"Email"}
                name={"email"}
                placeholder={"e.g. youremail@domain.com"}
                onChange={handleInputChange}
                value={qrData.network_password}
              />
            </div>
            <div className="wrap-inp-cmp">
              <InputComponent
                label={"Mobile phone"}
                name={"phone"}
                placeholder={"e.g. (123)-123-123-123"}
                onChange={handleInputChange}
                value={qrData.network_password}
              />
              <InputComponent
                label={"Landline"}
                name={"landline"}
                placeholder={"e.g. (123)-123-123-123"}
                onChange={handleInputChange}
                value={qrData.network_password}
              />
              <InputComponent
                label={"Fax"}
                name={"fax"}
                placeholder={"e.g. (123)-123-123-123"}
                onChange={handleInputChange}
                value={qrData.network_password}
              />
            </div>
            <div className="wrap-inp-cmp">
              <InputComponent
                label={"Website"}
                name={"website"}
                placeholder={"e.g. www.yourwebsite.com"}
                onChange={handleInputChange}
                value={qrData.network_password}
              />
              <InputComponent
                label={"Company name"}
                name={"company_name"}
                placeholder={"e.g. Workplace Yoga"}
                onChange={handleInputChange}
                value={qrData.network_password}
              />
              <InputComponent
                label={"Profession"}
                name={"profession"}
                placeholder={"e.g. Yoga teacher"}
                onChange={handleInputChange}
                value={qrData.network_password}
              />
            </div>
            <div className="wrap-inp-cmp">
              <InputComponent
                label={"Summary"}
                name={"summary"}
                placeholder={
                  "e.g. I offer on-site yoga classes to promote wellness, and reduce stress and improve productivity. "
                }
                onChange={handleInputChange}
                value={qrData.network_password}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title={"Location"}>
            <div className="wrap-inp-cmp">
              <InputComponent
                label={"Address"}
                name={"address"}
                placeholder={"e.g. High Street"}
                onChange={handleInputChange}
                value={qrData?.address}
              />
              <InputComponent
                label={"Number"}
                name={"number"}
                placeholder={"e.g. 10"}
                onChange={handleInputChange}
                value={qrData.number}
              />
              <InputComponent
                label={"Zip code"}
                name={"zip_code"}
                placeholder={"e.g. 12548"}
                onChange={handleInputChange}
                value={qrData.zip_code}
              />
            </div>
            <div className="wrap-inp-cmp">
              <InputComponent
                label={"City"}
                name={"city"}
                placeholder={"e.g. New York"}
                onChange={handleInputChange}
                value={qrData.address}
              />
              <InputComponent
                label={"State"}
                name={"state"}
                placeholder={"e.g. 10"}
                onChange={handleInputChange}
                value={qrData.number}
              />
              <InputComponent
                label={"Country"}
                name={"zip_code"}
                placeholder={"e.g. USA"}
                onChange={handleInputChange}
                value={qrData.zip_code}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title={"Social networks"}>
            <p className="social-con-content">Add Link to...</p>
            <SocialIconsComp icons={icons} />
          </AccordianComponent>
        </div>
        <div className="right">
          <img src="/assets/images/phone-vcard.png" alt="phone-vcard" />
        </div>
      </div>
    </div>
  );
};

export default VCARD;
