import React, { useState } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { IoMdPersonAdd } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsFillTelephonePlusFill } from "react-icons/bs";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCalendarPlus,
  FaFax,
  FaGoogle,
  FaYahoo,
  FaBeer,
  FaGlobe,
  FaInfoCircle,
  FaWineGlassAlt,
  FaCoffee,
  FaCheck,
  FaTimes,
  FaUtensils,
  FaExclamationCircle,
  FaTag,
} from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import { IoGlobeOutline, IoPeopleCircle } from "react-icons/io5";
import { TbBriefcase2Filled } from "react-icons/tb";
import { GoClockFill } from "react-icons/go";
import formatDate from "../../utils/FormatDate";
import { CiCalendar } from "react-icons/ci";
import { PiCigaretteBold } from "react-icons/pi";

import { useForm, Controller } from "react-hook-form";
import { AccordianComponent } from "../AccordianComponent";
import apis from "../../services";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Rating, Stack } from "@mui/material";
import { debounce } from "lodash";

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

const CustomButton = ({ text, url, backgroundColor, icon, onClick }) => {
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
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "center",
        marginInline: "auto",
      }}
      onClick={onClick}
    >
      {icon}
      <Link
        to={url}
        {...(url ? { target: "_blank" } : {})}
        style={{ textDecoration: "none", color: "#fff" }}
      >
        {text}
      </Link>
    </button>
  );
};

const SocialMediaLinks = ({ socialLinks, icons }) => {
  if (!socialLinks) return null;

  console.log("socialLinks", socialLinks);

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
      {Object.entries(socialLinks)
        .filter(([key, url]) => url) // Only include links where the URL is truthy
        .map(([key, url]) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#333" }}
          >
            {icons[key] || null} {/* Render the icon if available */}
          </a>
        ))}
    </div>
  );
};

const FacilitiesIconComp = ({ socialLinks, icons }) => {
  if (!socialLinks) return null; // If socialLinks is falsy, return null.

  // console.log("socialLinks", socialLinks);

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
      {Object.entries(socialLinks)
        .filter(([key, value]) => value === true) // Only include true values
        .map(([key, url]) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#333" }}
          >
            {icons[key] || null} {/* Render the icon if available */}
          </a>
        ))}
    </div>
  );
};

const DynamicImage = ({ data, imageKey, altText, style }) => {
  // Function to determine the image URL based on the input
  const getImageUrl = (source, key) => {
    // console.log("source chekkk", source);
    if (!source || !key) return null;
    const image = source[key];
    return typeof source?.key === "string"
      ? image
      : image instanceof File
      ? URL.createObjectURL(image)
      : image;
  };

  const imageUrl = getImageUrl(data, imageKey);

  return (
    imageUrl && (
      <div
        className="websiteLogo"
        style={{ width: "218px", marginInline: "auto" }}
      >
        <img src={imageUrl} alt={altText} style={style} />
      </div>
    )
  );
};

export const QRPreviewLanding = ({ localQrData }) => {
  // const imageUrl = localQrData?.id
  //   ? localQrData?.landing_logo
  //   : localQrData?.landing_logo instanceof File
  //   ? URL.createObjectURL(localQrData.landing_logo)
  //   : localQrData?.landing_logo;

  return (
    <div
      className="layout-content showBrowser "
      style={{ backgroundColor: localQrData?.color?.background }}
    >
      <div className="website-companyName">
        <p style={{ fontWeight: "700", wordBreak: "break-all" }}>
          {localQrData?.landing_company}
        </p>
      </div>
      <div>
        {/* <div className="websiteLogo">
          {localQrData?.landing_logo && (
            <img
              src={imageUrl}
              alt="Company Logo"
              style={{ width: "40px", height: "40px", objectFit: "contain" }}
            />
          )}
        </div> */}
        <DynamicImage
          data={localQrData}
          imageKey="landing_logo"
          altText="Company Logo"
          style={{
            width: "100%",
            height: "120px",
            objectFit: "contain",
            borderRadius: "12px",
          }}
        />
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
      <img src="/assets/images/URLPreview.avif" alt="URLPreview" clas />
    </div>
  );
};

