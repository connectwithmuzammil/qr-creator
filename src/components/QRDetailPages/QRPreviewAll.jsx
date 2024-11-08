import React from "react";
import { Link } from "react-router-dom";
import {
  AmazonSocial,
  AppStoreSocial,
  DribbleSocial,
  FacebookSocial,
  FacilitiesAccommodationIcon,
  FacilitiesBarIcon,
  FacilitiesCafeIcon,
  FacilitiesChildFriendlyIcon,
  FacilitiesNearPublicTransportIcon,
  FacilitiesParkingIcon,
  FacilitiesPetFriendlyIcon,
  FacilitiesRestaurantIcon,
  FacilitiesRestroomIcon,
  FacilitiesSeatingIcon,
  FacilitiesTaxiIcon,
  FacilitiesWheelChairAccessIcon,
  FacilitiesWifiIcon,
  FlikrSocial,
  GithubSocial,
  GooglePlaySocial,
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
const iconsApps = {
  googlePlay: <GooglePlaySocial />,
  appStore: <AppStoreSocial />,
  amazon: <AmazonSocial />,
};

const CustomButton = ({ text, url, backgroundColor }) => {
  if (!text) return null;

  return (
    <button
      style={{
        background: backgroundColor,
        width: "90%",
        maxWidth: "300px",
        height: "32px",
        borderRadius: "4px",
        outline: "none",
        border: "none",
        color: "#fff",
      }}
    >
      <Link
        to={url}
        target="_blank"
        style={{ textDecoration: "none", color: "#fff" }}
      >
        {text}
      </Link>
    </button>
  );
};

const SocialMediaLinks = ({ socialLinks, icons }) => {
  if (!socialLinks) return null;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        width: "100%",
        maxWidth: "700px",
        justifyContent: "center",
        paddingTop: "12px",
        paddingBottom: "12px",
      }}
    >
      {Object.entries(socialLinks).map(([key, url]) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#333" }}
        >
          {icons[key] || null}
        </a>
      ))}
    </div>
  );
};

export const QRPreviewLanding = ({ localQrData }) => {
  const imageUrl = localQrData?.id
    ? localQrData?.landing_logo
    : localQrData?.landing_logo instanceof File
    ? URL.createObjectURL(localQrData.landing_logo)
    : localQrData?.landing_logo;

  console.log("Image URL:", imageUrl);

  return (
    <div
      className="layout-content showBrowser "
      style={{ backgroundColor: localQrData?.color?.background }}
    >
      <div className="website-companyName">
        <p style={{ fontWeight: "700", wordBreak: "break-all", margin: "0" }}>
          {localQrData?.landing_company}
        </p>
      </div>
      <div>
        <div className="websiteLogo">
          {localQrData?.landing_logo && (
            <img
              src={imageUrl}
              alt="Company Logo"
              style={{ width: "40px", height: "40px", objectFit: "contain" }}
            />
          )}
        </div>
        <div
          className="con-white"
          style={{
            background: "#fff",
            paddingTop: "10px",
            paddingBottom: "10px",
            marginTop: "8px",
          }}
        >
          <p style={{ fontWeight: "700", wordBreak: "break-all" }}>
            {localQrData?.landing_title}
          </p>
          <h6 style={{ fontWeight: "400", wordBreak: "break-all" }}>
            {localQrData?.landing_subtitle}
          </h6>
          <CustomButton
            text={localQrData?.landing_btn_text}
            url={localQrData?.landing_action_url}
            backgroundColor={localQrData?.color?.button}
          />
          <SocialMediaLinks
            socialLinks={localQrData?.landing_social}
            icons={icons}
          />
        </div>
      </div>
    </div>
  );
};
export const QRPreviewPdf = ({ localQrData }) => {
  console.log("localQrData", localQrData);
  const pdfFileUrl =
    localQrData?.pdf_file instanceof File
      ? URL.createObjectURL(localQrData.pdf_file)
      : localQrData?.pdf_file;

  return (
    <div
      className="layout-content showBrowser "
      style={{ backgroundColor: localQrData?.color?.background }}
    >
      <div className="website-companyName">
        <p style={{ fontWeight: "700", wordBreak: "break-all", margin: "0" }}>
          {localQrData?.pdf_company}
        </p>
      </div>
      <div
        className="con-white"
        style={{
          background: "#fff",
          paddingTop: "10px",
          paddingBottom: "10px",
          marginTop: "8px",
        }}
      >
        <p style={{ fontWeight: "700", wordBreak: "break-all" }}>
          {localQrData?.pdf_title}
        </p>
        <h6 style={{ fontWeight: "400", wordBreak: "break-all" }}>
          {localQrData?.pdf_description}
        </h6>
        <div
          style={{
            marginTop: "8px",
            marginBottom: "8px",
            width: "100%",
            maxWidth: "600px",
            height: "100%",
            aspectRatio: "1.6 / 1",
          }}
        >
          {pdfFileUrl ? (
            <iframe
              src={pdfFileUrl}
              width="85%"
              height="100%"
              style={{ border: "none", borderRadius: "4px" }}
              title="PDF Viewer"
            />
          ) : (
            <div
              style={{
                border: "1px solid #000",
                padding: "8px",
                width: "150px",
                height: "120px",
                borderRadius: "8px",
                marginInline: "auto",
              }}
            >
              <img
                src="/assets/images/default-img.png"
                width={100}
                height={100}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}
        </div>

        <CustomButton
          text={"See Pdf"}
          url={pdfFileUrl}
          backgroundColor={localQrData?.color?.button}
        />
      </div>
      <p
        style={{
          fontWeight: "600",
          wordBreak: "break-all",
          fontSize: "12px",
          marginTop: "12px",
        }}
      >
        {localQrData?.pdf_website}
      </p>
    </div>
  );
};

export const QRPreviewURL = ({ localQrData }) => {
  return (
    <div className="layout-content url ">
      <img src="/assets/images/URLPreview.avif" alt="URLPreview" />
    </div>
  );
};
