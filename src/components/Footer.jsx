import React from "react";
import FooterLogo from "../assets/images/logoFooter.svg";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/qr-editor" && (
        <footer>
          <div className="top">
            <div className="left">
              <img src={FooterLogo} alt="logo" />
            </div>
            <div className="right">
              <div className="one">
                <div className="wrap">
                  <h3>Make your own QR codes today.</h3>
                  <Link to="/qr-editor">
                    <button>Create QR Code</button>
                  </Link>
                </div>
              </div>
              <div className="one">
                <h1>Company</h1>
                <Link to="/who-we-are">
                  <p>Who we are</p>
                </Link>
                <Link to={"/terms-and-conditions"}>
                  <p>Terms and Conditions</p>
                </Link>
                <Link to={"/terms-of-use"}>
                  <p>Terms of Use</p>
                </Link>
                <Link to={"/privacy-policy"}>
                  <p>Privacy policy</p>
                </Link>
                <Link to={"/cookies-policy"}>
                  <p>Cookies policy</p>
                </Link>
                <Link to={"/pricing"}>
                  <p>Prices</p>
                </Link>
              </div>
              <div className="one">
                <h1>Need help?</h1>
                <Link to={"/contact-us"}>
                  <p>Contact us</p>
                </Link>
                <Link to={"/faq"}>
                  <p>FAQ</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="bottom">
            <p>QR Code is a registered trademark of DENSO WAVE INCORPORATED</p>
            <p>© 2024 qrcreator.com All rights reserved</p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
