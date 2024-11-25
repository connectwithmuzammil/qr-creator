import { useState } from "react";
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
import {
  FaBuilding,
  FaFax,
  FaGoogle,
  FaCalendarAlt,
  FaYahoo,
  FaCalendarPlus,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoGlobeOutline, IoPeopleCircle } from "react-icons/io5";
import { TbBriefcase2Filled } from "react-icons/tb";
import { GoClockFill } from "react-icons/go";
import { LuExternalLink } from "react-icons/lu";
import formatDate from "../../utils/FormatDate.js";
import { CiCalendar } from "react-icons/ci";

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

export const QRYOUTUBE = ({ qrContent }) => {
  console.log("qrcontent0", qrContent);
  // Extract the video ID from the short URL
  const videoId = qrContent?.youtube_url.split("v=")[1]?.split("&")[0];
  console.log("videoId", videoId); // "0Yxf4hY8zjI"

  // Create the embed URL
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f2cfba",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          position: "relative",
          paddingBottom: "40%", // Change to 40% for a smaller aspect ratio
          height: 0,
        }}
      >
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
        ></iframe>
      </div>
    </div>
  );
};

export const QRPDF = ({ qrContent }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: qrContent?.color?.background,
        flexDirection: "column",
        marginBottom: "6px",
        padding: "0 20px", // Added padding for small screens
      }}
    >
      <h6 style={{ textAlign: "center" }}>{qrContent?.pdf_company}</h6>
      <div
        className="wrapp"
        style={{
          maxHeight: "80vh", // Set a max height for responsiveness
          width: "100%",
          maxWidth: "700px",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "12px",
          padding: "20px", // Added padding for better spacing
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Optional shadow for aesthetics
          borderRadius: "8px", // Optional rounded corners
        }}
      >
        <h5 style={{ textAlign: "center" }}>{qrContent?.pdf_title}</h5>
        <h6 style={{ textAlign: "center" }}>{qrContent?.pdf_description}</h6>

        <div
          style={{
            marginTop: "8px",
            marginBottom: "8px",
            width: "100%", // Set to 100% for responsiveness
            maxWidth: "600px", // Max width for iframe
            height: "auto",
            aspectRatio: "1.6 / 1", // Maintain a 16:10 aspect ratio for the iframe
          }}
        >
          <iframe
            src={qrContent?.outcome}
            width="100%"
            height="100%"
            style={{ border: "none", borderRadius: "4px" }} // Added border radius for aesthetics
            title="PDF Viewer"
          />
        </div>

        <button
          style={{
            background: qrContent?.color?.button,
            width: "100%", // Set to 100% for responsiveness
            maxWidth: "230px", // Max width for the button
            height: "34px",
            borderRadius: "4px",
            outline: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer", // Change cursor to pointer
            transition: "background 0.3s", // Smooth background transition
          }}
        >
          <Link
            to={qrContent?.outcome}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#fff",
              display: "block",
              height: "100%",
            }} // Ensure link covers the button
          >
            See PDF
          </Link>
        </button>
      </div>
      <Link
        style={{
          color: qrContent?.color?.button,
          textDecoration: "none",
          marginTop: "12px", // Added margin for spacing
        }}
        to={qrContent?.pdf_website}
        target="_blank"
      >
        {qrContent?.pdf_website}
      </Link>
    </div>
  );
};