const createVCardContent = ({ fullName, mobile, email, address, imageUrl }) => {
  const formattedAddress = address ? `;;${address};;;` : ";;;;";

  // If an image URL is provided, add it as a PHOTO property
  const photoProperty = imageUrl ? `PHOTO;VALUE=uri:${imageUrl}` : "";

  return `BEGIN:VCARD
VERSION:3.0
FN:${fullName || "No Name Provided"}
TEL;TYPE=CELL:${mobile || "No Phone Number Provided"}
EMAIL:${email || "No Email Provided"}
ADR;TYPE=HOME:${formattedAddress}
${photoProperty}
END:VCARD`;
};
export const QRPreviewVCard = ({ localQrData }) => {
  const handleDownloadVCard = () => {
    const vCardContent = createVCardContent({
      fullName: localQrData?.vcard_full_name || "Default Name",
      mobile: localQrData?.vcard_landline_phone || "12345678",
      email: localQrData?.vcard_email || "default@example.com",
      address: localQrData?.vcard_address || "Default Address",
      imageUrl: localQrData?.vcard_image,
    });

    const blob = new Blob([vCardContent], { type: "text/vcf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "vcard.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isReadyToDownload = localQrData?.vcard_full_name;

  return (
    <div
      className="layout-content showBrowser "
      style={{ backgroundColor: localQrData?.color?.background, left: "4px" }}
    >
      <DynamicImage
        data={localQrData}
        imageKey="vcard_image"
        altText="Company Logo"
        style={{ width: "40px", height: "40px", objectFit: "contain" }}
      />

      <div className="website-companyName">
        <p style={{ fontWeight: "700", wordBreak: "break-all", margin: "0" }}>
          {localQrData?.vcard_full_name}
        </p>
      </div>

      <div
        className="con-white"
        style={{
          background: "#fff",
          paddingTop: "16px",
          paddingBottom: "16px",
          marginTop: "8px",
          paddingLeft: "6px",
          paddingRight: "6px",
          minHeight: "100%",
        }}
      >
        {isReadyToDownload && (
          <CustomButton
            text={"Add to contact"}
            backgroundColor={localQrData?.color?.button}
            icon={<IoMdPersonAdd />}
            onClick={handleDownloadVCard}
          />
        )}

        <div
          style={{
            borderTop: "1px solid #bfbfbf",
            width: "100%",
            marginTop: "16px",
            paddingTop: "16px",
          }}
        >
          {[
            {
              icon: <MdEmail />,
              label: "Email",
              value: localQrData?.vcard_email,
              type: "mailto",
            },
            {
              icon: <BsFillTelephoneFill />,
              label: "Mobile Phone",
              value: localQrData?.vcard_mobile_phone,
              type: "tel",
            },
            {
              icon: <BsFillTelephonePlusFill />,
              label: "Alternative Phone Number",
              value: localQrData?.vcard_landline_phone,
              type: "tel",
            },
            {
              icon: <FaFax />,
              label: "Fax",
              value: localQrData?.vcard_fax,
              type: "tel",
            },
            {
              icon: <FaLocationDot />,
              label: "Location",
              value: localQrData?.vcard_address,
              type: "map",
            },
            {
              icon: <IoGlobeOutline />,
              label: "Website",
              value: localQrData?.vcard_website,
              type: "url",
            },
            {
              icon: <FaBuilding />,
              label: "Company Name",
              value: localQrData?.vcard_company_name,
            },
            {
              icon: <TbBriefcase2Filled />,
              label: "Profession",
              value: localQrData?.vcard_profession,
            },
          ].map(
            ({ icon, label, value, type }, index) =>
              value && ( // Conditionally render only if `value` is truthy
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "16px",
                  }}
                >
                  {icon}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <p
                      style={{
                        margin: "0",
                        color: "#8c8c8c",
                        fontSize: "12px",
                      }}
                    >
                      {label}
                    </p>
                    <a
                      href={
                        type === "mailto"
                          ? `mailto:${value}`
                          : type === "tel"
                          ? `tel:${value}`
                          : type === "map"
                          ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                              value
                            )}`
                          : value
                      }
                      target={type === "url" ? "_blank" : undefined}
                      rel={type === "url" ? "noopener noreferrer" : undefined}
                      style={{
                        textDecoration: "none",
                        fontSize: "12px",
                        color: "#307fe2",
                      }}
                    >
                      {value}
                    </a>
                  </div>
                </div>
              )
          )}
        </div>

        {localQrData?.vcard_summary && (
          <div
            style={{
              borderTop: "1px solid #bfbfbf",
              borderBottom: "1px solid #bfbfbf",
              width: "100%",
              padding: "12px 0",
              textAlign: "center",
              wordBreak: "break-all",
            }}
          >
            {localQrData?.vcard_summary}
          </div>
        )}

        <SocialMediaLinks
          socialLinks={localQrData?.vcard_social}
          icons={icons}
        />
      </div>
    </div>
  );
};

export const QRPreviewBusiness = ({ localQrData }) => {
  console.log("LocalDataBusiness", localQrData);
  return (
    <div
      className="layout-content showBrowser "
      style={{ backgroundColor: localQrData?.color?.background, left: "2px" }}
    >
      <div className="website-companyName">
        <p style={{ fontWeight: "700", wordBreak: "break-all" }}>
          {localQrData?.business_company}
        </p>
      </div>
      <DynamicImage
        data={localQrData}
        imageKey="business_logo"
        altText="Company Logo"
        style={{
          maxWidth: "300px",
          height: "120px",
          objectFit: "cover",
          marginBottom: "16px",
        }}
      />

      {(localQrData?.business_title || localQrData?.business_subtitle) && (
        <div
          className="company-info"
          style={{
            backgroundColor: "#fff",
            width: "100%",
            padding: "16px",
            textAlign: "center",
            borderRadius: "8px",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          <h6>{localQrData?.business_title}</h6>
          <h6>{localQrData?.business_subtitle}</h6>
        </div>
      )}
      <CustomButton
        text={localQrData?.business_btn_text}
        url={localQrData?.business_url}
        backgroundColor={localQrData?.color?.button}
      />

      {localQrData?.opening_hours_days &&
        Object.entries(localQrData?.opening_hours_days).some(
          ([day, schedule]) => schedule.enabled && schedule.times.length > 0
        ) && (
          <div
            className="opening-hour"
            style={{
              background: "#fff",
              width: "97%",
              padding: "8px",
              marginInline: "auto",
              borderRadius: "8px",
              marginTop: "16px",
              marginBottom: "16px",
            }}
          >
            <div
              className="top"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "16px",
              }}
            >
              <GoClockFill size={20} />
              <h5
                style={{
                  margin: "0",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#404040",
                }}
              >
                Opening hours
              </h5>
            </div>

            {Object.entries(localQrData?.opening_hours_days).map(
              ([day, schedule]) =>
                schedule.enabled && (
                  <div
                    key={day}
                    style={{
                      marginBottom: "8px",
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "13px",
                    }}
                  >
                    <strong>
                      {day.charAt(0).toUpperCase() + day.slice(1)}:
                    </strong>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {schedule.times.length > 0 ? (
                        schedule.times.map((time, index) => (
                          <span key={index}>
                            {time.start} - {time.end}
                          </span>
                        ))
                      ) : (
                        <span>Closed</span>
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
        )}

      {(localQrData?.business_address ||
        localQrData?.business_numeration ||
        localQrData?.business_country ||
        localQrData?.business_state ||
        localQrData?.business_postalcode) && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "10px",
            background: "#fff",
            width: "100%",
            padding: "16px",
            borderRadius: "8px",
            marginTop: "16px",
          }}
          className="location-con"
        >
          <div
            className="top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <FaLocationDot size={20} />
            <h5
              style={{
                margin: "0",
                fontSize: "16px",
                fontWeight: "700",
                color: "#404040",
              }}
            >
              Location
            </h5>
          </div>

          <div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${localQrData?.business_address} ${localQrData?.business_numeration}, ${localQrData?.business_country}, ${localQrData?.business_state}, ${localQrData?.business_postalcode}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                fontSize: "12px",
                color: "#307fe2",
              }}
            >
              {localQrData?.business_address},{" "}
              {localQrData?.business_numeration},{" "}
              {localQrData?.business_country}, Zip Code:{" "}
              {localQrData?.business_postalcode}, {localQrData?.business_state}
            </a>
          </div>
        </div>
      )}

      {localQrData?.business_facilities &&
        Object.keys(localQrData.business_facilities).length > 0 && (
          <div
            className="facilities-con"
            style={{
              background: "#fff",
              padding: "16px",
              width: "100%",
              borderRadius: "8px",
              marginTop: "16px",
            }}
          >
            <h6>Facilities</h6>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {Object.entries(localQrData?.business_facilities).map(
                ([key, url]) => {
                  return <div key={key}>{FacilitiesIcon[key] || null}</div>;
                }
              )}
            </div>
          </div>
        )}

      {(localQrData?.business_name ||
        localQrData?.business_phone ||
        localQrData?.business_email ||
        localQrData?.business_website) && (
        <div
          className="contact-info"
          style={{
            background: "#fff",
            width: "100%",
            padding: "16px",
            borderRadius: "8px",
            marginTop: "16px",
          }}
        >
          <div
            className="top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "16px",
            }}
          >
            <FaBuilding size={20} />
            <h5
              style={{
                margin: "0",
                fontSize: "16px",
                fontWeight: "700",
                color: "#404040",
              }}
            >
              Contact information
            </h5>
          </div>

          <div className="bottom">
            {localQrData?.business_name && (
              <div className="wrapp" style={{ marginBottom: "10px" }}>
                <p
                  style={{
                    color: "#8c8c8c",
                    fontSize: "12px",
                    margin: "0",
                  }}
                >
                  Name
                </p>
                <h6 style={{ fontSize: "12px", margin: "0" }}>
                  {localQrData?.business_name}
                </h6>
              </div>
            )}

            {localQrData?.business_phone && (
              <div className="wrapp" style={{ marginBottom: "10px" }}>
                <p
                  style={{
                    color: "#8c8c8c",
                    fontSize: "12px",
                    margin: "0",
                    lineHeight: "12px",
                  }}
                >
                  Phone
                </p>
                <a
                  href={`tel:${localQrData?.business_phone}`}
                  style={{
                    fontSize: "12px",
                    margin: "0",
                    textDecoration: "none",
                  }}
                >
                  {localQrData?.business_phone}
                </a>
              </div>
            )}

            {localQrData?.business_email && (
              <div className="wrapp" style={{ marginBottom: "10px" }}>
                <p
                  style={{
                    color: "#8c8c8c",
                    fontSize: "12px",
                    margin: "0",
                    lineHeight: "8px",
                  }}
                >
                  Email
                </p>
                <a
                  href={`mailto:${localQrData?.business_email}`}
                  style={{
                    fontSize: "12px",
                    margin: "0",
                    textDecoration: "none",
                  }}
                >
                  {localQrData?.business_email}
                </a>
              </div>
            )}

            {localQrData?.business_website && (
              <div className="wrapp" style={{ marginBottom: "10px" }}>
                <p
                  style={{
                    color: "#8c8c8c",
                    fontSize: "12px",
                    margin: "0",
                    lineHeight: "8px",
                  }}
                >
                  Website
                </p>
                <a
                  href={localQrData?.business_website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "12px",
                    margin: "0",
                    textDecoration: "none",
                  }}
                >
                  {localQrData?.business_website}
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {(localQrData?.business_description || localQrData?.business_about) && (
        <div
          className="about-company"
          style={{
            background: "#fff",
            width: "100%",
            padding: "16px",
            borderRadius: "8px",
            marginTop: "16px",
          }}
        >
          <h5>About Company</h5>
          <p
            style={{
              fontSize: "12px",
              color: "#8c8c8c",
              wordBreak: "break-all",
            }}
          >
            {localQrData?.business_description || localQrData?.business_about}
          </p>
        </div>
      )}

      <SocialMediaLinks
        socialLinks={localQrData?.business_social}
        icons={icons}
      />
    </div>
  );
};

export const QRPreviewSocial = ({ localQrData }) => {
  return (
    <div
      className="layout-content showBrowser "
      // style={{ backgroundColor: localQrData?.color?.background }}
    >
      <div
        className="img-headline-con"
        style={{
          backgroundColor: localQrData?.color?.background,
          borderBottom: `3px solid ${localQrData?.color?.button}`,
        }}
      >
        <DynamicImage
          data={localQrData}
          imageKey="social_logo"
          altText="Social Logo"
          style={{
            maxWidth: "300px",
            height: "120px",
            objectFit: "cover",
            marginBottom: "16px",
          }}
        />

        <p style={{ fontWeight: "700", wordBreak: "break-all", margin: "0" }}>
          {localQrData?.media_headline}
        </p>
        <p style={{ fontWeight: "700", wordBreak: "break-all", margin: "0" }}>
          {localQrData?.media_description}
        </p>
      </div>
      {/* <SocialMediaLinks socialLinks={localQrData?.media_social} icons={icons} /> */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "12px",
          width: "100%",
          maxWidth: "700px",
          marginTop: "16px",
        }}
      >
        {Object.entries(localQrData?.media_social).map(([key, url]) => {
          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderBottom: "1px solid #d9d9d9",
                paddingBottom: "8px",
                display: "flex",
                textDecoration: "none",
                alignItems: "center",
                gap: "8px",
                color: "#000", // Ensure text color is consistent
              }}
            >
              {icons[key] || null}
              <p
                style={{
                  color: "#000",
                  fontWeight: "600",
                  margin: "0",
                  textTransform: "capitalize",
                }}
              >
                {key}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export const QRPreviewApps = ({ localQrData }) => {
  return (
    <div
      className="layout-content showBrowser "
      style={{
        backgroundColor: localQrData?.color?.background,
        minHeight: "100%",
      }}
    >
      {localQrData?.app_logo && (
        <div
          style={{
            backgroundColor: localQrData?.color?.button,
            height: "60px",
          }}
        />
      )}
      <DynamicImage
        data={localQrData}
        imageKey="app_logo"
        altText="App Logo"
        style={{
          // maxWidth: "300px",
          with: "100%",
          height: "120px",
          objectFit: "contain",
          marginTop: "-50px",
          marginBottom: "16px",
          borderRadius: "12px",
        }}
      />
      <p style={{ fontWeight: "500", wordBreak: "break-all" }}>
        {localQrData?.app_name}
      </p>
      <p
        style={{
          fontWeight: "400",
          fontSize: "12px",
          wordBreak: "break-all",
          marginBottom: "8px",
        }}
      >
        {localQrData?.app_company}
      </p>
      {(localQrData?.app_description !== "" ||
        (localQrData?.app_social &&
          Object.keys(localQrData?.app_social).length > 0)) && (
        <div
          className="box"
          style={{
            background: localQrData?.color?.button,
            padding: "12px",
            width: "85%",
            marginInline: "auto",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              fontWeight: "500",
              wordBreak: "break-all",
              margin: "0",
              color: "#fff",
            }}
          >
            {localQrData?.app_description}
          </p>

          <SocialMediaLinks
            socialLinks={localQrData?.app_social}
            icons={iconsApps}
          />
        </div>
      )}
      <div style={{ paddingTop: "16px", paddingBottom: "50px" }}>
        <a
          style={{
            fontWeight: "500",
            wordBreak: "break-all",
            textDecoration: "none",
            cursor: "pointer",
            color: "#000",
          }}
          href={localQrData?.app_website}
          target="_blank"
          rel="noopener"
        >
          {localQrData?.app_website}
        </a>
      </div>
    </div>
  );
};

// export const QRPreviewVideo = ({ localQrData }) => {
//   const videoUrl =
//     localQrData?.video_path instanceof File
//       ? URL.createObjectURL(localQrData.video_path)
//       : typeof localQrData?.video_path === "string" &&
//         localQrData?.video_path.trim() !== ""
//       ? localQrData.video_path
//       : null;

//   return (
//     <div
//       className="layout-content showBrowser "
//       style={{
//         backgroundColor: localQrData?.color?.background,
//         minHeight: "100%",
//         left: "0px",
//       }}
//     >
//       <h4
//         style={{
//           fontWeight: "700",
//           wordBreak: "break-all",
//           marginBottom: "8px",
//           fontSize: "16px",
//         }}
//       >
//         {localQrData?.video_name}
//       </h4>
//       <h5
//         style={{
//           fontWeight: "500",
//           wordBreak: "break-all",
//           marginBottom: "8px",
//           fontSize: "14px",
//         }}
//       >
//         {localQrData?.video_title}
//       </h5>
//       <h6
//         style={{
//           fontWeight: "400",
//           wordBreak: "break-all",
//           marginBottom: "16px",
//           fontSize: "13px",
//         }}
//       >
//         {localQrData?.video_description}
//       </h6>

//       <CustomButton
//         text={localQrData?.video_button}
//         url={localQrData?.video_url}
//         backgroundColor={localQrData?.color?.button}
//       />
//       {localQrData?.video_path && (
//         <div
//           style={{
//             width: "90%",
//             maxWidth: "300px",
//             height: "auto",
//             aspectRatio: "16 / 9",
//             marginInline: "auto",
//             marginBottom: "20px",
//             position: "relative",
//             background: "#f2f2f2",
//             marginTop: "16px",
//           }}
//         >
//           <video
//             src={videoUrl || localQrData?.video_path}
//             style={{
//               width: "100%",
//               height: "100%",
//               borderRadius: "4px",
//               position: "absolute",
//               top: 0,
//               left: 0,
//               padding: "10px",
//             }}
//             controls
//           />
//         </div>
//       )}

//       <div
//         style={{
//           background: "#fff",
//           borderRadius: "8px",
//           marginTop: "16px",
//         }}
//       >
//         <SocialMediaLinks
//           socialLinks={localQrData?.video_social}
//           icons={icons}
//         />
//       </div>
//     </div>
//   );
// };

export const QRPreviewVideo = ({ localQrData }) => {
  // Check if specific fields are empty to decide how to display the video
  const hasDetails =
    localQrData?.video_name ||
    localQrData?.video_title ||
    (localQrData?.video_social &&
      Object.keys(localQrData.video_social).length > 0);

  const videoUrl =
    (localQrData?.video_path || localQrData?.video) instanceof File
      ? URL.createObjectURL(localQrData.video_path || localQrData?.video)
      : typeof localQrData?.video_path === "string" &&
        localQrData?.video_path.trim() !== ""
      ? localQrData.video_path
      : null;
  console.log("videoURL", localQrData?.video);

  return (
    <div
      className="layout-content showBrowser"
      style={{
        backgroundColor: localQrData?.color?.background,
        // minHeight: hasDetails ?  "100%" : "97%",
        minHeight: "100%",
        left: "0px",
        paddingBottom: "20px",
        paddingTop: hasDetails ? "3.875rem" : "20px",
      }}
    >
      {/* Always show video and handle full screen or limited height based on details */}
      {videoUrl && (
        <div
          style={{
            width: "100%",
            height: hasDetails ? "250px" : "100%",
            aspectRatio: "16 / 9",
            marginInline: "auto",
            position: "relative",
            background: "#000",
            marginBottom: hasDetails ? "20px" : "0",
          }}
        >
          <video
            src={videoUrl}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "4px",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            controls
          />
        </div>
      )}

      {hasDetails && (
        <>
          <h4
            style={{
              fontWeight: "700",
              wordBreak: "break-all",
              marginBottom: "8px",
              fontSize: "16px",
            }}
          >
            {localQrData?.video_name}
          </h4>
          <h5
            style={{
              fontWeight: "500",
              wordBreak: "break-all",
              marginBottom: "8px",
              fontSize: "14px",
            }}
          >
            {localQrData?.video_title}
          </h5>
          <h6
            style={{
              fontWeight: "400",
              wordBreak: "break-all",
              marginBottom: "16px",
              fontSize: "13px",
            }}
          >
            {localQrData?.video_description}
          </h6>

          <CustomButton
            text={localQrData?.video_button}
            url={localQrData?.video_url}
            backgroundColor={localQrData?.color?.button}
          />
          {localQrData?.video_social &&
            Object.keys(localQrData.video_social).length > 0 && (
              <div
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  // marginTop: "16px",
                }}
              >
                <SocialMediaLinks
                  socialLinks={localQrData?.video_social}
                  icons={icons}
                />
              </div>
            )}
        </>
      )}
    </div>
  );
};

export const QRPreviewLinks = ({ localQrData }) => {
  console.log("localQrDataLink", localQrData);
  return (
    <div
      className="layout-content showBrowser "
      style={{
        backgroundColor: localQrData?.color?.background,
        minHeight: "100%",
        left: "0px",
      }}
    >
      <DynamicImage
        data={localQrData}
        imageKey="linkslogo"
        altText="Link Logo"
        style={{ width: "100%", height: "120px", objectFit: "cover" }}
      />
      <p
        style={{
          fontWeight: "600",
          wordBreak: "break-all",
          marginTop: "16px",
        }}
      >
        {localQrData?.links_title}
      </p>
      <h6
        style={{
          fontWeight: "400",
          wordBreak: "break-all",
          marginTop: "16px",
        }}
      >
        {localQrData?.links_description}
      </h6>

      <div
        className="linkbox-con"
        style={{
          width: "100%",
          maxWidth: "700px",
          display: "flex",
          gap: "12px",
          flexDirection: "column",
        }}
      >
        {localQrData?.all_links?.map((link, index) => {
          const imageUrl =
            link.image instanceof File
              ? URL.createObjectURL(link.image)
              : link.image;
          return (
            <Link
              key={index}
              className="linkbox"
              style={{
                background: localQrData?.color?.button,
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                padding: "12px",
                borderRadius: "6px",
                color: "#fff",
                textDecoration: "none",
                gap: "12px",
              }}
              to={link?.url}
              target="_blank"
            >
              {link?.image && (
                <img
                  src={imageUrl}
                  alt={link.text}
                  style={{ width: "28px", height: "28px", borderRadius: "6px" }}
                />
              )}
              {console.log("link?.link_image", link)}
              {/* Optional: Set image size */}
              <h6 style={{ margin: "0" }}>{link?.text}</h6>
            </Link>
          );
        })}
      </div>

      <SocialMediaLinks socialLinks={localQrData?.links_social} icons={icons} />
    </div>
  );
};

export const QRPreviewGallery = ({ localQrData }) => {
  const images = Array.isArray(localQrData?.gallery_image)
    ? localQrData.gallery_image.map((image) =>
        image instanceof File ? URL.createObjectURL(image) : image
      )
    : [];

  return (
    <div
      className="layout-content showBrowser "
      style={{
        backgroundColor: localQrData?.color?.background,
        left: "3px",
        paddingTop: "30px",
        overflowX: "hidden",
      }}
    >
      <p
        style={{
          fontWeight: "600",
          wordBreak: "break-all",
          marginTop: "16px",
        }}
      >
        {localQrData?.gallery_title}
      </p>
      <h6
        style={{
          fontWeight: "400",
          wordBreak: "break-all",
          marginTop: "16px",
        }}
      >
        {localQrData?.gallery_description}
      </h6>

      {images.length > 0 && (
        <div
          style={{
            backgroundColor: localQrData?.color?.button,
            height: "200px",
            marginBottom: "16px",
          }}
        >
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {images.map((imgUrl, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imgUrl}
                  alt={`Gallery Image ${index + 1}`}
                  style={{
                    width: "80%",
                    borderRadius: "8px",
                    height: "160px",

                    marginTop: "10px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {/* ) : (
        <p>No images to display</p>
      )} */}
      <CustomButton
        text={localQrData?.gallery_btn_text}
        url={localQrData?.gallery_url}
        backgroundColor={localQrData?.color?.button}
      />
      <div style={{ paddingTop: "16px", paddingBottom: "50px" }}>
        <a
          style={{
            fontWeight: "500",
            wordBreak: "break-all",
            textDecoration: "none",
            cursor: "pointer",
            color: "#000",
          }}
          href={localQrData?.gallery_website}
          target="_blank"
        >
          {localQrData?.gallery_website}
        </a>
      </div>
    </div>
  );
};

export const QRPreviewYoutube = ({ localQrData }) => {
  // Extract videoId from youtube_url
  const videoId = localQrData?.youtube_url.split("v=")[1]?.split("&")[0];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  // State to track embedding error
  const [embedError, setEmbedError] = React.useState(false);

  const handleEmbedError = () => {
    console.error("Embedding is restricted for this video.");
    setEmbedError(true); // Set error state to show fallback link
  };

  return (
    <div
      className="layout-content showBrowser"
      style={{
        left: "0",
      }}
    >
      {localQrData?.youtube_url ? (
        <div
          style={{
            width: "95%",
            position: "relative",
            paddingBottom: "50%",
            height: "200px",
            marginTop: "80px",
            marginInline: "auto",
          }}
        >
          {!embedError ? (
            <iframe
              src={embedUrl}
              frameBorder="0"
              allowFullScreen
              title="YouTube Video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "4px",
              }}
              onError={handleEmbedError}
            ></iframe>
          ) : (
            <div>
              <p>
                This video cannot be embedded. You can watch it directly on
                YouTube:
              </p>
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Watch on YouTube
              </a>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export const QRPreviewEvent = ({ localQrData }) => {
  console.log("localQrData", localQrData);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const calendarUrls = {
    iCal: `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
      localQrData?.event_title
    )}&dates=${localQrData?.event_time_start}/${
      localQrData?.event_time_end
    }&details=${encodeURIComponent(
      localQrData?.event_description
    )}&location=${encodeURIComponent(localQrData?.event_location_address)}`,
    Google: `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
      localQrData?.event_title
    )}&dates=${localQrData?.event_time_start}/${
      localQrData?.event_time_end
    }&details=${encodeURIComponent(
      localQrData?.event_description
    )}&location=${encodeURIComponent(localQrData?.event_location_address)}`,
    Outlook: `https://outlook.live.com/owa/?path=/calendar/action/compose&subject=${encodeURIComponent(
      localQrData?.event_title
    )}&startdt=${localQrData?.event_time_start}&enddt=${
      localQrData?.event_time_end
    }&body=${encodeURIComponent(
      localQrData?.event_description
    )}&location=${encodeURIComponent(localQrData?.event_location_address)}`,
    Yahoo: `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${encodeURIComponent(
      localQrData?.event_title
    )}&st=${localQrData?.event_time_start}&et=${
      localQrData?.event_time_end
    }&desc=${encodeURIComponent(
      localQrData?.event_description
    )}&in_loc=${encodeURIComponent(localQrData?.event_location_address)}`,
  };

  return (
    <div
      className="layout-content showBrowser "
      style={{
        backgroundColor: localQrData?.color?.background,
        left: "3px",
        overflowX: "hidden",
      }}
    >
      <DynamicImage
        data={localQrData}
        imageKey="event_image"
        altText="Event Logo"
        style={{
          width: "100%",
          objectFit: "cover",
          height: "130px",
          borderRadius: "6px",
          objectPosition: "center",
        }}
      />
      {(localQrData?.event_title || localQrData?.event_description) && (
        <div
          className="whiteBox"
          style={{
            background: "#fff",
            paddingBottom: "22px",
            marginTop: "-16px",
            paddingTop: "22px",
          }}
        >
          <p
            style={{
              fontWeight: "700",
              wordBreak: "break-all",
            }}
          >
            {localQrData?.event_title}
          </p>
          <h6
            style={{
              fontWeight: "400",
              wordBreak: "break-all",
              marginTop: "16px",
            }}
          >
            {localQrData?.event_description}
          </h6>
          <CustomButton
            text={localQrData?.event_btn_text}
            url={localQrData?.event_action_url}
            backgroundColor={localQrData?.color?.button}
          />
        </div>
      )}

      {localQrData?.event_time_start && (
        <div
          className="box"
          style={{
            background: "#fff",
            width: "100%",
            maxWidth: "700px",
            padding: "16px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "16px",
          }}
        >
          <div
            className="top"
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <GoClockFill />
            <h5 style={{ margin: "0", fontSize: "16px", fontWeight: "600" }}>
              Date of the event
            </h5>
          </div>
          <div
            className="wrap"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h6 style={{ margin: "0px", color: "#8c8c8c", fontSize: "12px" }}>
              Start
            </h6>
            <h6 style={{ margin: "0px", color: "#000", fontSize: "12px" }}>
              {localQrData?.event_time_start
                ? formatDate(localQrData?.event_time_start)
                : ""}
            </h6>
          </div>
          <div
            className="wrap"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h6 style={{ margin: "0px", color: "#8c8c8c", fontSize: "12px" }}>
              End
            </h6>
            <h6 style={{ margin: "0px", color: "#000", fontSize: "12px" }}>
              {localQrData?.event_time_end
                ? formatDate(localQrData?.event_time_end)
                : ""}
            </h6>
          </div>

          {localQrData?.event_time_action_title && (
            <div style={{ position: "relative", display: "flex" }}>
              <button
                onClick={toggleDropdown}
                style={{
                  background: localQrData?.color?.button,
                  height: "38px",
                  borderRadius: "8px",
                  outline: "none",
                  border: "none",
                  color: "#fff",
                  width: "240px",
                  marginInline: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <CiCalendar size={22} />
                {/* Add to Calendar */}
                {localQrData?.event_time_action_title}
              </button>
              {isDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#fff",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    zIndex: 10,
                    width: "200px",
                  }}
                >
                  {Object.keys(calendarUrls).map((key) => (
                    <a
                      key={key}
                      href={calendarUrls[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "6px 14px",
                        color: "#333",
                        textDecoration: "none",
                        fontSize: "16px",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#f0f0f0")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      {key === "Google" && (
                        <FaGoogle style={{ marginRight: "8px" }} />
                      )}
                      {key === "iCal" && (
                        <FaCalendarAlt style={{ marginRight: "8px" }} />
                      )}
                      {key === "Outlook" && (
                        <FaCalendarPlus style={{ marginRight: "8px" }} />
                      )}
                      {key === "Yahoo" && (
                        <FaYahoo style={{ marginRight: "8px" }} />
                      )}
                      {key}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {(localQrData?.event_location_address ||
        localQrData?.event_location_numeration ||
        localQrData?.event_location_country ||
        localQrData?.event_location_postal_code ||
        localQrData?.event_location_state) && (
        <div
          className="box"
          style={{
            background: "#fff",
            width: "100%",
            maxWidth: "700px",
            padding: "8px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "16px",
            wordBreak: "break-all",
            alignItems: "start",
          }}
        >
          <div
            className="top"
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <FaLocationDot />

            <p
              style={{
                margin: "0",
                color: "#000",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "8px",
              }}
            >
              Location
            </p>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${localQrData?.event_location_address} ${localQrData?.event_location_numeration}, ${localQrData?.event_location_country}, ${localQrData?.event_location_state}, ${localQrData?.event_location_postal_code}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontSize: "12px",
              color: "#307fe2",
            }}
          >
            {localQrData?.event_location_address},{" "}
            {localQrData?.event_location_numeration},{" "}
            {localQrData?.event_location_country}, Zip Code:{" "}
            {localQrData?.event_location_postal_code},
            {localQrData?.event_location_state}
          </a>
        </div>
      )}

      {(localQrData?.event_organizer_name ||
        localQrData?.event_organizer_phone ||
        localQrData?.event_organizer_email ||
        localQrData?.event_organizer_aboutx) && (
        <div
          className="box"
          style={{
            background: "#fff",
            maxWidth: "700px",
            width: "100%",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "2px",
            padding: "8px",
            marginTop: "16px",
          }}
        >
          <div
            className="top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              paddingBottom: "8px",
            }}
          >
            <IoPeopleCircle size={24} />
            <h5 style={{ margin: "0", fontSize: "16px", fontWeight: "700" }}>
              Organizer information
            </h5>
          </div>

          <div
            className="wrap"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "4px",
            }}
          >
            <p style={{ margin: "0", color: "#8c8c8c", margin: "0px" }}>Name</p>
            <h6 style={{ fontSize: "12px" }}>
              {localQrData?.event_organizer_name}
            </h6>
          </div>

          <div
            className="wrap"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "4px",
            }}
          >
            <p style={{ margin: "0", color: "#8c8c8c" }}>Phone</p>

            <h6 style={{ fontSize: "12px", margin: "0px" }}>
              {localQrData?.event_organizer_phone}
            </h6>
          </div>

          <div
            className="wrap"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "4px",
            }}
          >
            <p style={{ margin: "0", color: "#8c8c8c" }}>email</p>

            <a
              href={`mailto:${localQrData?.event_organizer_email}`}
              style={{
                textDecoration: "none",
                fontSize: "12px",
                color: "#307fe2",
                marginBottom: "8px",
              }}
            >
              {localQrData?.event_organizer_email}
            </a>
          </div>

          <div
            className="wrap"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "4px",
            }}
          >
            <p style={{ margin: "0", color: "#8c8c8c" }}>Website</p>
            <a
              href={localQrData?.event_organizer_website}
              style={{
                textDecoration: "none",
                fontSize: "12px",
                color: "#307fe2",
                marginBottom: "8px",
              }}
            >
              {localQrData?.event_organizer_website}
            </a>
          </div>
          <div
            className="wrap"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "4px",
            }}
          >
            <p style={{ margin: "0", color: "#8c8c8c" }}>About</p>

            <h6 style={{ fontSize: "12px", marginBottom: "8px" }}>
              {localQrData?.event_organizer_about}
            </h6>
          </div>
        </div>
      )}

      {localQrData?.event_facilities && (
        <div
          className="box-facilities"
          style={{ background: "#fff", padding: "8px", marginTop: "16px" }}
        >
          <FacilitiesIconComp
            socialLinks={localQrData?.event_facilities}
            icons={FacilitiesIcon}
          />
        </div>
      )}
    </div>
  );
};

// ELABELS

const ReviewFormSubmit = ({ questions, qrCodeObj }) => {
  // console.log("questions", questions);
  const [rating, setRating] = useState(null);
  // console.log("qrCodeObj", qrCodeObj);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  //API FOR REVIEW FORM SUBMIT
  const { mutate: mutateReview, isPending: isLoading } = useMutation({
    mutationFn: apis.PostReviews,
    onError: function (error) {
      console.log("error", error);
      toast.error("An error occurred while submitting your review.");
    },
    onSuccess: ({ data: reviewSubmitSuccess, status }) => {
      console.log("reviewSubmitSuccess!!:", reviewSubmitSuccess);
      toast.success(
        "Your review has been successfully submitted! Thank you for your feedback."
      );
      questions.forEach((_, index) => {
        setValue(`question-${index}`, "");
      });
      console.log("Form State after reset:", control._formValues);
    },
  });

  const onSubmit = (data) => {
    console.log(data, "formloggg");

    const payload = Object.entries(data).map(([key, value]) => {
      const questionIndex = key.split("-")[1];
      const questionId = questions[questionIndex]?.id;

      return {
        question_id: questionId,
        answer: value,
      };
    });

    console.log("Payload to be sent:", payload);

    // payload.forEach((payload) => {
    mutateReview(payload);
    // });
  };

  //API FOR REVIEW RATING STAR
  const { mutate: mutateReviewRating, isPending: isLoadingRating } =
    useMutation({
      mutationFn: apis.PostReviewsRating,
      onError: function (error) {
        console.log("error", error);
        toast.error("An error occurred while submitting your review.");
      },
      onSuccess: ({ data: reviewSubmitRating, status }) => {
        console.log("reviewSubmitSuccess!!:", reviewSubmitRating);
      },
    });

  // Debounced API call
  const debouncedMutateReviewRating = React.useCallback(
    debounce((newRating) => {
      mutateReviewRating({
        qr_id: qrCodeObj?.id,
        rating: newRating.toString(),
      });
    }, 900),
    [mutateReviewRating, qrCodeObj?.id]
  );

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    debouncedMutateReviewRating(newRating);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-preview">
      {questions?.map((question, index) => (
        <div key={index} className="question-card">
          <p className="question-text">{question.text}</p>

          {/* Text Input */}
          {question?.type === "text" && (
            <Controller
              name={`question-${index}`}
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    placeholder="Your answer here"
                    className="input-field"
                  />
                  {errors[`question-${index}`] && (
                    <p className="error-message">
                      {errors[`question-${index}`]?.message}
                    </p>
                  )}
                </div>
              )}
            />
          )}

          {/* Radio Input */}
          {question?.type === "radio" &&
            question?.options.map((option, optIndex) => (
              <label key={optIndex} className="radio-label">
                <Controller
                  name={`question-${index}`}
                  control={control}
                  rules={{ required: "Please select an option" }}
                  render={({ field }) => (
                    <div>
                      <input
                        {...field}
                        type="radio"
                        value={option}
                        className="radio-input"
                      />
                      {option}
                      {errors[`question-${index}`] && (
                        <p className="error-message">
                          {errors[`question-${index}`]?.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </label>
            ))}

          {/* Dropdown Input */}
          {question.type === "dropdown" && (
            <Controller
              name={`question-${index}`}
              control={control}
              rules={{ required: "Please select an option" }}
              render={({ field }) => (
                <div>
                  <select {...field} className="input-field">
                    <option value="" disabled>
                      Please Select Option
                    </option>
                    {question.options.map((option, optIndex) => (
                      <option key={optIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors[`question-${index}`] && (
                    <p className="error-message">
                      {errors[`question-${index}`]?.message}
                    </p>
                  )}
                </div>
              )}
            />
          )}

          {/* Checkbox Input */}
          {question.type === "checkbox" && (
            <Controller
              name={`question-${index}`}
              control={control}
              rules={{ required: "Please check this box" }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="checkbox"
                    className="checkbox-input"
                  />
                  {errors[`question-${index}`] && (
                    <p className="error-message">
                      {errors[`question-${index}`]?.message}
                    </p>
                  )}
                </div>
              )}
            />
          )}

          {/* Number Input */}
          {question.type === "number" && (
            <Controller
              name={`question-${index}`}
              control={control}
              rules={{
                required: "Please enter a number",
                min: { value: 1, message: "Number must be at least 1" },
                max: { value: 100, message: "Number must be less than 100" },
              }}
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="number"
                    placeholder="Number"
                    className="input-field"
                  />
                  {errors[`question-${index}`] && (
                    <p className="error-message">
                      {errors[`question-${index}`]?.message}
                    </p>
                  )}
                </div>
              )}
            />
          )}

          {/* Email Input */}
          {question.type === "email" && (
            <Controller
              name={`question-${index}`}
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              }} // Validation for email input
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="email"
                    placeholder="Email"
                    className="input-field"
                  />
                  {errors[`question-${index}`] && (
                    <p className="error-message">
                      {errors[`question-${index}`]?.message}
                    </p>
                  )}
                </div>
              )}
            />
          )}

          {/* Telephone Input */}
          {question.type === "tel" && (
            <Controller
              name={`question-${index}`}
              control={control}
              rules={{
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number (10 digits required)",
                },
              }} // Validation for tel input
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="tel"
                    placeholder="Telephone"
                    className="input-field"
                  />
                  {errors[`question-${index}`] && (
                    <p className="error-message">
                      {errors[`question-${index}`]?.message}
                    </p>
                  )}
                </div>
              )}
            />
          )}

          {/* Password Input */}
          {question.type === "password" && (
            <Controller
              name={`question-${index}`}
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }} // Validation for password input
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type="password"
                    placeholder="Password"
                    className="input-field"
                  />
                  {errors[`question-${index}`] && (
                    <p className="error-message">
                      {errors[`question-${index}`]?.message}
                    </p>
                  )}
                </div>
              )}
            />
          )}

          {/* Date Input */}
          {question.type === "date" && (
            <Controller
              name={`question-${index}`}
              control={control}
              rules={{ required: "Date is required" }}
              render={({ field }) => (
                <div>
                  <input {...field} type="date" className="input-field" />
                  {errors[`question-${index}`] && (
                    <p className="error-message">
                      {errors[`question-${index}`]?.message}
                    </p>
                  )}
                </div>
              )}
            />
          )}

          {/* Range Input */}
          {question.type === "range" && (
            <Controller
              name={`question-${index}`}
              control={control}
              rules={{ required: "Range value is required" }}
              render={({ field }) => (
                <div>
                  <input {...field} type="range" className="input-field" />
                  {errors[`question-${index}`] && (
                    <p className="error-message">
                      {errors[`question-${index}`]?.message}
                    </p>
                  )}
                </div>
              )}
            />
          )}

          {/* File Input */}
          {question.type === "file" && (
            <Controller
              name={`question-${index}`}
              control={control}
              rules={{ required: "Please upload a file" }}
              render={({ field }) => (
                <div>
                  <input {...field} type="file" className="input-field" />
                  {errors[`question-${index}`] && (
                    <p className="error-message">
                      {errors[`question-${index}`]?.message}
                    </p>
                  )}
                </div>
              )}
            />
          )}
        </div>
      ))}

      {qrCodeObj?.is_rating === "true" && (
        <div
          style={{
            margin: "16px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Rate Your Overall Experience
          </p>
          <Stack spacing={1}>
            <Rating
              name="size-medium"
              value={rating}
              precision={0.5}
              onChange={(event, newValue) => handleRatingChange(newValue)}
              disabled={isLoadingRating}
            />
          </Stack>
        </div>
      )}

      {qrCodeObj?.is_question === "true" && (
        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      )}
    </form>
  );
};

// export const QRPreviewElabelsWine = ({
//   localQrData,
//   className,
//   showReview,
// }) => {
//   console.log("localQrData", localQrData);
//   return (
//     <>
//       <div
//         className={`beer-container layout-content showBrowser ${className}`}
//         style={{ left: "4px", overflowX: "hidden" }}
//       >
//         <div className="beer-header">
//           <DynamicImage
//             data={localQrData}
//             imageKey="wine_image"
//             altText="Wine Image"
//             className="beer-image"
//             style={{
//               width: "100%",
//               height: "200px",
//               objectFit: "cover",
//               borderRadius: "12px 12px 12px 12px",
//             }}
//           />
//         </div>
//         <div className="beer-content">
//           <h2 className="beer-product-name">
//             <FaWineGlassAlt className="icon-beer" />
//             {localQrData.grape_variety || "Grape Variety"}
//           </h2>
//           <div className="beer-details">
//             <p>
//               <strong>Alcohol Percentage:</strong>{" "}
//               {localQrData.alcohol_percentage || "0"}%
//             </p>
//             <p>
//               <strong>Task Notes:</strong> {localQrData.task_notes || "N/A"}
//             </p>
//           </div>
//           <p className="beer-website">
//             <FaGlobe className="icon-globe" />
//             <strong>Website:</strong>{" "}
//             {localQrData.website ? (
//               <a
//                 href={localQrData.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {localQrData.website}
//               </a>
//             ) : (
//               "N/A"
//             )}
//           </p>
//         </div>
//       </div>

//       {showReview && (
//         <div className="review-container">
//           <AccordianComponent title="📝 Share Your Feedback">
//             {localQrData?.is_question && (
//               <ReviewFormSubmit
//                 questions={localQrData?.questions}
//                 qrCodeObj={localQrData}
//               />
//             )}

//             {/* {localQrData?.is_rating && (
//               <div className="form-preview" style={{ marginTop: "12px" }}>
//                 <Stack spacing={1}>
//                   <Rating name="size-medium" defaultValue={1} precision={0.5} />
//                 </Stack>
//               </div>
//             )} */}
//           </AccordianComponent>
//         </div>
//       )}
//     </>
//   );
// };

export const QRPreviewElabelsWine = ({
  localQrData,
  className,
  showReview,
}) => {
  console.log("localQrData", localQrData);

  return (
    <>
      <div
        className={`beer-container layout-content showBrowser ${className}`}
        style={{ left: "4px", overflowX: "hidden" }}
      >
        {/* Wine Image */}
        {localQrData?.wine_image && (
          <div className="beer-header">
            <DynamicImage
              data={localQrData}
              imageKey="wine_image"
              altText="Wine Image"
              className="beer-image"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                borderRadius: "12px 12px 12px 12px",
              }}
            />
          </div>
        )}

        <div className="beer-content">
          {/* Grape Variety */}
          {localQrData?.grape_variety && (
            <h2 className="beer-product-name">
              <FaWineGlassAlt className="icon-beer" />
              {localQrData.grape_variety || "Grape Variety"}
            </h2>
          )}

          <div className="beer-details">
            {/* Alcohol Percentage */}
            {localQrData?.alcohol_percentage && (
              <p>
                <strong>Alcohol Percentage:</strong>{" "}
                {localQrData.alcohol_percentage || "0"}%
              </p>
            )}

            {/* Task Notes */}
            {localQrData?.task_notes && (
              <p>
                <strong>Task Notes:</strong> {localQrData.task_notes || "N/A"}
              </p>
            )}
          </div>

          {/* Website */}
          {localQrData?.website && (
            <p className="beer-website">
              <FaGlobe className="icon-globe" />
              <strong>Website:</strong>{" "}
              <a
                href={localQrData.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {localQrData.website}
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Show Review Section */}
      {showReview &&
        (localQrData?.is_question === "true" ||
          localQrData?.is_rating === "true") && (
          <div className="review-container">
            <AccordianComponent title="📝 Share Your Feedback">
              <ReviewFormSubmit
                questions={localQrData?.questions}
                qrCodeObj={localQrData}
              />
            </AccordianComponent>
          </div>
        )}
    </>
  );
};

export const QRPreviewElabelsBeer = ({
  localQrData,
  className,
  showReview,
}) => {
  console.log("localQrDatamm",localQrData)
  return (
    <>
      <div
        className={`beer-container layout-content showBrowser ${className}`}
        style={{ left: "4px", overflowX: "hidden" }}
      >
        <div className="beer-header">
          {localQrData?.beer_image && (
            <DynamicImage
              data={localQrData}
              imageKey="beer_image"
              altText="Beer Image"
              className="beer-image"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                borderRadius: "12px 12px 0 0",
              }}
            />
          )}
        </div>
        <div className="beer-content">
          {localQrData?.product_name && (
            <h2 className="beer-product-name">
              <FaBeer className="icon-beer" />
              {localQrData.product_name}
            </h2>
          )}
          {localQrData?.sku && (
            <p className="beer-sku">
              <FaInfoCircle className="icon-info" />
              SKU: <span>{localQrData.sku}</span>
            </p>
          )}
          {localQrData?.description && (
            <p className="beer-description">{localQrData.description}</p>
          )}
          <div className="beer-details">
            {(localQrData?.alcohol_percentage &&
              localQrData?.alcohol_percentage !== 0) && (
              <p>
                <strong>Alcohol Percentage:</strong>{" "}
                {localQrData.alcohol_percentage}%
              </p>
            )}
            {localQrData?.ipa && (
              <p>
                <strong>IPA:</strong> {localQrData.ipa}
              </p>
            )}
            {localQrData?.brewed && (
              <p>
                <strong>Brewed At:</strong> {localQrData.brewed}
              </p>
            )}
          </div>
          {localQrData?.website && (
            <p className="beer-website">
              <FaGlobe className="icon-globe" />
              <strong>Website:</strong>{" "}
              <a
                href={localQrData.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {localQrData.website}
              </a>
            </p>
          )}
        </div>
        {localQrData?.nutrition_image && (
          <footer className="beer-footer">
            <DynamicImage
              data={localQrData}
              imageKey="nutrition_image"
              altText="Nutrition Information"
              className="nutrition-image"
              style={{
                width: "100%",
                height: "120px",
                objectFit: "contain",
                borderRadius: "12px 12px 12px 12px",
              }}
            />
          </footer>
        )}
      </div>
      {showReview && (
        <div className="review-container">
          <AccordianComponent title="📝 Share Your Feedback">
            <ReviewFormSubmit questions={localQrData?.questions} />
          </AccordianComponent>
        </div>
      )}
    </>
  );
};

export const QRPreviewElabelsCigar = ({
  localQrData,
  className,
  showReview,
}) => {
  return (
    <>
      <div
        className={`beer-container layout-content showBrowser ${className}`}
        style={{ left: "4px", overflowX: "hidden" }}
      >
        <div className="beer-header">
          {localQrData?.cigar_image && (
            <DynamicImage
              data={localQrData}
              imageKey="cigar_image"
              altText="Cigar Image"
              className="beer-image"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                borderRadius: "12px 12px 12px 12px",
              }}
            />
          )}
        </div>
        <div className="beer-content">
          {localQrData?.product_name && (
            <h2 className="beer-product-name">
              <PiCigaretteBold className="icon-beer" />
              {localQrData.product_name}
            </h2>
          )}
          {localQrData?.sku && (
            <p className="beer-sku">
              <FaInfoCircle className="icon-info" />
              SKU: <span>{localQrData.sku}</span>
            </p>
          )}
          {localQrData?.description && (
            <p className="beer-description">{localQrData.description}</p>
          )}
          <div className="beer-details">
            {localQrData?.where_it_is_made && (
              <p>
                <strong>Where It's Made:</strong> {localQrData.where_it_is_made}
              </p>
            )}
            {localQrData?.size && (
              <p>
                <strong>Size:</strong> {localQrData.size}
              </p>
            )}
            {localQrData?.wrapper && (
              <p>
                <strong>Wrapper:</strong> {localQrData.wrapper}
              </p>
            )}
            {localQrData?.binder && (
              <p>
                <strong>Binder:</strong> {localQrData.binder}
              </p>
            )}
            {localQrData?.filler && (
              <p>
                <strong>Filler:</strong> {localQrData.filler}
              </p>
            )}
            {localQrData?.strength && (
              <p>
                <strong>Strength:</strong> {localQrData.strength}
              </p>
            )}
            {localQrData?.body && (
              <p>
                <strong>Body:</strong> {localQrData.body}
              </p>
            )}
            {localQrData?.flavour_profile && (
              <p>
                <strong>Flavour Profile:</strong> {localQrData.flavour_profile}
              </p>
            )}
            {localQrData?.best_paired_with && (
              <p>
                <strong>Best Paired With:</strong>{" "}
                {localQrData.best_paired_with}
              </p>
            )}
          </div>
          {localQrData?.website && (
            <p className="beer-website">
              <FaGlobe className="icon-globe" />
              <strong>Website:</strong>{" "}
              <a
                href={localQrData.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {localQrData.website}
              </a>
            </p>
          )}
        </div>
      </div>
      {showReview && (
        <div className="review-container">
          <AccordianComponent title="📝 Share Your Feedback">
            <ReviewFormSubmit questions={localQrData?.questions} />
          </AccordianComponent>
        </div>
      )}
    </>
  );
};

export const QRPreviewElabelsCoffee = ({
  localQrData,
  className,
  showReview,
}) => {
  return (
    <>
      <div
        className={`beer-container layout-content showBrowser ${className}`}
        style={{ left: "4px", overflowX: "hidden" }}
      >
        <div className="beer-header">
          {localQrData.coffee_image && (
            <DynamicImage
              data={localQrData}
              imageKey="coffee_image"
              altText="Coffee Image"
              className="beer-image"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                borderRadius: "12px 12px 12px 12px",
              }}
            />
          )}
        </div>
        <div className="beer-content">
          {localQrData.product_name && (
            <h2 className="beer-product-name">
              <FaCoffee className="icon-coffee" />
              {localQrData.product_name}
            </h2>
          )}

          {localQrData.sku && (
            <p className="beer-sku">
              <FaInfoCircle className="icon-info" />
              SKU: <span>{localQrData.sku}</span>
            </p>
          )}

          {localQrData.description && (
            <p className="beer-description">{localQrData.description}</p>
          )}

          <div className="beer-details">
            {localQrData.origin && (
              <p>
                <strong>Origin:</strong> {localQrData.origin}
              </p>
            )}
            {localQrData.farm && (
              <p>
                <strong>Farm:</strong> {localQrData.farm}
              </p>
            )}
            {localQrData.altitude && (
              <p>
                <strong>Altitude:</strong> {localQrData.altitude} m
              </p>
            )}
            {localQrData.roast && (
              <p>
                <strong>Roast:</strong> {localQrData.roast}
              </p>
            )}
            {localQrData.flavour && (
              <p>
                <strong>Flavour:</strong> {localQrData.flavour}
              </p>
            )}
          </div>

          {localQrData.task_notes && (
            <p className="beer-task-notes">
              <strong>Task Notes:</strong> {localQrData.task_notes}
            </p>
          )}

          {localQrData.ingredients && (
            <p className="beer-ingredients">
              <strong>Ingredients:</strong> {localQrData.ingredients}
            </p>
          )}

          {localQrData.website && (
            <p className="beer-website">
              <FaGlobe className="icon-globe" />
              <strong>Website:</strong>{" "}
              <a
                href={localQrData.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {localQrData.website}
              </a>
            </p>
          )}

          {localQrData.storage && (
            <div className="beer-storage">
              <p>
                <strong>Storage:</strong> {localQrData.storage}
              </p>
            </div>
          )}

          <div className="beer-certifications">
            {localQrData.organic !== false && (
              <p>
                <strong>Organic:</strong>{" "}
                {localQrData.organic ? (
                  <FaCheck style={{ color: "green" }} />
                ) : (
                  <FaTimes style={{ color: "red" }} />
                )}
              </p>
            )}
            {localQrData.free_trade !== false && (
              <p>
                <strong>Fare Trade:</strong>{" "}
                {localQrData.free_trade ? (
                  <FaCheck style={{ color: "green" }} />
                ) : (
                  <FaTimes style={{ color: "red" }} />
                )}
              </p>
            )}
          </div>
        </div>

        {localQrData.nutrition_image && (
          <footer className="beer-footer">
            <DynamicImage
              data={localQrData}
              imageKey="nutrition_image"
              altText="Nutrition Information"
              className="nutrition-image"
              style={{
                width: "100%",
                height: "120px",
                objectFit: "contain",
                borderRadius: "12px 12px 12px 12px",
              }}
            />
          </footer>
        )}
      </div>

      {showReview && (
        <div className="review-container">
          <AccordianComponent title="📝 Share Your Feedback">
            <ReviewFormSubmit questions={localQrData?.questions} />
          </AccordianComponent>
        </div>
      )}
    </>
  );
};

export const QRPreviewElabelsFood = ({
  localQrData,
  className,
  showReview,
}) => {
  return (
    <>
      <div
        className={`beer-container layout-content showBrowser ${className}`}
        style={{ left: "4px", overflowX: "hidden" }}
      >
        <div className="beer-header">
          {localQrData.food_image && (
            <DynamicImage
              data={localQrData}
              imageKey="food_image"
              altText="Food Image"
              className="beer-image"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                borderRadius: "12px 12px 12px 12px",
              }}
            />
          )}
        </div>
        <div className="beer-content">
          {localQrData.product_name && (
            <h2 className="beer-product-name">
              <FaUtensils className="icon-utensils" />
              {localQrData.product_name}
            </h2>
          )}

          {localQrData.cuisine && (
            <p className="beer-sku">
              <FaInfoCircle className="icon-info" />
              Cuisine: <span>{localQrData.cuisine}</span>
            </p>
          )}

          {localQrData.ingredients && (
            <p className="beer-description">
              <strong>Ingredients:</strong> {localQrData.ingredients}
            </p>
          )}

          {localQrData.size && (
            <p className="beer-description">
              <strong>Serving Size:</strong> {localQrData.size}
            </p>
          )}

          {localQrData.clories && (
            <p className="beer-description">
              <strong>Calories:</strong> {localQrData.clories}
            </p>
          )}

          {localQrData.website && (
            <p className="beer-website">
              <FaGlobe className="icon-globe" />
              <strong>Website:</strong>{" "}
              <a
                href={localQrData.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {localQrData.website}
              </a>
            </p>
          )}
        </div>
      </div>

      {showReview && (
        <div className="review-container">
          <AccordianComponent title="📝 Share Your Feedback">
            <ReviewFormSubmit questions={localQrData?.questions} />
          </AccordianComponent>
        </div>
      )}
    </>
  );
};

export const QRPreviewElabelsProduct = ({
  localQrData,
  className,
  showReview,
}) => {
  return (
    <>
      <div
        className={`beer-container layout-content showBrowser ${className}`}
        style={{ left: "4px", overflowX: "hidden" }}
      >
        <div className="beer-header">
          {localQrData.product_image && (
            <DynamicImage
              data={localQrData}
              imageKey="product_image"
              altText="Product Image"
              className="beer-image"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                borderRadius: "12px 12px 12px 12px",
              }}
            />
          )}
        </div>
        <div className="beer-content">
          {localQrData.product_name && (
            <h2 className="beer-product-name">
              <FaTag className="icon-tag" />
              {localQrData.product_name}
            </h2>
          )}

          {localQrData.sku && (
            <p className="beer-sku">
              <FaInfoCircle className="icon-info" />
              SKU: <span>{localQrData.sku}</span>
            </p>
          )}

          {localQrData.description && (
            <p className="beer-description">{localQrData.description}</p>
          )}

          {localQrData.directions && (
            <p className="beer-description">
              <strong>Directions:</strong> {localQrData.directions}
            </p>
          )}

          {localQrData.brand && (
            <p className="beer-description">
              <strong>Brand:</strong> {localQrData.brand}
            </p>
          )}

          {localQrData.category && (
            <p className="beer-description">
              <strong>Category:</strong> {localQrData.category}
            </p>
          )}

          {localQrData.price && (
            <p className="beer-description">
              <strong>Price:</strong> ${localQrData.price}
            </p>
          )}

          {localQrData.warning && (
            <p className="beer-warning">
              <FaExclamationCircle className="icon-warning" />
              <strong>Warning:</strong> {localQrData.warning}
            </p>
          )}
        </div>
      </div>

      {showReview && (
        <div className="review-container">
          <AccordianComponent title="📝 Share Your Feedback">
            <ReviewFormSubmit questions={localQrData?.questions} />
          </AccordianComponent>
        </div>
      )}
    </>
  );
};
