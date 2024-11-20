import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  title,
  redirect,
  onClick,
  width,
  isLoading,
  customLoadingText,
  disabled,
}) => {
  return (
    <>
      {onClick ? (
        <button
          className="btn-comp"
          onClick={onClick}
          style={{ width: width }}
          disabled={isLoading || disabled}
        >
          {/* {title} */}
          {isLoading ? customLoadingText || "Saving..." : title}
        </button>
      ) : (
        <Link to={redirect}>
          <button
            className="btn-comp"
            style={{ width: width }}
            disabled={disabled}
          >
            {title}
          </button>
        </Link>
      )}
    </>
  );
};

export default Button;
