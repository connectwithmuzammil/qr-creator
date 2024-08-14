import React from "react";
import URL from "../../assets/images/url.svg";
import vcard from "../../assets/images/icon-qr-vcard.svg";
import business from "../../assets/images/icon-qr-business.svg";
import social from "../../assets/images/icon-qr-social.svg";
import apps from "../../assets/images/icon-qr-apps.svg";
import video from "../../assets/images/icon-qr-video.svg";
import pdf from "../../assets/images/icon-qr-pdf.svg";
import links from "../../assets/images/icon-qr-links.svg";
import wifi from "../../assets/images/icon-qr-wifi.svg";
import gallery from "../../assets/images/icon-qr-image.svg";
import youtube from "../../assets/images/icon-qr-youtube.svg";
import landing from "../../assets/images/icon-qr-website.svg";
import event from "../../assets/images/icon-qr-event.svg";
import { MdChevronRight } from "react-icons/md";

const QrCreator = () => {
  return (
    <div className="qr-creator-main">
      <div className="page1">
        <div className="containerr">
          <div className="left">
            <h1 className="h1">1. Select the QR code you want to create:</h1>
            <div className="card-con">
              <div className="cardd">
                <div className="img-con">
                  <img src={URL} alt="url" />
                </div>
                <div className="wrap">
                  <h2>URL</h2>
                  <p>Link to a website of your choice</p>
                </div>
              </div>
              <div className="cardd">
                <div className="img-con">
                  <img src={URL} alt="url" />
                </div>
                <div className="wrap">
                  <h2>vCard</h2>
                  <p>Create a virtual business card</p>
                </div>
              </div>
              <div className="cardd">
                <div className="img-con">
                  <img src={URL} alt="url" />
                </div>
                <div className="wrap">
                  <h2>Busness page</h2>
                  <p>Display your business information</p>
                </div>
              </div>
              <div className="cardd">
                <div className="img-con">
                  <img src={URL} alt="url" />
                </div>
                <div className="wrap">
                  <h2>Social Media</h2>
                  <p>Link to your social media channels</p>
                </div>
              </div>
              <div className="cardd">
                <div className="img-con">
                  <img src={URL} alt="url" />
                </div>
                <div className="wrap">
                  <h2>Apps</h2>
                  <p>Redirect to biggest app stores</p>
                </div>
              </div>
              <div className="cardd">
                <div className="img-con">
                  <img src={URL} alt="url" />
                </div>
                <div className="wrap">
                  <h2>Video</h2>
                  <p>Share one or multiple videos</p>
                </div>
              </div>
              <div className="cardd">
                <div className="img-con">
                  <img src={URL} alt="url" />
                </div>
                <div className="wrap">
                  <h2>PDF</h2>
                  <p>Scan to display a PDF file</p>
                </div>
              </div>
              <div className="cardd">
                <div className="img-con">
                  <img src={URL} alt="url" />
                </div>
                <div className="wrap">
                  <h2>Links</h2>
                  <p>Create a list of useful links</p>
                </div>
              </div>
              <div className="cardd">
                <div className="img-con">
                  <img src={URL} alt="url" />
                </div>
                <div className="wrap">
                  <h2>Wi-Fi</h2>
                  <p>connect to wireless network</p>
                </div>
              </div>
              <div className="cardd">
                <div className="img-con">
                  <img src={URL} alt="url" />
                </div>
                <div className="wrap">
                  <h2>Images' Gallery</h2>
                  <p>Show a gallery of images</p>
                </div>
              </div>

              <div className="cardd">
                <div className="img-con">
                  <img src={URL} alt="url" />
                </div>
                <div className="wrap">
                  <h2>YouTube</h2>
                  <p>Take users to a YouTube video</p>
                </div>
              </div>
              <div className="cardd">
                <div className="img-con">
                  <img src={URL} alt="url" />
                </div>
                <div className="wrap">
                  <h2>Landing Page</h2>
                  <p>Create your own website</p>
                </div>
              </div>
              <div className="cardd">
                <div className="img-con">
                  <img src={URL} alt="url" />
                </div>
                <div className="wrap">
                  <h2>Event</h2>
                  <p>Share a event info and invites guests</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="/assets/images/phone-url.png" alt="phone-url" />
          </div>
        </div>
      </div>

      <div className="bottom-wrapper">
        <button className="cancel">Cancel</button>
        <div className="stages-con">
          <div className="select-qr">
            <div className="wrap">
              <h5 className="active">1</h5>
              <p className="active">Select QR code</p>
            </div>
            <MdChevronRight />
          </div>
          <div className="select-qr">
            <div className="wrap">
              <h5>2</h5>
              <p>Add content</p>
            </div>
            <MdChevronRight />
          </div>
          <div className="select-qr">
            <div className="wrap">
              <h5>3</h5>
              <p>Customize design</p>
            </div>
          </div>
        </div>
        <div className="btn-next">
          <button className="next">Next</button>
          <MdChevronRight />
        </div>
      </div>
    </div>
  );
};

export default QrCreator;
