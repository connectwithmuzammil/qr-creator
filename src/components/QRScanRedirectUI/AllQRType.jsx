import { Link, useNavigate } from "react-router-dom";
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

export const QRYOUTUBE = ({ qrContent }) => {
  // Extract the video ID from the short URL
  const videoId = qrContent?.youtube_url.split("/").pop().split("?")[0]; // "0Yxf4hY8zjI"
  console.log("videoId");

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
      }}
    >
      <iframe
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
        width="50%"
        height="315"
        style={{ borderRadius: "4px" }}
      ></iframe>
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
      }}
    >
      <h6>{qrContent?.pdf_company}</h6>
      <div
        className="wrapp"
        style={{
          height: "420px",
          width: "700px",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "12px",
        }}
      >
        <h5>{qrContent?.pdf_title}</h5>
        <h6>{qrContent?.pdf_description}</h6>

        <div
          style={{
            marginTop: "8px",
            marginBottom: "8px",
            width: "60%",
            height: "250px",
          }}
        >
          <iframe
            src={qrContent?.outcome}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="PDF Viewer"
          />
        </div>

        <button
          style={{
            background: qrContent?.color?.button,
            width: "230px",
            height: "34px",
            borderRadius: "4px",
            outline: "none",
            border: "none",
            color: "#fff",
          }}
        >
          <Link
            to={qrContent?.outcome}
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            See PDF
          </Link>
        </button>
      </div>
      <Link
        style={{
          color: qrContent?.color?.button,
          textDecoration: "none",
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
      }}
    >
      <h5>{qrContent?.video_name}</h5>
      <h5>{qrContent?.video_title}</h5>
      <h6>{qrContent?.video_description}</h6>
      <button
        style={{
          background: qrContent?.color?.button,
          width: "630px",
          height: "34px",
          borderRadius: "4px",
          outline: "none",
          border: "none",
          color: "#fff",
          marginTop: "12px",
          marginBottom: "16px",
        }}
      >
        <Link
          to={qrContent?.video_url}
          target="_blank"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          {qrContent?.video_button}
        </Link>
      </button>
      <div style={{ width: "630px", height: "350px", marginBottom: "20px" }}>
        <video
          src={qrContent?.video_path}
          style={{ width: "100%", height: "100%", borderRadius: "4px" }}
          controls
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "12px",
          width: "630px",
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
        // minHeight: "100vh",
        width: "700px",
        flexDirection: "column",
        marginInline: "auto",
        paddingTop: "40px",
      }}
    >
      <div
        className="one"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "8px",
          background: qrContent?.color?.background,
          width: "100%",
          padding: "16px 0px",
        }}
      >
        <img
          src={qrContent?.vcard_image}
          alt={"vcard"}
          width={100}
          style={{ borderRadius: "100px" }}
        />
        <h5>{qrContent?.vcard_full_name}</h5>
        <h6>{qrContent?.vcard_profession}</h6>
      </div>

      <button
        style={{
          background: qrContent?.color?.button,
          width: "200px",
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
        className="two"
        style={{
          borderTop: "1px solid #bfbfbf",
          width: "100%",
          paddingTop: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <MdEmail />
          <div>
            <p
              style={{
                margin: "0",
                color: "#8c8c8c",
                fontSize: "12px",
                lineHeight: "8px",
              }}
            >
              Email
            </p>
            <a
              href={`mailto:${qrContent?.vcard_email}`}
              style={{
                textDecoration: "none",
                fontSize: "12px",
                color: "#307fe2",
              }}
            >
              {qrContent?.vcard_email}
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <BsFillTelephoneFill />

          <div>
            <p
              style={{
                margin: "0",
                color: "#8c8c8c",
                fontSize: "12px",
                lineHeight: "8px",
              }}
            >
              Mobile Phone
            </p>
            <a
              href={`tel:${qrContent?.vcard_mobile_phone}`}
              style={{
                textDecoration: "none",
                fontSize: "12px",
                color: "#307fe2",
              }}
            >
              {qrContent?.vcard_mobile_phone}
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <BsFillTelephonePlusFill />
          <div>
            <p
              style={{
                margin: "0",
                color: "#8c8c8c",
                fontSize: "12px",
                lineHeight: "8px",
              }}
            >
              Alternative phone number
            </p>
            <a
              href={`tel:${qrContent?.vcard_landline_phone}`}
              style={{
                textDecoration: "none",
                fontSize: "12px",
                color: "#307fe2",
              }}
            >
              {qrContent?.vcard_landline_phone}
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <FaFax />
          <div>
            <p
              style={{
                margin: "0",
                color: "#8c8c8c",
                fontSize: "12px",
                lineHeight: "8px",
              }}
            >
              Fax
            </p>
            <a
              href={`tel:${qrContent?.vcard_fax}`}
              style={{
                textDecoration: "none",
                fontSize: "12px",
                color: "#307fe2",
              }}
            >
              {qrContent?.vcard_fax}
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <FaLocationDot />

          <div>
            <p
              style={{
                margin: "0",
                color: "#8c8c8c",
                fontSize: "12px",
                lineHeight: "8px",
              }}
            >
              Location
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${qrContent?.vcard_address} ${qrContent?.vcard_numeration}, ${qrContent?.vcard_country}, ${qrContent?.vcard_state}, ${qrContent?.vcard_zip_code}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                fontSize: "12px",
                color: "#307fe2",
              }}
            >
              {qrContent?.vcard_address}, {qrContent?.vcard_numeration},{" "}
              {qrContent?.vcard_country}, Zip Code: {qrContent?.vcard_zip_code},{" "}
              {qrContent?.vcard_state}
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <IoGlobeOutline />

          <div>
            <p
              style={{
                margin: "0",
                color: "#8c8c8c",
                fontSize: "12px",
                lineHeight: "8px",
              }}
            >
              Website
            </p>
            <a
              href={qrContent?.vcard_website}
              target="_blank"
              style={{
                textDecoration: "none",
                fontSize: "12px",
                color: "#307fe2",
              }}
            >
              {qrContent?.vcard_website}
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <FaBuilding />
          <div>
            <p
              style={{
                margin: "0",
                color: "#8c8c8c",
                fontSize: "12px",
                lineHeight: "16px",
              }}
            >
              Company Name
            </p>
            <div
              style={{
                textDecoration: "none",
                fontSize: "12px",
              }}
            >
              {qrContent?.vcard_company_name}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <TbBriefcase2Filled />

          <div>
            <p
              style={{
                margin: "0",
                color: "#8c8c8c",
                fontSize: "12px",
                lineHeight: "16px",
              }}
            >
              Profession
            </p>
            <div
              style={{
                textDecoration: "none",
                fontSize: "12px",
              }}
            >
              {qrContent?.vcard_profession}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #bfbfbf",
          borderBottom: "1px solid #bfbfbf",
          width: "100%",
          paddingTop: "12px",
          paddingBottom: "12px",
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
          width: "700px",
          paddingBottom: "40px",
          paddingTop: "20px",
        }}
      >
        {Object.entries(qrContent?.vcard_social).map(([key, url]) => {
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

export const QRBUSINESS = ({ qrContent }) => {
  return (
    <div
      style={{
        background: qrContent?.color?.background,
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <div
        className="wrapp"
        style={{
          width: "700px",
          marginInline: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h5>{qrContent?.business_company}</h5>
        <img
          src={qrContent?.business_logo}
          alt="business_logo"
          width={100}
          height={100}
          style={{ borderRadius: "100px" }}
          loading="lazy"
        />
        <div
          className="company-info"
          style={{
            backgroundColor: "#fff",
            width: "700px",
            padding: "16px",
            textAlign: "center",
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
            outline: "none",
            border: "none",
            color: "#fff",
            marginTop: "12px",
            marginBottom: "16px",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
              width: "100%",
            }}
            to={qrContent?.business_url}
            target="_blank"
          >
            {qrContent?.business_btn_text || "BUSINESS URL"}
          </Link>
        </button>

        <div
          className="opening-hour"
          style={{ background: "#fff", width: "100%", padding: "16px" }}
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
            alignItems: "start",
            gap: "10px",
            background: "#fff",
            width: "100%",
            padding: "16px",
            flexDirection: "column",
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
          style={{ background: "#fff", padding: "16px", width: "100%" }}
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
          style={{ background: "#fff", width: "100%", padding: "16px" }}
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
          style={{ background: "#fff", width: "100%", padding: "16px" }}
        >
          <div
            className="top"
            style={{
              display: "flex",
              alignItems: "start",
              gap: "6px",
              flexDirection: "column",
            }}
          >
            <h5
              style={{
                margin: "0",
                fontSize: "16px",
                color: "#404040",
              }}
            >
              About the company
            </h5>
            <h6>{qrContent?.business_about || "ABOUT"}</h6>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px",
            width: "700px",
          }}
        >
          {Object.entries(qrContent?.business_social).map(([key, url]) => {
            return (
              <a key={key} href={url} target="_blank" rel="noopener noreferrer">
                {icons[key] || null}
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
        width: "700px",
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
        }}
      >
        <img
          src={qrContent?.image_path}
          alt="social"
          style={{
            width: "250px",
            height: "250px",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
        <h5 style={{ margin: "0" }}>{qrContent?.media_headline}</h5>
        <h6 style={{ margin: "0", fontSize: "14px" }}>
          {qrContent?.media_description}
        </h6>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "12px",
          width: "700px",
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
      }}
    >
      <div
        className="box1"
        style={{
          width: "700px",
          marginInline: "auto",
          background: qrContent?.color?.button,
          height: "62px",
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
          width: "700px",
          marginInline: "auto",
          background: qrContent?.color?.button,
          padding: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            width: "700px",
            alignItems: "center",
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
                style={{}}
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
        style={{ textDecoration: "none" }}
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
        // height: "100vh",
        minHeight: "100vh",
        background: qrContent?.color?.background,
        flexDirection: "column",
        gap: "25px",
        paddingTop: "40px",
        paddingBottom: "30px",
      }}
    >
      <img
        src={qrContent?.image_path}
        alt="link"
        style={{ width: "300px", objectFit: "cover" }}
      />
      <div className="text" style={{ textAlign: "center" }}>
        <h5>{qrContent?.links_title}</h5>
        <h6>{qrContent?.links_description}</h6>
      </div>

      <div
        className="linkbox-con"
        style={{
          width: "700px",
          display: "flex",
          gap: "12px",
          flexDirection: "column",
        }}
      >
        {qrContent?.all_links?.map((link, index) => (
          <Link
            className="linkbox"
            style={{
              background: qrContent?.color?.button,
              width: "100%",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              padding: "12px",
              borderRadius: "6px",
              color: "#fff",
              textDecoration: "none",
              gap: "50px",
            }}
            to={link?.url}
            target="_blank"
          >
            <img src={link?.link_image} alt="" />
            <h6> {link?.text}</h6>
          </Link>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          width: "700px",
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
        style={{ textDecoration: "none" }}
      >
        {qrContent?.app_website}
      </a>
    </div>
  );
};
export const QRGALLERY = ({ qrContent }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
        minHeight: "100vh",
        background: qrContent?.color?.background,
        flexDirection: "column",
        gap: "25px",
        paddingTop: "40px",
        paddingBottom: "30px",
      }}
    >
      <div className="text" style={{ textAlign: "center" }}>
        <h5>{qrContent?.gallery_title}</h5>
        <h6>{qrContent?.gallery_description}</h6>
      </div>
      <div
        className="box"
        style={{ background: "#fff", height: "400px", textAlign: "center" }}
      >
        <div
          className="box-wrap"
          style={{
            width: "700px",
            background: qrContent?.color?.button,
            padding: "16px",
            textAlign: "center",
            height: "150px",
          }}
        >
          <img
            src={qrContent?.image_path}
            alt="link"
            style={{
              width: "300px",
              objectFit: "cover",
              borderRadius: "6px",
              height: "300px",
            }}
          />
        </div>
        <button
          style={{
            background: qrContent?.color?.button,
            width: "90%",
            height: "42px",
            borderRadius: "4px",
            outline: "none",
            border: "none",
            color: "#fff",
            marginTop: "12px",
            marginBottom: "16px",
            marginTop: "180px",
          }}
        >
          <Link
            to={qrContent?.gallery_url}
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            {qrContent?.video_button || "Gallery"}
          </Link>
        </button>
      </div>

      <a
        href={qrContent?.gallery_website}
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        {qrContent?.gallery_website}
      </a>
    </div>
  );
};
export const QRLANDING = ({ qrContent }) => {
  console.log("qrContent", qrContent);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
        minHeight: "100vh",
        background: qrContent?.color?.background,
        flexDirection: "column",
        gap: "25px",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <h6>{qrContent?.landing_company}</h6>
      <img
        src={qrContent?.landing_logo}
        alt=""
        style={{
          width: "300px",
          objectFit: "cover",
          height: "300px",
          position: "relative",
          zIndex: "10",
        }}
      />
      <div
        className="box"
        style={{
          background: "#fff",
          width: "700px",
          padding: "16px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <h6 style={{ fontWeight: "600" }}> {qrContent?.landing_title}</h6>
        <h6> {qrContent?.landing_subtitle} </h6>

        <button
          style={{
            background: qrContent?.color?.button,
            width: "90%",
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
            {qrContent?.landing_button || "landing"}
          </Link>
        </button>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            width: "700px",
            justifyContent: "center",
            marginTop: "12px",
          }}
        >
          {Object.entries(qrContent?.landing_social).map(([key, url]) => {
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
      </div>
    </div>
  );
};
