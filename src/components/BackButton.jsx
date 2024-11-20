import React from "react";
import { FaArrowLeft } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

const BackButton = ({ onClick, color = "#e0201c", onPageCSS, redirectTo }) => {
    console.log("onPageCSS",onPageCSS)
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    if (redirectTo) {
      navigate(redirectTo); 
    } else {
      if (onClick) onClick(); 
    }
  };

  return (
    <button 
      className="back-button" 
      onClick={handleBackClick} 
      style={{ marginTop: onPageCSS }}
    >
      <FaArrowLeft style={{ color }} />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
