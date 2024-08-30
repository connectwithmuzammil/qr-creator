import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Accordion from "react-bootstrap/Accordion";

const URL = ({ qrData, setQrData }) => {
  const validationSchema = yup.object().shape({
    qr_name: yup.string().required("QR Name is required"),
    field_url: yup
      .string()
      .url("Must be a valid URL")
      .required("URL is required"),
  });
  // Initialize Formik
  const formik = useFormik({
    initialValues: qrData,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      setQrData(values);
      // You can perform additional actions here
    },
  });

  const handleChange = (e) => {
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
            <Accordion defaultActiveKey="0">
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
