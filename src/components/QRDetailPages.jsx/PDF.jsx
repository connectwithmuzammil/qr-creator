import React, { useEffect, useState } from "react";
import { AccordianComponent } from "../AccordianComponent";
import { FaTrash } from "react-icons/fa";
import { InputComponent } from "../InputComponent";
import CutsomColorPickerComp from "../CutsomColorPickerComp";
import { useLocation } from "react-router-dom";

const PDF = ({ qrData, setQrData }) => {
  const location = useLocation();
  const [file, setFile] = useState(null); // State to manage file

  useEffect(() => {
    if (location.state?.qrData) {
      const qrDataFromLocation = location.state.qrData.data;
      setQrData(qrDataFromLocation);

      // Set the file from qrData if it exists (only if it's a URL)
      if (typeof qrDataFromLocation.pdf_file === "string") {
        setFile(qrDataFromLocation.pdf_file); // Set existing file if editing
      }
    }
  }, [location.state, setQrData]);

  // Handle file changes
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setQrData((prevData) => ({
        ...prevData,
        pdf_file: selectedFile, // Store the selected file
      }));
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const handleDelete = () => {
    setFile(null);
    setQrData((prevData) => ({
      ...prevData,
      pdf_file: null, // Remove file from state
    }));
  };

  // Display file name from URL (when editing)
  const getFileNameFromUrl = (url) => {
    return url.substring(url.lastIndexOf("/") + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQrData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const colors = [
    { id: "blue", background: "#d1e5fa", button: "#1466b8" },
    { id: "green", background: "#e8fce8", button: "#0e8b70" },
    { id: "yellow", background: "#fff9cc", button: "#998600" },
    { id: "red", background: "#fecdd6", button: "#b00223" },
  ];

  return (
    <div className="pdf-page">
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

          <AccordianComponent title={"Upload your PDF file"}>
            <div className="pdf-uploader-container">
              {!file ? (
                <>
                  <label htmlFor="pdfUpload" className="upload-button">
                    Upload your PDF file
                  </label>
                  <input
                    id="pdfUpload"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                  <p className="file-size-text">Max-size: 20MB</p>
                </>
              ) : (
                <div className="file-info">
                  {typeof file === "string" ? (
                    // If it's a URL, display file name
                    <>
                      <p>Uploaded PDF:</p>
                      <p>{getFileNameFromUrl(file)}</p>
                      <a href={file} target="_blank" rel="noopener noreferrer">
                        View PDF
                      </a>
                    </>
                  ) : (
                    // If it's a newly uploaded file, show the file object details
                    <>
                      <p>{file.name}</p>
                      <p>{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                    </>
                  )}
                  <FaTrash className="delete-icon" onClick={handleDelete} />
                </div>
              )}
            </div>
          </AccordianComponent>

          <AccordianComponent title={"Choose your design"}>
            <CutsomColorPickerComp
              colors={colors}
              qrData={qrData}
              setQrData={setQrData}
            />
          </AccordianComponent>

          <AccordianComponent title={"Enter the PDF details"}>
            <InputComponent
              label={"Company"}
              placeholder={"e.g. Pizza Palace"}
              name={"pdf_company"}
              value={qrData.pdf_company}
              onChange={handleInputChange}
            />
            <InputComponent
              label={"PDF name/title"}
              placeholder={"e.g. Pizza Menu"}
              name={"pdf_title"}
              value={qrData.pdf_title}
              onChange={handleInputChange}
            />
            <InputComponent
              label={"Description"}
              placeholder={"e.g. Over 50 toppings to choose from!"}
              name={"pdf_description"}
              value={qrData.pdf_description}
              onChange={handleInputChange}
            />
            <InputComponent
              label={"Website"}
              placeholder={"e.g. https://www.pizzapalace.com"}
              name={"pdf_website"}
              value={qrData.pdf_website}
              onChange={handleInputChange}
            />
          </AccordianComponent>
        </div>

        <div className="right">
          <img src="/assets/images/phone-pdf.png" alt="Preview" />
        </div>
      </div>
    </div>
  );
};

export default PDF;