export const QRVIDEO = ({ qrContent }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: qrContent?.color?.background,
        flexDirection: "column",
        padding: "0 20px", // Added padding for small screens
      }}
    >
      <h5 style={{ textAlign: "center" }}>{qrContent?.video_name}</h5>
      <h5 style={{ textAlign: "center" }}>{qrContent?.video_title}</h5>
      <h6 style={{ textAlign: "center", marginBottom: "12px" }}>
        {qrContent?.video_description}
      </h6>

      <button
        style={{
          background: qrContent?.color?.button,
          width: "100%", // Set to 100% for responsiveness
          maxWidth: "630px", // Max width for the button
          height: "34px",
          borderRadius: "4px",
          outline: "none",
          border: "none",
          color: "#fff",
          marginTop: "12px",
          marginBottom: "16px",
          cursor: "pointer", // Change cursor to pointer
        }}
      >
        <Link
          to={qrContent?.video_url}
          target="_blank"
          style={{
            textDecoration: "none",
            color: "#fff",
            display: "block",
            height: "100%",
          }} // Ensure link covers the button
        >
          {qrContent?.video_button}
        </Link>
      </button>

      <div
        style={{
          width: "100%",
          maxWidth: "630px",
          height: "auto", // Set height to auto
          aspectRatio: "16 / 9", // Maintain a 16:9 aspect ratio for the video
          marginBottom: "20px",
          position: "relative", // For absolute positioning of video
        }}
      >
        <video
          src={qrContent?.video_path}
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "12px",
          width: "100%",
          maxWidth: "630px", // Max width for social icons container
        }}
      >
        {Object.entries(qrContent?.video_social).map(([key, url]) => {
          return (
            <a key={key} href={url} target="_blank" rel="noopener noreferrer">
              {icons[key] || null}
            </a>
          );
        })}
      </div>
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

export const QRVCARD = ({ qrContent }) => {
  const handleDownloadVCard = () => {
    const vCardContent = createVCardContent({
      fullName: qrContent?.vcard_full_name || "Default Name",
      mobile: qrContent?.vcard_landline_phone || "12345678",
      email: qrContent?.vcard_email || "default@example.com",
      address: qrContent?.vcard_address || "Default Address",
      imageUrl: qrContent?.vcard_image,
    });

    const blob = new Blob([vCardContent], { type: "text/vcf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "vcard.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 auto",
        padding: "40px 20px", // Adjusted for mobile
        maxWidth: "700px",
        width: "100%", // Full width on small screens
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "8px",
          background: qrContent?.color?.background,
          width: "100%",
          padding: "16px 0",
          borderRadius: "8px", // Added rounded corners for aesthetics
        }}
      >
        <img
          src={qrContent?.vcard_image}
          alt={"vcard"}
          width={100}
          style={{ borderRadius: "50%" }} // Circle image
        />
        <h5 style={{ fontSize: "1.2em", margin: "8px 0" }}>
          {qrContent?.vcard_full_name}
        </h5>
        <h6 style={{ fontSize: "1em", margin: "0" }}>
          {qrContent?.vcard_profession}
        </h6>
      </div>

      <button
        style={{
          background: qrContent?.color?.button,
          width: "100%", // Full width for mobile
          maxWidth: "200px", // Max width for larger screens
          height: "40px",
          borderRadius: "4px",
          outline: "none",
          border: "none",
          color: "#fff",
          marginTop: "12px",
          marginBottom: "16px",
        }}
        onClick={handleDownloadVCard}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
          }}
        >
          <IoMdPersonAdd />
          Add to contact
        </div>
      </button>

      <div
        style={{
          borderTop: "1px solid #bfbfbf",
          width: "100%",
          paddingTop: "12px",
        }}
      >
        {[
          {
            icon: <MdEmail />,
            label: "Email",
            value: qrContent?.vcard_email,
            type: "mailto",
          },
          {
            icon: <BsFillTelephoneFill />,
            label: "Mobile Phone",
            value: qrContent?.vcard_mobile_phone,
            type: "tel",
          },
          {
            icon: <BsFillTelephonePlusFill />,
            label: "Alternative Phone Number",
            value: qrContent?.vcard_landline_phone,
            type: "tel",
          },
          {
            icon: <FaFax />,
            label: "Fax",
            value: qrContent?.vcard_fax,
            type: "tel",
          },
          {
            icon: <FaLocationDot />,
            label: "Location",
            value: qrContent?.vcard_address,
            type: "map",
          },
          {
            icon: <IoGlobeOutline />,
            label: "Website",
            value: qrContent?.vcard_website,
            type: "url",
          },
          {
            icon: <FaBuilding />,
            label: "Company Name",
            value: qrContent?.vcard_company_name,
          },
          {
            icon: <TbBriefcase2Filled />,
            label: "Profession",
            value: qrContent?.vcard_profession,
          },
        ].map(({ icon, label, value, type }, index) => (
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
            <div>
              <p style={{ margin: "0", color: "#8c8c8c", fontSize: "12px" }}>
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
        ))}
      </div>

      <div
        style={{
          borderTop: "1px solid #bfbfbf",
          borderBottom: "1px solid #bfbfbf",
          width: "100%",
          padding: "12px 0",
          textAlign: "center",
        }}
      >
        {qrContent?.vcard_summary}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "12px",
          width: "100%",
          paddingBottom: "40px",
          paddingTop: "20px",
        }}
      >
        {Object.entries(qrContent?.vcard_social).map(([key, url]) => (
          <a key={key} href={url} target="_blank" rel="noopener noreferrer">
            {icons[key] || null}
          </a>
        ))}
      </div>
    </div>
  );
};

