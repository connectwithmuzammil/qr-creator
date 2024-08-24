import React from "react";
import Accordion from "react-bootstrap/Accordion";

const URL = () => {
  return (
    <>
      <div className="url">
        <div className="containerr">
          <div className="left">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Enter the name of your QR code
                </Accordion.Header>
                <Accordion.Body>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="e.g My QR code"
                  />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Type in the URL to link with your QR Code *
                </Accordion.Header>
                <Accordion.Body>
                  <input
                    type="url"
                    name=""
                    id=""
                    placeholder="https://surfershops.com/sale"
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="right">
            <img src="/assets/images/phone-url.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default URL;
