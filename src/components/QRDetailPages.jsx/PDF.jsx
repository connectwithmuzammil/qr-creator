import React from "react";
import AccordianComponent from "../AccordianComponent";

const PDF = () => {
  return (
    <div className="pdf-page">
      <div className="containerr">
        <div className="left">
      <AccordianComponent></AccordianComponent>

        </div>
        <div className="right">
        <img src="/assets/images/phone-pdf.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PDF;
