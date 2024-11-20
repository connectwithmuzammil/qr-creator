import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="contact">
        <div className="top">
          <div className="content">
            <h1>Contact Us</h1>
            <p>
              Questions or queries about QR Creator? Don’t hesitate to get in
              touch! Complete the form and we’ll contact you as soon as we can.
              You can also call us toll-free at <b> +1 (833) 862 3200.</b>
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="form">
            <div className="input-wrap">
              <label>Full name</label>
              <input type="text" name="" id="" placeholder="e.g. John Smith" />
            </div>
            <div className="input-wrap">
              <label>Email address *</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="e.g. email@email.com"
              />
            </div>
            <div className="input-wrap">
              <label>Subject *</label>
              <select name="" id="">
                <option value="" disabled selected hidden>
                  Select
                </option>

                <option value="">Technical Issue</option>
                <option value="">Price inquiry</option>
                <option value="">Unsubscribe</option>
                <option value="">Info Request</option>
                <option value="">Update email</option>
                <option value="">change billing country</option>
              </select>
            </div>
            <div className="input-wrap">
              <label>Full name</label>
              <input type="text" name="" id="" placeholder="e.g. John Smith" />
            </div>
            <div className="btn-wrapper">
              <button>Send</button>
            </div>
            <p className="policy">
              By clicking Send, you confirm you have been informed about the
              <Link to="/privacy-policy"> Privacy Policy.</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
