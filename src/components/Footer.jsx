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
                <p>Who we are</p>
                <p>Terms and Conditions</p>
                <p>Terms of Use</p>
                <p>Privacy policy</p>
                <p>Cookies policy</p>
                <p>Prices</p>
              </div>
              <div className="one">
                <h1>Need help?</h1>
                <p>Contact us</p>
                <p>FAQ</p>
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
