import React, { useState } from "react";
import { AccordianComponent } from "../AccordianComponent";
import { FaTrash } from "react-icons/fa";
import { InputComponent } from "../InputComponent";
import ColorPickerComponent from "../ColorPicker";

const PDF = ({ qrData, setQrData }) => {
  const [file, setFile] = useState(qrData.pdf_file || null);
  const [showCustomColor, setShowCustomColor] = useState(false);


  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setQrData((prevData) => ({
        ...prevData,
        pdf_file: selectedFile, // Store the selected PDF file
      }));
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const handleDelete = () => {
    setFile(null);
    setQrData((prevData) => ({
      ...prevData,
      pdf_file: null, // Reset the PDF file in the state
    }));
  };

  const formatFileSize = (size) => {
    const units = ["B", "KB", "MB", "GB"];
    let unitIndex = 0;
    let fileSize = size;

    while (fileSize >= 1024 && unitIndex < units.length - 1) {
      fileSize /= 1024;
      unitIndex++;
    }

    return `${fileSize.toFixed(2)} ${units[unitIndex]}`;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQrData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log("file", file);
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
                  <p>{file.name}</p>
                  <p>{formatFileSize(file.size)}</p>
                  <FaTrash className="delete-icon" onClick={handleDelete} />
                </div>
              )}
            </div>
          </AccordianComponent>
          <AccordianComponent title={"Choose your design"}>
            <div
              data-testid="ThemePicker"
              data-qa="qr-pdf-theme-picker"
              className="ThemePicker"
            >
              <div className="ThemePicker__wrapper">
                <div className="ThemePicker__item ThemePicker__labels">
                  <span className="ThemePicker__label ThemePicker__label--first">
                    Background
                  </span>
                  <span className="ThemePicker__label">Button</span>
                </div>
                <div
                  className="ThemePicker__item ThemePicker--active"
                  data-qa="theme-picker-color-blue-button"
                >
                  <span
                    className="ThemePicker__swatch ThemePicker__swatch--first"
                    style={{ backgroundColor: "rgb(209, 229, 250)" }}
                  />
                  <span
                    className="ThemePicker__swatch"
                    style={{ backgroundColor: "rgb(20, 102, 184)" }}
                  />
                </div>
                <div
                  className="ThemePicker__item "
                  data-qa="theme-picker-color-green-button"
                >
                  <span
                    className="ThemePicker__swatch ThemePicker__swatch--first"
                    style={{ backgroundColor: "rgb(232, 252, 232)" }}
                  />
                  <span
                    className="ThemePicker__swatch"
                    style={{ backgroundColor: "rgb(14, 139, 112)" }}
                  />
                </div>
                <div
                  className="ThemePicker__item "
                  data-qa="theme-picker-color-yellow-button"
                >
                  <span
                    className="ThemePicker__swatch ThemePicker__swatch--first"
                    style={{ backgroundColor: "rgb(255, 249, 204)" }}
                  />
                  <span
                    className="ThemePicker__swatch"
                    style={{ backgroundColor: "rgb(153, 134, 0)" }}
                  />
                </div>
                <div
                  className="ThemePicker__item "
                  data-qa="theme-picker-color-red-button"
                >
                  <span
                    className="ThemePicker__swatch ThemePicker__swatch--first"
                    style={{ backgroundColor: "rgb(254, 205, 214)" }}
                  />
                  <span
                    className="ThemePicker__swatch"
                    style={{ backgroundColor: "rgb(176, 2, 35)" }}
                  />
                </div>
                <div
                  className="ThemePicker__item ThemePicker__item--center"
                  onClick={() => setShowCustomColor(!showCustomColor)}
                >
                  <span className="ThemePicker__swatch">
                    <div
                      id="theme-picker-color-custom-button"
                      className="ThemePicker__add"
                      data-qa="theme-picker-color-add-button"
                    >
                      <div>+</div>
                    </div>
                  </span>
                </div>
              </div>
              {showCustomColor && (
                <div className="color-picker-con bg-custom-color">
                  <ColorPickerComponent />
                  <ColorPickerComponent />
                </div>
              )}
            </div>
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
              placeholder={"e.g. Pizza   Menu"}
              name={"pdf_title"}
              value={qrData.pdf_title}
              onChange={handleInputChange}
            />
            <InputComponent
              label={"Description"}
              placeholder={"e.g. Over 50 topping to choose from!="}
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
          <img src="/assets/images/phone-pdf.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PDF;
