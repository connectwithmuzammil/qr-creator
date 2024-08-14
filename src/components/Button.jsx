import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, Redirect }) => {
  return (
    <Link to={Redirect}>
      <button className="btn-comp">{title}</button>
    </Link>
  );
};

export default Button;
