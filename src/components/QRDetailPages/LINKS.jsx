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
import ToggleButton from "./QRToggleButton";
import { PreviewFrame, TopPreviewHeader } from "../SVGIcon";
import { QRPreviewLinks } from "./QRPreviewAll";

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
  const [selectedOption, setSelectedOption] = useState("Preview Page");
  const handleToggle = (option) => {
    setSelectedOption(option);
  };

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

  // Add new link
  const handleAddLink = () => {
    const newLink = { id: Date.now(), image: "", text: "", url: "" };
    setLinks((prevLinks) => {
      const updatedLinks = [...prevLinks, newLink];
      setLocalQrData((prevData) => ({ ...prevData, all_links: updatedLinks }));
      return updatedLinks;
    });
  };

  // Remove a link
  const handleRemoveLink = (id) => {
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.filter((link) => link.id !== id);
      setLocalQrData((prevData) => ({ ...prevData, all_links: updatedLinks }));
      return updatedLinks;
    });
  };

  // Handle changes to link inputs (text, url)
  const handleLinkInputChange = (id, name, value) => {
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.map((link) =>
        link.id === id ? { ...link, [name]: value } : link
      );

      // Debounced update to the QR data
      updateQrDataDebounced(updatedLinks);
      return updatedLinks;
    });
  };

  // Handle image upload
  const handleImageUpload = (imageUrl, id, file) => {
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.map((link) =>
        link.id === id ? { ...link, image: file } : link
      );

      // Update localQrData with the updated image for the specific link
      setLocalQrData((prevData) => ({
        ...prevData,
        all_links: updatedLinks,
      }));

      return updatedLinks;
    });
  };

  // Handle image deletion
  const handleImageDelete = (id) => {
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.map((link) =>
        link.id === id ? { ...link, image: "" } : link
      );
      setLocalQrData((prevData) => ({ ...prevData, all_links: updatedLinks }));
      return updatedLinks;
    });
  };

  // ----------------------------------------------
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
  const handleSingleImageDelete = (fieldName) => {
    // dispatch(resetField({ field: fieldName }));
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
      links_social: {
        ...prevData.links_social,
        [iconName]: url,
      },
    }));
  };

  // Clean up debounce on unmount
  useEffect(() => {
    return () => {
      updateQrDataDebounced.cancel();
    };
  }, [updateQrDataDebounced]);
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
              onImageDelete={handleSingleImageDelete}
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
                    image={link.image || "/assets/images/phone-links.png"} // Ensure each link has its own image
                    defaultImage="/assets/images/default-img.png"
                    onImageUpload={(imageUrl, name, file) =>
                      handleImageUpload(imageUrl, link.id, file)
                    }
                    onImageDelete={() => handleImageDelete(link.id)}
                    label="Image"
                    name={link.id}
                  />

                  <InputComponent
                    label="Link text*"
                    name="text"
                    placeholder="e.g. Write your link text here"
                    onChange={(e) =>
                      handleLinkInputChange(link.id, "text", e.target.value)
                    }
                    value={link.text}
                  />

                  <InputComponent
                    label="URL*"
                    name="url"
                    placeholder="e.g. https://..."
                    onChange={(e) =>
                      handleLinkInputChange(link.id, "url", e.target.value)
                    }
                    value={link.url}
                  />
                </div>
              ))}

              <Button width="100%" title="Add Link" onClick={handleAddLink} />
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
          {
            <>
              <ToggleButton
                selectedOption={selectedOption}
                onToggle={handleToggle}
              />
              <div className="qr-preview__layout__image">
                <div className="Preview-layout Preview-layout--vcard">
                  <TopPreviewHeader className="topHeaderSvg" />
                  <QRPreviewLinks localQrData={localQrData} />
                </div>
                <PreviewFrame className="preview-frame" />
              </div>
            </>
          }

          {/* <img src="/assets/images/phone-links.png" alt="phone-links" /> */}
        </div>
      </div>
    </div>
  );
};

export default LINKS;
