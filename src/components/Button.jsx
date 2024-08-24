import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, redirect, onClick, width }) => {
  return (
    <>
      {onClick ? (
        <button className="btn-comp" onClick={onClick} style={{ width: width }}>
          {title}
        </button>
      ) : (
        <Link to={redirect}>
          <button className="btn-comp" style={{ width: width }}>
            {title}
          </button>
        </Link>
      )}
    </>
  );
};

export default Button;
