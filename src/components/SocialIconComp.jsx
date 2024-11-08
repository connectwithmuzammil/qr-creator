import React, { useState, useEffect } from "react";

const SocialIconsComp = ({ title = "Social networks", onIconClick, icons = {}, className, initialLinks = {} }) => {
  const [activeIcons, setActiveIcons] = useState([]);
  const [iconLinks, setIconLinks] = useState({});

  // Sync iconLinks and activeIcons with initialLinks when initialLinks change
  useEffect(() => {
    setIconLinks(initialLinks);
    setActiveIcons(Object.keys(initialLinks));
  }, [initialLinks]);

  const handleIconClick = (iconName) => {
    if (activeIcons.includes(iconName)) {
      // Remove the icon if it's already active
      setActiveIcons((prev) => prev.filter((icon) => icon !== iconName));
    } else {
      // Add the icon only if it's not already in activeIcons
      if (!activeIcons.includes(iconName)) {
        setActiveIcons((prev) => [...prev, iconName]);
        setIconLinks((prevLinks) => ({
          ...prevLinks,
          [iconName]: prevLinks[iconName] || "", // Ensure a link exists if newly activated
        }));
      }
    }
  };

  const handleLinkChange = (iconName, link) => {
    setIconLinks((prevLinks) => ({
      ...prevLinks,
      [iconName]: link,
    }));
    if (onIconClick) onIconClick(iconName, link);
  };

  const handleRemoveIcon = (iconName) => {
    setActiveIcons((prev) => prev.filter((icon) => icon !== iconName));
    setIconLinks((prevLinks) => {
      const newLinks = { ...prevLinks };
      delete newLinks[iconName];
      return newLinks;
    });
  };

  return (
    <>
      {/* Render active icons with their input fields */}
      {activeIcons.map((iconName) => (
        <div className="input-box-wrapper-social" key={iconName}>
          <div className="wrap">
            <div className="icon-selected">{icons[iconName]}</div>
            <input
              type="text"
              placeholder={`Enter your ${iconName} link`}
              value={iconLinks[iconName] || ""}
              onChange={(e) => handleLinkChange(iconName, e.target.value)}
            />
          </div>
          <button
            className="remove-icon"
            onClick={() => handleRemoveIcon(iconName)}
          >
            -
          </button>
        </div>
      ))}
      <div className="social-con-comp">
        <ul className={`wrapper ${className}`}>
          {Object.keys(icons).map((icon) => (
            <li
              key={icon}
              className={`icon ${icon} ${activeIcons.includes(icon) ? "active" : ""}`}
              onClick={() => handleIconClick(icon)}
            >
              {icons[icon]}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialIconsComp;
