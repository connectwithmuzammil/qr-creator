import React, { useCallback, useEffect, useState } from "react";
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
import { debounce } from "lodash";
import { useLocation } from "react-router-dom";

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
const LINKS = ({ localQrData, setLocalQrData }) => {
  //EDIT
  const location = useLocation();
  console.log("LINKSDATA", location);

  useEffect(() => {
    if (location.state?.qrData) {
      const qrDataFromLocation = location.state.qrData.data;
      console.log("qrDataFromLocation", qrDataFromLocation);
      setLocalQrData(qrDataFromLocation);

      // If there's color data in localQrData, ensure it's set correctly
      if (qrDataFromLocation?.color) {
        setLocalQrData((prevQrData) => ({
          ...prevQrData,
          color: qrDataFromLocation?.color,
        }));
      }
      if (qrDataFromLocation?.links) {
        setLinks(qrDataFromLocation.links);
      }
    }
  }, [location.state, setLocalQrData]);

  const [links, setLinks] = useState([]);

  console.log("updatedQRdata", localQrData);

  // Debounce function to update localQrData with a delay of 300ms
  const updateQrDataDebounced = useCallback(
    debounce((updatedLinks) => {
      const sanitizedLinks = updatedLinks.map(({ id, ...rest }) => rest);
      setLocalQrData((prevData) => ({
        ...prevData,
        all_links: sanitizedLinks,
      }));
    }, 300),
    []
  );

  useEffect(() => {
    // Initialize links from localQrData when the component mounts
    if (localQrData.all_links) {
      setLinks(localQrData.all_links);
    }
  }, [localQrData]);

  const handleAddLink = () => {
    const newLink = { id: Date.now(), image: "", text: "", url: "" };

    // setLinks([...links, { id: Date.now(), image: "", text: "", url: "" }]);
    setLinks((prevLinks) => {
      const updatedLinks = [...prevLinks, newLink];
      // Update localQrData with the new links state
      setLocalQrData((prevData) => ({ ...prevData, all_links: updatedLinks }));
      return updatedLinks;
    });
  };

  const handleRemoveLink = (id) => {
    // setLinks(links.filter((link) => link.id !== id));
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.filter((link) => link.id !== id);
      // Update localQrData with the updated links state
      setLocalQrData((prevData) => ({ ...prevData, all_links: updatedLinks }));
      return updatedLinks;
    });
  };

  const handleLinkInputChange = (id, name, value) => {
    // setLinks(
    //   links.map((link) => (link.id === id ? { ...link, [name]: value } : link))
    // );
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.map((link) =>
        link.id === id ? { ...link, [name]: value } : link
      );
      console.log("updatedLinks", updatedLinks);
      // Update localQrData with the updated links state
      // setLocalQrData((prevData) => ({ ...prevData, all_links: updatedLinks }));
      updateQrDataDebounced(updatedLinks);

      return updatedLinks;
    });
  };
  // Clean up debounce on unmount
  useEffect(() => {
    return () => {
      updateQrDataDebounced.cancel();
    };
  }, [updateQrDataDebounced]);

  const handleImageUpload = (imageUrl, name, file) => {
    console.log("Image file path:", imageUrl);
    console.log("Image file object:", file);
    console.log("Uploader Name/ID:", name);
    // setLinks(
    //   links.map((link) =>
    //     link.id === id ? { ...link, image: imageData } : link
    //   )
    // );
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.map((link) =>
        link.name === name ? { ...link, image: file } : link
      );

      console.log("updatedLinksupdatedLinks", updatedLinks);
      // Update localQrData with the updated links state
      setLocalQrData((prevData) => ({ ...prevData, all_links: updatedLinks }));
      return updatedLinks;
    });
  };

  const handleImageDelete = (id) => {
    // setLinks(
    //   links.map((link) => (link.id === id ? { ...link, image: "" } : link))
    // );
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.map((link) =>
        link.id === id ? { ...link, image: "" } : link
      );
      // Update localQrData with the updated links state
      setLocalQrData((prevData) => ({ ...prevData, all_links: updatedLinks }));
      return updatedLinks;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalQrData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSingleImageUpload = (mediaData, name, file) => {
    console.log("Received media data", mediaData); // media data base64
    console.log("Received media name", name); // media name

    setLocalQrData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };

  const handleSocialIconChange = (iconName, url) => {
    console.log("ICONS NAME, URL", iconName, url);
    setLocalQrData((prevData) => ({
      ...prevData,
      links_social: {
        ...prevData.links_social,
        [iconName]: url,
      },
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
          <AccordianComponent title={"Information about your List of Links"}>
            <ImageUploadComponent
              defaultImage={"/assets/images/default-img.png"}
              onImageUpload={handleSingleImageUpload}
              //   onImageDelete={handleImageDelete}
              label="Logo"
              name="links_image"
            />
            <InputComponent
              label={"Title"}
              name={"links_title"}
              placeholder={"e.g. Our sportswear collection"}
              onChange={handleInputChange}
              value={localQrData?.links_title}
            />
            <InputComponent
              label={"Description"}
              name={"links_description"}
              placeholder={
                "e.g. Our Clothing, footwear, and accessories for athletes"
              }
              onChange={handleInputChange}
              value={localQrData?.links_description}
            />
          </AccordianComponent>
          <AccordianComponent title={"Your links"}>
            <p className="social-con-content">Add one link*</p>

            <div>
              {links?.map((link, index) => (
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
                    onImageUpload={(imageUrl, name, file) =>
                      handleImageUpload(imageUrl, link.id, file)
                    }
                    onImageDelete={() => handleImageDelete(link.id)}
                    label="Image"
                    name={link.id}
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
                      handleLinkInputChange(link.id, "url", e.target.value)
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
            <SocialIconsComp
              icons={icons}
              onIconClick={handleSocialIconChange}
              initialLinks={localQrData?.links_social}
            />
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
