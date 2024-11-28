// import React, { useState, useEffect, useRef } from "react";

// const SocialIconsComp = ({
//   onIconClick,
//   icons = {},
//   className,
//   initialLinks = {},
//   isEditing,
//   customStyle,
// }) => {
//   const [activeIcons, setActiveIcons] = useState([]);
//   const [iconLinks, setIconLinks] = useState({});
//   const initialized = useRef(false);

//   useEffect(() => {
//     if (isEditing) {
//       setIconLinks(initialLinks);
//       setActiveIcons(Object.keys(initialLinks));
//     }
//   }, [isEditing]);

//   // useEffect(() => {
//   //   setActiveIcons(Object.keys(initialLinks));
//   //   setIconLinks(initialLinks);
//   // }, [initialLinks]);

//   useEffect(() => {
//     if (!initialized.current) {
//       setActiveIcons(Object.keys(initialLinks));
//       setIconLinks(initialLinks);
//       initialized.current = true;
//     }
//   }, [initialLinks]);

//   const handleIconClick = (iconName) => {
//     if (activeIcons.includes(iconName)) {
//       handleRemoveIcon(iconName);
//     } else {
//       // Add the icon if it's not active
//       setActiveIcons((prev) => [...prev, iconName]);
//       setIconLinks((prevLinks) => ({
//         ...prevLinks,
//         [iconName]: prevLinks[iconName] || "", // Add a placeholder link if none exists
//       }));
//       if (onIconClick) onIconClick(iconName, ""); // Inform parent of the new active icon with empty link
//     }
//   };

//   const handleLinkChange = (iconName, link) => {
//     setIconLinks((prevLinks) => {
//       const updatedLinks = {
//         ...prevLinks,
//         [iconName]: link,
//       };
//       if (onIconClick) onIconClick(iconName, link);
//       return updatedLinks;
//     });
//   };

//   // const handleRemoveIcon = (iconName) => {
//   //   setActiveIcons((prev) => prev.filter((icon) => icon !== iconName));
//   //   setIconLinks((prevLinks) => {
//   //     const newLinks = { ...prevLinks };
//   //     delete newLinks[iconName];
//   //     if (onIconClick) onIconClick(iconName, null); // Notify parent to remove this icon's link
//   //     return newLinks;
//   //   });
//   // };

//     const handleRemoveIcon = (iconName) => {
//     setActiveIcons((prev) => prev.filter((icon) => icon !== iconName));
//     setIconLinks((prevLinks) => {
//       const newLinks = { ...prevLinks };
//       delete newLinks[iconName];
//       if (onIconClick) onIconClick(iconName, null);
//       return newLinks;
//     });
//   };
//   console.log("activeIcons", activeIcons);
//   console.log("initialLinks", initialLinks);
//   // console.log("iconLinks", iconLinks);

//   return (
//     <>
//       {/* Render active icons with their input fields */}
//       {activeIcons.map((iconName) => (
//         <div className="input-box-wrapper-social" key={iconName}>
//           <div className="wrap">
//             <div className="icon-selected">{icons[iconName]}</div>
//             <input
//               type="text"
//               placeholder={`Enter your ${iconName} link`}
//               value={iconLinks[iconName] || ""}
//               onChange={(e) => handleLinkChange(iconName, e.target.value)}
//             />
//           </div>
//           <button
//             className="remove-icon"
//             onClick={() => handleRemoveIcon(iconName)}
//           >
//             - {/* Button to remove icon */}
//           </button>
//         </div>
//       ))}
//       <div className={`social-con-comp ${className}`}>
//         <ul className="wrapper">
//           {Object.keys(icons).map((icon) => (
//             <li
//               key={icon}
//               onClick={() => handleIconClick(icon)}
//               className={`icon ${icon} ${
//                 activeIcons.includes(icon) ? "active" : ""
//               }`}
//             >
//               {icons[icon]}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default SocialIconsComp;

import React, { useState, useEffect } from "react";

const SocialIconsComp = ({
  icons = {},
  className,
  localQrData,
  setLocalQrData,
  dataKey,
}) => {
  const [activeIcons, setActiveIcons] = useState([]);

  // Sync activeIcons with the dynamic key in localQrData
  useEffect(() => {
    setActiveIcons(Object.keys(localQrData?.[dataKey] || []));
  }, [localQrData, dataKey]);

  const handleIconClick = (iconName) => {
    if (activeIcons.includes(iconName)) {
      handleRemoveIcon(iconName);
    } else {
      setActiveIcons((prev) => [...prev, iconName]);
      setLocalQrData((prevData) => ({
        ...prevData,
        [dataKey]: {
          ...prevData[dataKey],
          [iconName]: "",
        },
      }));
    }
  };

  const handleLinkChange = (iconName, link) => {
    setLocalQrData((prevData) => ({
      ...prevData,
      [dataKey]: {
        ...prevData[dataKey],
        [iconName]: link,
      },
    }));
  };

  const handleRemoveIcon = (iconName) => {
    setActiveIcons((prev) => prev.filter((icon) => icon !== iconName));
    setLocalQrData((prevData) => {
      const updatedDataKey = { ...prevData[dataKey] };
      delete updatedDataKey[iconName];
      return {
        ...prevData,
        [dataKey]: updatedDataKey,
      };
    });
  };

  return (
    <>
      {/* Render active icons with input fields */}
      {activeIcons.map((iconName) => (
        <div className="input-box-wrapper-social" key={iconName}>
          <div className="wrap">
            <div className="icon-selected">{icons[iconName]}</div>
            <input
              type="text"
              placeholder={`Enter your ${iconName} link`}
              value={localQrData[dataKey]?.[iconName] || ""}
              onChange={(e) => handleLinkChange(iconName, e.target.value)}
            />
          </div>
          <button
            className="remove-icon"
            onClick={() => handleRemoveIcon(iconName)}
          >
            - {/* Button to remove icon */}
          </button>
        </div>
      ))}
      <div className={`social-con-comp ${className}`}>
        <ul className="wrapper">
          {Object.keys(icons).map((icon) => (
            <li
              key={icon}
              onClick={() => handleIconClick(icon)}
              className={`icon ${icon} ${
                activeIcons.includes(icon) ? "active" : ""
              }`}
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
