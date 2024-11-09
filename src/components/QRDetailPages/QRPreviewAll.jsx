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
import { IoMdPersonAdd } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsFillTelephonePlusFill } from "react-icons/bs";
import { FaBuilding, FaFax } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { TbBriefcase2Filled } from "react-icons/tb";
import { GoClockFill } from "react-icons/go";

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

const DynamicImage = ({ data, imageKey, altText, style }) => {
  // Function to determine the image URL based on the input
  const getImageUrl = (source, key) => {
    if (!source || !key) return null;
    const image = source[key];
    return source?.id
      ? image
      : image instanceof File
      ? URL.createObjectURL(image)
      : image;
  };

  const imageUrl = getImageUrl(data, imageKey);

  return (
    imageUrl && (
      <div className="websiteLogo">
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
        <p style={{ fontWeight: "700", wordBreak: "break-all", margin: "0" }}>
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
          style={{ width: "40px", height: "40px", objectFit: "contain" }}
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
      <img src="/assets/images/URLPreview.avif" alt="URLPreview" />
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
      style={{ backgroundColor: localQrData?.color?.background }}
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
  return (
    <div
      className="layout-content showBrowser "
      style={{ backgroundColor: localQrData?.color?.background }}
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
              width: "100%",
              padding: "16px",
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
                      fontSize: "14px",
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
                    lineHeight: "16px",
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
      <div
        style={{ backgroundColor: localQrData?.color?.button, height: "60px" }}
      />
      <DynamicImage
        data={localQrData}
        imageKey="app_logo"
        altText="App Logo"
        style={{
          maxWidth: "300px",
          height: "120px",
          objectFit: "contain",
          marginTop: "-50px",
          marginBottom: "16px",
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
        >
          {localQrData?.app_website}
        </a>
      </div>
    </div>
  );
};

export const QRPreviewVideo = ({ localQrData }) => {
  const videoUrl =
    localQrData?.video_path instanceof File
      ? URL.createObjectURL(localQrData.video_path)
      : typeof localQrData?.video_path === "string" &&
        localQrData?.video_path.trim() !== ""
      ? localQrData.video_path
      : null;
  return (
    <div
      className="layout-content showBrowser "
      style={{
        backgroundColor: localQrData?.color?.background,
        minHeight: "100%",
        left: "0px",
      }}
    >
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
      {localQrData?.video_path && (
        <div
          style={{
            width: "90%",
            maxWidth: "300px",
            height: "auto",
            aspectRatio: "16 / 9",
            marginInline: "auto",
            marginBottom: "20px",
            position: "relative",
            background: "#f2f2f2",
            marginTop: "16px",
          }}
        >
          <video
            src={videoUrl || localQrData?.video_path}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "4px",
              position: "absolute",
              top: 0,
              left: 0,
              padding: "10px",
            }}
            controls
          />
        </div>
      )}

      {localQrData?.video_social &&
        Object.keys(localQrData?.video_social).length > 0 && (
          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              marginTop: "16px",
            }}
          >
            <SocialMediaLinks
              socialLinks={localQrData?.video_social}
              icons={icons}
            />
          </div>
        )}
    </div>
  );
};

export const QRPreviewLinks = ({ localQrData }) => {
  console.log("localQrData", localQrData);

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
        imageKey="links_image"
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
        {localQrData?.all_links?.map((link, index) => (
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
                src={link?.link_image}
                // src={URL.createObjectURL(link?.image)}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
            )}
            {console.log("link?.link_image", link)}
            {/* Optional: Set image size */}
            <h6 style={{ margin: "0" }}>{link?.text}</h6>
          </Link>
        ))}
      </div>

      <SocialMediaLinks socialLinks={localQrData?.links_social} icons={icons} />
    </div>
  );
};
