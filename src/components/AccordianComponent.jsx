import React from "react";
import Accordion from "react-bootstrap/Accordion";

const AccordianComponent = () => {
  return (
    <div className="accord-con">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Enter the name of your QR code</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordianComponent;
