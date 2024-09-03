import React, { useState } from "react";
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
} from "../Helper/SocialSvgIcons";

const iconComponents = {
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

const SocialIconsComp = ({
  title = "Social networks",
  onIconClick,
  icons,
  className,
}) => {
  const [activeIcons, setActiveIcons] = useState([]);

  const handleIconClick = (iconName) => {
    if (activeIcons.includes(iconName)) {
      setActiveIcons(activeIcons.filter((icon) => icon !== iconName));
    } else {
      setActiveIcons([...activeIcons, iconName]);
    }
    if (onIconClick) onIconClick(iconName); // Call the parent function if needed
  };

  const handleRemoveIcon = (iconName) => {
    setActiveIcons(activeIcons.filter((icon) => icon !== iconName));
  };

  return (
    // < title={title}>
    <>
      {activeIcons.map((iconName) => (
        <div className="input-box-wrapper-social" key={iconName}>
          <div className="wrap">
            <div className="icon-selected">{icons[iconName]}</div>
            <input type="text" placeholder={`Enter your ${iconName} link`} />
          </div>
          <button
            className="remove-icon"
            onClick={() => handleRemoveIcon(iconName)}
          >
            -
          </button>
        </div>
      ))}
      <div className="social-con-comp ">
        <ul className={`wrapper ${className}`}>
          {Object.keys(icons).map((icon) => (
            <li
              key={icon}
              className={`icon ${icon} ${
                activeIcons.includes(icon) ? "active" : ""
              }`}
              onClick={() => handleIconClick(icon)}
            >
              <span className="tooltip">
                {icon.charAt(0).toUpperCase() + icon.slice(1)}
              </span>
              {icons[icon]}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialIconsComp;
