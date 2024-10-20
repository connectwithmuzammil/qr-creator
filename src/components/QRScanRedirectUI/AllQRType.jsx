import { Link, useNavigate } from "react-router-dom";
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
import { IoMdPersonAdd } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsFillTelephonePlusFill } from "react-icons/bs";
import { FaBuilding, FaFax } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { TbBriefcase2Filled } from "react-icons/tb";

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
  console.log("qrContent", qrContent);
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
        paddingTop:"40px"
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
          textAlign:"center"
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
          paddingTop:"20px"
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
