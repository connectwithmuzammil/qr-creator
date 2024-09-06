import React from "react";
import { AccordianComponent } from "../AccordianComponent";
import { InputComponent } from "../InputComponent";
import CutsomColorPickerComp from "../CutsomColorPickerComp";
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
import SocialIconsComp from "../SocialIconComp";
import Button from "../Button";
import VideoUpload from "../VideoUploadComp";

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
const Video = ({ qrData, setQrData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQrData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleVideoUpload = (video) => {};
  return (
    <div className="video-page">
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
          <AccordianComponent title={"Video"}>
            <div className="wrap-inp-cmp" style={{ alignItems: "center" }}>
              <InputComponent
                label={"Video URL"}
                name={"video_company_name"}
                placeholder={"e.g. https://www.myweb.com/video2"}
                onChange={handleInputChange}
                value={qrData?.video_company_name}
              />
              <Button title={"Add Video"} width={"200px"} />
            </div>
            <p className="social-con-content">
              If you prefer, you can upload your video (up to 10 videos)
            </p>
            <div className="wrapper-img-upload-dashed">
              <VideoUpload
         
              />
            </div>
          </AccordianComponent>
          <AccordianComponent title={"Video Information"}>
            <InputComponent
              label={"Company name"}
              name={"video_company_name"}
              placeholder={"e.g. Furniture Store"}
              onChange={handleInputChange}
              value={qrData?.video_company_name}
            />
            <InputComponent
              label={"Video title"}
              name={"video_company_name"}
              placeholder={"e.g. Furniture Store"}
              onChange={handleInputChange}
              value={qrData?.video_company_name}
            />
            <InputComponent
              label={"Company name"}
              name={"video_company_name"}
              placeholder={"e.g. Furniture Store"}
              onChange={handleInputChange}
              value={qrData?.video_company_name}
            />
            <InputComponent
              label={"Company name"}
              name={"video_company_name"}
              placeholder={"e.g. Furniture Store"}
              onChange={handleInputChange}
              value={qrData?.video_company_name}
            />
            <InputComponent
              label={"Company name"}
              name={"video_company_name"}
              placeholder={"e.g. Furniture Store"}
              onChange={handleInputChange}
              value={qrData?.video_company_name}
            />
          </AccordianComponent>
          <AccordianComponent title={"Social networks"}>
            <p className="social-con-content">Add Link to...</p>
            <SocialIconsComp icons={icons} />
          </AccordianComponent>
        </div>
        <div className="right">
          <img src="/assets/images/phone-video.png" alt="phone-video" />
        </div>
      </div>
    </div>
  );
};

export default Video;