export const QRBUSINESS = ({ qrContent }) => {
  return (
    <div
      style={{
        background: qrContent?.color?.background,
        padding: "30px 0",
      }}
    >
      <div
        className="wrapp"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "0 20px", // Added padding for smaller screens
        }}
      >
        <h5 style={{ textAlign: "center" }}>{qrContent?.business_company}</h5>
        <img
          src={qrContent?.business_logo}
          alt="business_logo"
          width={100}
          height={100}
          style={{ borderRadius: "50%", objectFit: "cover" }} // Changed to borderRadius: "50%"
          loading="lazy"
        />
        <div
          className="company-info"
          style={{
            backgroundColor: "#fff",
            width: "100%", // Full width for responsiveness
            padding: "16px",
            textAlign: "center",
            borderRadius: "8px", // Optional: rounded corners
          }}
        >
          <h6>{qrContent?.business_title}</h6>
          <h6>{qrContent?.business_subtitle}</h6>
        </div>

        <button
          style={{
            background: qrContent?.color?.button,
            width: "100%",
            height: "40px",
            borderRadius: "4px",
            border: "none",
            color: "#fff",
            marginTop: "12px",
            marginBottom: "16px",
            cursor: "pointer", // Added for better UX
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
              display: "block", // Ensures full height clickable area
            }}
            to={qrContent?.business_url}
            target="_blank"
          >
            {qrContent?.business_btn_text || "BUSINESS URL"}
          </Link>
        </button>

        <div
          className="opening-hour"
          style={{
            background: "#fff",
            width: "100%",
            padding: "16px",
            borderRadius: "8px",
          }} // Border radius for better appearance
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

          {qrContent?.opening_hours_days &&
            Object.entries(qrContent.opening_hours_days).map(
              ([day, schedule]) =>
                schedule.enabled === "true" && (
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
                `${qrContent?.business_address} ${qrContent?.business_numeration}, ${qrContent?.business_country}, ${qrContent?.business_state}, ${qrContent?.business_postalcode}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                fontSize: "12px",
                color: "#307fe2",
              }}
            >
              {qrContent?.business_address}, {qrContent?.business_numeration},{" "}
              {qrContent?.business_country}, Zip Code:{" "}
              {qrContent?.business_postalcode}, {qrContent?.business_state}
            </a>
          </div>
        </div>

        <div
          className="facilities-con"
          style={{
            background: "#fff",
            padding: "16px",
            width: "100%",
            borderRadius: "8px",
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
            {Object.entries(qrContent?.business_facilities).map(
              ([key, url]) => {
                return <div key={key}>{FacilitiesIcon[key] || null}</div>;
              }
            )}
          </div>
        </div>

        <div
          className="contact-info"
          style={{
            background: "#fff",
            width: "100%",
            padding: "16px",
            borderRadius: "8px",
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
                {qrContent?.business_name}
              </h6>
            </div>

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
                href={`tel:${qrContent?.business_phone}`}
                style={{
                  fontSize: "12px",
                  margin: "0",
                  textDecoration: "none",
                }}
              >
                {qrContent?.business_phone}
              </a>
            </div>

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
                href={`mailto:${qrContent?.business_email}`}
                style={{
                  fontSize: "12px",
                  margin: "0",
                  textDecoration: "none",
                }}
              >
                {qrContent?.business_email}
              </a>
            </div>

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
                href={qrContent?.business_website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px",
                  margin: "0",
                  textDecoration: "none",
                }}
              >
                {qrContent?.business_website}
              </a>
            </div>
          </div>
        </div>

        <div
          className="about-company"
          style={{
            background: "#fff",
            width: "100%",
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <h5>About Company</h5>
          <p style={{ fontSize: "12px", color: "#8c8c8c" }}>
            {qrContent?.business_about || qrContent?.business_description}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: "12px",
            width: "100%",
            maxWidth: "700px",
          }}
        >
          {Object.entries(qrContent?.business_social).map(([key, url]) => {
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
                  color: "#000",
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
    </div>
  );
};

export const QRSOCIAL = ({ qrContent }) => {
  return (
    <div
      style={{
        paddingTop: "30px",
        paddingBottom: "30px",
        paddingInline: "16px", // Add horizontal padding for spacing on left and right
        width: "100%", // Set to 100% for responsiveness
        maxWidth: "700px", // Maximum width for the container
        marginInline: "auto",
        height: "100vh",
      }}
    >
      <div
        className="wrapp"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          background: qrContent?.color?.background,
          padding: "16px",
          marginBottom: "16px",
          borderRadius: "8px", // Added border-radius for aesthetics
        }}
      >
        <img
          src={qrContent?.image_path}
          alt="social"
          style={{
            width: "100%", // Set to 100% for responsiveness
            maxWidth: "250px", // Max width for the image
            height: "auto", // Maintain aspect ratio
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
        <h5 style={{ margin: "0", textAlign: "center" }}>
          {qrContent?.media_headline}
        </h5>
        <h6 style={{ margin: "0", fontSize: "14px", textAlign: "center" }}>
          {qrContent?.media_description}
        </h6>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "12px",
          width: "100%", // Set to 100% for responsiveness
          maxWidth: "700px", // Max width for social links container
        }}
      >
        {Object.entries(qrContent?.media_social).map(([key, url]) => {
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

export const QRAPPS = ({ qrContent }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: qrContent?.color?.background,
        flexDirection: "column",
        gap: "25px",
        padding: "0 16px", // Add horizontal padding for small screens
      }}
    >
      <div
        className="box1"
        style={{
          width: "100%", // Set to 100% for responsiveness
          maxWidth: "700px", // Max width for the box
          marginInline: "auto",
          background: qrContent?.color?.button,
          height: "62px",
          borderRadius: "8px", // Optional: for aesthetics
        }}
      >
        <div
          className="img-con"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <img
            src={qrContent?.image_path}
            alt="app img"
            style={{
              width: "96px",
              height: "96px",
              borderRadius: "12px",
            }}
          />
        </div>
      </div>
      <div className="text" style={{ marginTop: "60px", textAlign: "center" }}>
        <h5>{qrContent?.app_name}</h5>
        <h6>{qrContent?.app_company}</h6>
        <h6>{qrContent?.app_description}</h6>
      </div>
      <div
        className="box"
        style={{
          width: "100%", // Set to 100% for responsiveness
          maxWidth: "700px", // Max width for the box
          marginInline: "auto",
          background: qrContent?.color?.button,
          padding: "25px",
          borderRadius: "8px", // Optional: for aesthetics
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          {Object.entries(qrContent?.app_social).map(([key, url]) => {
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center" }} // Added display property for alignment
              >
                {iconsApps[key] || null}
              </a>
            );
          })}
        </div>
      </div>
      <a
        href={qrContent?.app_website}
        target="_blank"
        style={{ textDecoration: "none", color: "#000" }} // Added color for visibility
      >
        {qrContent?.app_website}
      </a>
    </div>
  );
};

export const QRLINK = ({ qrContent }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: qrContent?.color?.background,
        flexDirection: "column",
        gap: "25px",
        paddingTop: "40px",
        paddingBottom: "30px",
        padding: "0 16px", // Add horizontal padding for small screens
      }}
    >
      <img
        src={qrContent?.image_path}
        alt="link"
        style={{ width: "100%", maxWidth: "300px", objectFit: "cover" }} // Responsive image
      />
      <div className="text" style={{ textAlign: "center" }}>
        <h5>{qrContent?.links_title}</h5>
        <h6>{qrContent?.links_description}</h6>
      </div>

      <div
        className="linkbox-con"
        style={{
          width: "100%", // Set to 100% for responsiveness
          maxWidth: "700px", // Max width for the container
          display: "flex",
          gap: "12px",
          flexDirection: "column",
        }}
      >
        {qrContent?.all_links?.map((link, index) => (
          <Link
            key={index} // Ensure a unique key for each link
            className="linkbox"
            style={{
              background: qrContent?.color?.button,
              width: "100%", // Set to 100% for responsiveness
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              padding: "12px",
              borderRadius: "6px",
              color: "#fff",
              textDecoration: "none",
              gap: "12px", // Adjust gap for better spacing
            }}
            to={link?.url}
            target="_blank"
          >
            <img
              src={link?.link_image}
              alt=""
              style={{ width: "24px", height: "24px" }}
            />{" "}
            {/* Optional: Set image size */}
            <h6 style={{ margin: "0" }}>{link?.text}</h6>
          </Link>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          width: "100%", // Set to 100% for responsiveness
          maxWidth: "700px", // Max width for the social links container
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Object.entries(qrContent?.links_social).map(([key, url]) => {
          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{}}
            >
              {icons[key] || null}
            </a>
          );
        })}
      </div>
      <a
        href={qrContent?.app_website}
        target="_blank"
        style={{ textDecoration: "none", color: "#000" }} // Added color for visibility
      >
        {qrContent?.app_website}
      </a>
    </div>
  );
};

export const QRGALLERY = ({ qrContent }) => {
  console.log("qrcontent",qrContent)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: qrContent?.color?.background,
        flexDirection: "column",
        gap: "25px",
        paddingTop: "40px",
        paddingBottom: "30px",
        padding: "0 16px", // Horizontal padding for small screens
      }}
    >
      <div className="text" style={{ textAlign: "center" }}>
        <h5>{qrContent?.gallery_title}</h5>
        <h6>{qrContent?.gallery_description}</h6>
      </div>
      <div
        className="box"
        style={{
          background: "#fff",
          textAlign: "center",
          padding: "16px",
          width: "100%", // Set to 100% for responsiveness
          maxWidth: "700px", // Max width for larger screens
          borderRadius: "8px", // Optional: add rounded corners
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: add a subtle shadow
        }}
      >
        <div
          className="box-wrap"
          style={{
            width: "100%", // Responsive width
            maxWidth: "300px", // Limit for larger screens
            background: qrContent?.color?.button,
            padding: "16px",
            margin: "0 auto",
            borderRadius: "6px", // Optional: add rounded corners
          }}
        >
          <img
            src={qrContent?.image_path}
            alt="gallery"
            style={{
              width: "100%", // Responsive image
              maxWidth: "300px",
              objectFit: "cover",
              borderRadius: "6px",
              height: "auto", // Allow for responsive height
            }}
          />
        </div>
        <button
          style={{
            background: qrContent?.color?.button,
            width: "90%", // Responsive width
            maxWidth: "300px",
            height: "42px",
            borderRadius: "4px",
            outline: "none",
            border: "none",
            color: "#fff",
            marginTop: "12px",
            marginBottom: "16px",
          }}
        >
          <Link
            to={qrContent?.gallery_url}
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            {qrContent?.gallery_btn_text || "Gallery"}
          </Link>
        </button>
      </div>

      <a
        href={qrContent?.gallery_website}
        target="_blank"
        style={{ textDecoration: "none", marginTop: "16px" }}
      >
        {qrContent?.gallery_website}
      </a>
    </div>
  );
};

export const QRLANDING = ({ qrContent }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: qrContent?.color?.background,
        flexDirection: "column",
        gap: "25px",
        paddingTop: "40px",
        paddingBottom: "40px",
        padding: "0 16px", // Horizontal padding for smaller screens
      }}
    >
      <h6 style={{ textAlign: "center" }}>{qrContent?.landing_company}</h6>
      <img
        src={qrContent?.landing_logo}
        alt=""
        style={{
          width: "100%", // Responsive width
          maxWidth: "300px",
          objectFit: "cover",
          height: "auto", // Responsive height
          position: "relative",
          zIndex: "10",
        }}
      />
      <div
        className="box"
        style={{
          background: "#fff",
          width: "100%", // Responsive width
          maxWidth: "700px", // Limit for larger screens
          padding: "16px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
          borderRadius: "8px", // Optional: rounded corners for better appearance
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: subtle shadow
        }}
      >
        <h6 style={{ fontWeight: "600" }}>{qrContent?.landing_title}</h6>
        <h6>{qrContent?.landing_subtitle}</h6>

        <button
          style={{
            background: qrContent?.color?.button,
            width: "90%", // Responsive width
            maxWidth: "300px", // Limit for larger screens
            height: "42px",
            borderRadius: "4px",
            outline: "none",
            border: "none",
            color: "#fff",
          }}
        >
          <Link
            to={qrContent?.landing_action_url}
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            {qrContent?.landing_btn_text || "landing"}
          </Link>
        </button>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            width: "100%", // Responsive width
            maxWidth: "700px", // Limit for larger screens
            justifyContent: "center",
            marginTop: "12px",
          }}
        >
          {Object.entries(qrContent?.landing_social).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#333" }} // Optional: icon color for visibility
            >
              {icons[key] || null}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export const QREVENT = ({ qrContent }) => {
  console.log("qrContent", qrContent);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const calendarUrls = {
    iCal: `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
      qrContent.event_title
    )}&dates=${qrContent.event_time_start}/${
      qrContent.event_time_end
    }&details=${encodeURIComponent(
      qrContent.event_description
    )}&location=${encodeURIComponent(qrContent.event_location_address)}`,
    Google: `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
      qrContent.event_title
    )}&dates=${qrContent.event_time_start}/${
      qrContent.event_time_end
    }&details=${encodeURIComponent(
      qrContent.event_description
    )}&location=${encodeURIComponent(qrContent.event_location_address)}`,
    Outlook: `https://outlook.live.com/owa/?path=/calendar/action/compose&subject=${encodeURIComponent(
      qrContent.event_title
    )}&startdt=${qrContent.event_time_start}&enddt=${
      qrContent.event_time_end
    }&body=${encodeURIComponent(
      qrContent.event_description
    )}&location=${encodeURIComponent(qrContent.event_location_address)}`,
    Yahoo: `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${encodeURIComponent(
      qrContent.event_title
    )}&st=${qrContent.event_time_start}&et=${
      qrContent.event_time_end
    }&desc=${encodeURIComponent(
      qrContent.event_description
    )}&in_loc=${encodeURIComponent(qrContent.event_location_address)}`,
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "25px",
        padding: "40px 20px",
        minHeight: "100vh",
        background: qrContent?.color?.background,
      }}
    >
      <img
        src={qrContent?.event_image}
        alt="event"
        style={{
          // width: "100%",
          // maxWidth: "400px",
          height: "150px",
          // borderRadius:"100%",
          // objectFit: "cover",
        }}
      />
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
        }}
      >
        <h6 style={{ fontWeight: "600" }}> {qrContent?.event_title}</h6>
        <h6 style={{ fontWeight: "400" }}> {qrContent?.event_description}</h6>

        <button
          style={{
            background: qrContent?.color?.button,
            height: "42px",
            borderRadius: "4px",
            border: "none",
            color: "#fff",
            width: "100%",
            maxWidth: "240px",
            margin: "auto",
          }}
        >
          <Link
            to={qrContent?.event_organizer_website}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            <LuExternalLink />
            {qrContent?.event_btn_text || "Event"}
          </Link>
        </button>
      </div>

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
            {qrContent?.event_time_start
              ? formatDate(qrContent.event_time_start)
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
            {qrContent?.event_time_end
              ? formatDate(qrContent.event_time_end)
              : ""}
          </h6>
        </div>

        <div style={{ position: "relative" }}>
          <button
            onClick={toggleDropdown}
            style={{
              background: qrContent?.color?.button,
              height: "42px",
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
            Add to Calendar
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
                width: "240px",
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
                    padding: "12px 16px",
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
      </div>

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
            `${qrContent?.event_location_address} ${qrContent?.event_location_numeration}, ${qrContent?.event_location_country}, ${qrContent?.event_location_state}, ${qrContent?.event_location_postal_code}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            fontSize: "12px",
            color: "#307fe2",
          }}
        >
          {qrContent?.event_location_address},{" "}
          {qrContent?.event_location_numeration},{" "}
          {qrContent?.event_location_country}, Zip Code:{" "}
          {qrContent?.event_location_postal_code},
          {qrContent?.event_location_state}
        </a>
      </div>

      
      <div
        className="box"
        style={{
          background: "#fff",
          maxWidth: "700px",
          width: "100%",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "16px",
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
          <IoPeopleCircle size={24} />
          <h5 style={{ margin: "0", fontSize: "16px", fontWeight: "700" }}>
            Organizer information
          </h5>
        </div>

        <div className="wrap" style={{}}>
          <p style={{ margin: "0", color: "#8c8c8c" }}>Name</p>
          <h6 style={{ fontSize: "12px", marginBottom: "8px" }}>
            {qrContent?.event_organizer_name}
          </h6>
        </div>

        <div className="wrap" style={{}}>
          <p style={{ margin: "0", color: "#8c8c8c" }}>Phone</p>

          <h6 style={{ fontSize: "12px", marginBottom: "8px" }}>
            {qrContent?.event_organizer_phone}
          </h6>
        </div>

        <div className="wrap" style={{}}>
          <p style={{ margin: "0", color: "#8c8c8c", lineHeight: "10px" }}>
            email
          </p>

          <a
            href={`mailto:${qrContent?.event_organizer_email}`}
            style={{
              textDecoration: "none",
              fontSize: "12px",
              color: "#307fe2",
              marginBottom: "8px",
            }}
          >
            {qrContent?.event_organizer_email}
          </a>
        </div>

        <div className="wrap" style={{}}>
          <p style={{ margin: "0", color: "#8c8c8c", lineHeight: "10px" }}>
            Website
          </p>
          <a
            href={qrContent?.event_organizer_website}
            style={{
              textDecoration: "none",
              fontSize: "12px",
              color: "#307fe2",
              marginBottom: "8px",
            }}
          >
            {qrContent?.event_organizer_website}
          </a>
        </div>
        <div className="wrap" style={{}}>
          <p style={{ margin: "0", color: "#8c8c8c" }}>About</p>

          <h6 style={{ fontSize: "12px", marginBottom: "8px" }}>
            {qrContent?.event_organizer_about}
          </h6>
        </div>
      </div>

      <div
        className="box"
        style={{
          background: "#fff",
          maxWidth: "700px",
          width: "100%",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "16px",
        }}
      >
        <h6>Facilities</h6>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {Object.entries(qrContent?.event_facilities).map(([key, url]) => {
            return <>{FacilitiesIcon[key] || null}</>;
          })}
        </div>
      </div>
    </div>
  );
};
