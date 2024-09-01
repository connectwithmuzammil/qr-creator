import React from "react";
import { AccordianComponent, AccordianWithInput } from "../AccordianComponent";
import { InputComponent } from "../InputComponent";

const URL = ({ qrData, setQrData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQrData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="url">
        <div className="containerr">
          <div className="left">
            <AccordianComponent title={"Enter the name of your QR code"}>
              <InputComponent
                placeholder="e.g My QR code"
                onChange={handleInputChange}
                name="qr_name"
                value={qrData.qr_name}
              />
            </AccordianComponent>
            <AccordianComponent
              title={"Type in the URL to link with your QR Code *"}
            >
              <InputComponent
                placeholder={"https://surfershops.com/sale"}
                type={"url"}
                onChange={handleInputChange}
                value={qrData.field_url}
                name={"field_url"}
              />
            </AccordianComponent>
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

{
  /* <Accordion defaultActiveKey="0">
<Accordion.Item eventKey="0">
  <Accordion.Header>
    Enter the name of your QR code
  </Accordion.Header>
  <Accordion.Body>
    <input
      type="text"
      name="qr_name"
      value={qrData.qr_name || ""}
      placeholder="e.g My QR code"
      onChange={handleChange}
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
      name="field_url"
      value={qrData.field_url || ""}
      placeholder="https://surfershops.com/sale"
      onChange={handleChange}
    />
  </Accordion.Body>
</Accordion.Item>
</Accordion> */
}
