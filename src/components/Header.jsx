import React from "react";
import logo from "../assets/images/logo.svg";
const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className="auth-con">
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
