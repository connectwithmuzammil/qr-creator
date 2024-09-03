import React, { useState } from "react";
import { AccordianComponent } from "../AccordianComponent";
import { InputComponent } from "../InputComponent";
import CutsomColorPickerComp from "../CutsomColorPickerComp";
import ImageUploadComponent from "../ImageUploadComp";
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
import Button from "../Button";
import { FaTrash } from "react-icons/fa";

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
const LINKS = ({ qrData, setQrData }) => {
  const [showLink, setShowLink] = useState(false);

  const [links, setLinks] = useState([]);

  const handleAddLink = () => {
    setLinks([...links, { id: Date.now(), image: "", text: "", url: "" }]);
  };

  const handleRemoveLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const handleLinkInputChange = (id, name, value) => {
    setLinks(
      links.map((link) => (link.id === id ? { ...link, [name]: value } : link))
    );
  };

  const handleImageUpload = (id, imageData) => {
    setLinks(
      links.map((link) =>
        link.id === id ? { ...link, image: imageData } : link
      )
    );
  };

  const handleImageDelete = (id) => {
    setLinks(
      links.map((link) => (link.id === id ? { ...link, image: "" } : link))
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQrData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="link-page">
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
          <AccordianComponent title={"Information about your List of Links"}>
            <ImageUploadComponent
              defaultImage={"/assets/images/default-img.png"}
              //   onImageUpload={handleImageUpload}
              //   onImageDelete={handleImageDelete}
              label="Logo"
            />
            <InputComponent
              label={"Title"}
              name={"links_title"}
              placeholder={"e.g. Our sportswear collection"}
              onChange={handleInputChange}
              value={qrData?.links_title}
            />
            <InputComponent
              label={"Description"}
              name={"links_description"}
              placeholder={
                "e.g. Our Clothing, footwear, and accessories for athletes"
              }
              onChange={handleInputChange}
              value={qrData?.links_description}
            />
          </AccordianComponent>
          <AccordianComponent title={"Your links"}>
            <p className="social-con-content">Add one link*</p>

            <div>
              {links.map((link, index) => (
                <div key={link.id} className="show-link-con">
                  <div
                    className="trash-con"
                    onClick={() => handleRemoveLink(link.id)}
                  >
                    <p>Link {index + 1}</p>
                    <FaTrash />
                  </div>

                  <ImageUploadComponent
                    image={"/assets/images/phone-links.png"}
                    defaultImage={"/assets/images/default-img.png"}
                    onImageUpload={(imageUrl) =>
                      handleImageUpload(link.id, imageUrl)
                    }
                    onImageDelete={() => handleImageDelete(link.id)}
                    label="Image"
                  />

                  <InputComponent
                    label={"Link text*"}
                    name={"text"}
                    placeholder={"e.g. Write your link text here"}
                    onChange={(e) =>
                      handleLinkInputChange(link.id, "text", e.target.value)
                    }
                    value={link.text}
                  />

                  <InputComponent
                    label={"URL*"}
                    name={"url"}
                    placeholder={"e.g. https://..."}
                    onChange={(e) =>
                      handleInputChange(link.id, "url", e.target.value)
                    }
                    value={link.url}
                  />
                </div>
              ))}
              <Button
                width={"100%"}
                title={"Add Link"}
                onClick={handleAddLink}
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title={"Your social networks"}>
            <p className="social-con-content">Add Link to...</p>
            <SocialIconsComp icons={icons} />
          </AccordianComponent>
        </div>
        <div className="right">
          <img src="/assets/images/phone-links.png" alt="phone-links" />
        </div>
      </div>
    </div>
  );
};

export default LINKS;
