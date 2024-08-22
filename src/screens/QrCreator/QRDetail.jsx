import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { BottomWrapperStages, Header } from "../../components";
import { useParams } from "react-router-dom";

const QRDetail = () => {
  const { type } = useParams();
  // console.log("QR-TYPE", type);

  const handleNextClick = () => {
    // Logic to navigate to the next page (e.g., Customize design page)
  };

  const handleCancelClick = () => {
    // Logic for canceling the process
  };
  return (
    <>
      <Header />
      <div className="qr-editor-detail">
        <div className="top">
          <h1>2. Your QR code content</h1>
        </div>
        <div className="bottom">
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
      </div>

      <BottomWrapperStages
        currentStage={2}
        onNextClick={handleNextClick}
        onCancelClick={handleCancelClick}
      />
    </>
  );
};

export default QRDetail;
