import React, { useEffect, useState } from "react";
import { AccordianComponent } from "../AccordianComponent";
import { FaTrash } from "react-icons/fa";
import { InputComponent } from "../InputComponent";
import ColorPickerComponent from "../ColorPicker";
import CutsomColorPickerComp from "../CutsomColorPickerComp";

const PDF = ({ qrData, setQrData }) => {
  const [file, setFile] = useState(qrData.pdf_file || null);

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

  const colors = [
    { id: "blue", background: "#d1e5fa", button: "#1466b8" },
    { id: "green", background: "#e8fce8", button: "#0e8b70" },
    { id: "yellow", background: "#fff9cc", button: "#998600" },
    { id: "red", background: "#fecdd6", button: "#b00223" },
  ];

  const [activeColor, setActiveColor] = useState(colors[0].id);
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    const color = colors.find((c) => c.id === activeColor);
    if (color) {
      setQrData((prevState) => ({
        ...prevState,
        color: {
          background: color.background,
          button: color.button,
        },
      }));
    }
  }, [activeColor, setQrData]);

  const handleCustomColorChange = (colorType, color) => {
    setQrData((prevState) => ({
      ...prevState,
      color: {
        ...prevState.color,
        [colorType]: color,
      },
    }));
  };

  const handleCustomColorSelect = () => {
    setActiveColor("custom");
  };

  const handleColorPickerToggle = () => {
    setShowColorPicker(!showColorPicker);
    if (!showColorPicker) {
      // Set the active color to 'custom' when opening the color picker
      setActiveColor("custom");
    }
  };
  // console.log("selectedColor", selectedColor);
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
