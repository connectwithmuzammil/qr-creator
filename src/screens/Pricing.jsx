import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="content">
        <p>Select an option to access all our QR tools at the best prices!</p>
        <button>Continue</button>
      </div>
      <div className="card-container">
        <div className="cardd active">
          <div className="top">
            <span />
            <h1>7-Day Limited Access</h1>
          </div>
          <p className="pricing">$0.79</p>
          <ul>
            <li>
              <FaCheck />
              Dynamic QR design
            </li>
            <li>
              <FaCheck />
              <span>Various types of QR code available</span>
            </li>
            <li>
              <FaCheck />
              <span>Edit and manage your QR codes</span>
            </li>
            <li>
              <FaCheck />
              <span>
                After 7 days, auto-renews to $29.95 to be billed every 4 weeks.
                Cancel anytime.
              </span>
            </li>
          </ul>
        </div>
        <div className="cardd ">
          <div className="most-popular">
            <h3>Most popular</h3>
          </div>
          <div className="top">
            <span />
            <h1>7-Day Full Access</h1>
          </div>
          <p className="pricing">$0.99</p>
          <ul>
            <li>
              <FaCheck />
              Dynamic QR design
            </li>
            <li>
              <FaCheck />
              <span>Unlimited scans</span>
            </li>
            <li>
              <FaCheck />
              <span>Generate QR codes using AI</span>
            </li>
            <li>
              <FaCheck />
              <span>Dynamic QR design</span>
            </li>
            <li>
              <FaCheck />
              <span>Various types of QR code available</span>
            </li>
            <li>
              <FaCheck />
              <span>Edit and manage your QR codes</span>
            </li>
            <li>
              <FaCheck />
              <span>Download your codes in a variety of formats</span>
            </li>
            <li>
              <FaCheck />
              <span>Comprehensive QR analytics</span>
            </li>
            <li>
              <FaCheck />
              <span>
                After 7 days, auto-renews to $29.95 to be billed every 4 weeks.
                Cancel anytime.
              </span>
            </li>
          </ul>
        </div>
        <div className="cardd ">
          <div className="top">
            <span />
            <h1>Yearly UnLimited </h1>
          </div>
          <p className="pricing">$11.95</p>
          <ul>
            <li>
              <FaCheck />
              Dynamic QR design
            </li>
            <li>
              <FaCheck />
              <span>Unlimited scans</span>
            </li>
            <li>
              <FaCheck />
              <span>Generate QR codes using AI</span>
            </li>
            <li>
              <FaCheck />
              <span>Dynamic QR design</span>
            </li>
            <li>
              <FaCheck />
              <span>Various types of QR code available</span>
            </li>
            <li>
              <FaCheck />
              <span>Edit and manage your QR codes</span>
            </li>
            <li>
              <FaCheck />
              <span>Download your codes in a variety of formats</span>
            </li>
            <li>
              <FaCheck />
              <span>Comprehensive QR analytics</span>
            </li>
            <li>
              <FaCheck />
              <span>
                One-time payment of $143.30, auto-renews every year. Cancel
                anytime.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <p>
          <span> Money-back guarantee.</span> You may cancel by calling us
          toll-free at <span> +1 (833) 862 3200.</span>
        </p>
      </div>
    </div>
  );
};

export default Pricing;
