import React, { useEffect, useRef, useState } from "react";
import { InputComponent } from "../InputComponent";
import { AccordianComponent } from "../AccordianComponent";
import CutsomColorPickerComp from "../CutsomColorPickerComp";
import ImageUploadComponent from "../ImageUploadComp";
import { useLocation } from "react-router-dom";
import ToggleButton from "./QRToggleButton";
import { PreviewFrame, TopPreviewHeader } from "../SVGIcon";
import { QRPreviewGallery } from "./QRPreviewAll";
import ImageUploadMultipleComponent from "../ImageUploadMultipleComponent";
import { useDispatch } from "react-redux";
import { deleteField } from "../../redux/slice/qrSlice";
import ViewPreviewModal from "../Modal/QR/ViewPreviewModal";

const colors = [
  { id: "blue", background: "#d1e5fa", button: "#1466b8" },
  { id: "green", background: "#e8fce8", button: "#0e8b70" },
  { id: "yellow", background: "#fff9cc", button: "#998600" },
  { id: "red", background: "#fecdd6", button: "#b00223" },
];
const GALLERY = ({ localQrData, setLocalQrData }) => {
  const [showModalPreview, setShowModalPreview] = useState(false);
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("Preview Page");
  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  const location = useLocation();
  console.log("editDataGallery", location);

  useEffect(() => {
    if (location.state?.qrData) {
      const qrDataFromLocation = location.state.qrData.data;
      console.log("qrDataFromLocation", qrDataFromLocation);
      setLocalQrData(qrDataFromLocation);
      // const { gallery_image, ...restQrData } = qrDataFromLocation;
      // setLocalQrData((prevQrData) => ({
      //   ...prevQrData,
      //   ...restQrData,
      // }));
      // setLocalQrData(qrDataFromLocation);

      // If there's color data in localQrData, ensure it's set correctly
      if (qrDataFromLocation?.color) {
        setLocalQrData((prevQrData) => ({
          ...prevQrData,
          color: qrDataFromLocation?.color,
        }));
      }
    }
  }, [location.state, setLocalQrData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalQrData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const hasExecutedRef = useRef(false);
  console.log("hashhh", hasExecutedRef);
  const handleImageUpload = (mediaData, name, file) => {
    console.log("Received media data", mediaData); // media data base64
    console.log("Received media name", name); // media name

    // setLocalQrData((prevData) => ({
    //   ...prevData,
    //   [name]: file,
    // }));

    if (localQrData?.id && !hasExecutedRef.current) {
      dispatch(deleteField(name));
      setLocalQrData((prevData) => ({
        ...prevData,
        gallery_image: [],
      }));

      hasExecutedRef.current = true;
    }

    setLocalQrData((prevData) => {
      // Check if `gallery_image` already exists and is an array
      const existingFiles = prevData[name] || [];

      // Append the new file to the existing array of files
      return {
        ...prevData,
        [name]: [...existingFiles, file],
      };
    });
  };

  const handleImageDelete = (fieldName, imageIndex) => {
    console.log("All images deleted");
    setLocalQrData((prevData) => ({
      ...prevData,
      [fieldName]: prevData[fieldName].filter(
        (_, index) => index !== imageIndex
      ),
    }));
  };

  return (
    <>
      <div className="gallery-page">
      <button
          className="viewPreviewbtn"
          onClick={() => setShowModalPreview(true)}
        >
          View Preview
        </button>
        <div className="containerr">
          <div className="left">
            <AccordianComponent title={"Enter the name of your QR code"}>
              <InputComponent
                placeholder="e.g My QR code"
                onChange={handleInputChange}
                name="qr_name"
                value={localQrData.qr_name}
              />
            </AccordianComponent>
            <AccordianComponent title={"Choose your design"}>
              <CutsomColorPickerComp
                colors={colors}
                qrData={localQrData}
                setQrData={setLocalQrData}
              />
            </AccordianComponent>
            <AccordianComponent title={"Add images"}>
              <div className="wrapper-img-upload-dashed">
                <ImageUploadMultipleComponent
                  // defaultImage={"/assets/images/default-img.png"}
                  onImageUpload={handleImageUpload}
                  onImageDelete={handleImageDelete}
                  label="Upload Image"
                  name="gallery_image"
                  localQrData={localQrData}
                />
              </div>
            </AccordianComponent>
            <AccordianComponent
              title={"Information about your images' gallery"}
            >
              <InputComponent
                label={"Image/photo/album title"}
                name={"gallery_title"}
                placeholder={"e.g. Our wedding album"}
                onChange={handleInputChange}
                value={localQrData?.gallery_title}
              />
              <InputComponent
                label={"Description"}
                name={"gallery_description"}
                placeholder={"e.g. Professional photos from our wedding day"}
                onChange={handleInputChange}
                value={localQrData?.gallery_description}
              />
              <InputComponent
                label={"Website"}
                name={"gallery_website"}
                placeholder={"e.g. https://www.ourweddingwebsite.com"}
                onChange={handleInputChange}
                value={localQrData?.gallery_website}
              />
              <div className="wrap-inp-cmp">
                <InputComponent
                  label={"Button text"}
                  name={"gallery_btn_text"}
                  placeholder={"e.g. Write your link text here..."}
                  onChange={handleInputChange}
                  value={localQrData?.gallery_btn_text}
                />
                <InputComponent
                  label={"URL"}
                  name={"gallery_url"}
                  type="url"
                  placeholder={"e.g. https://..."}
                  onChange={handleInputChange}
                  value={localQrData?.gallery_url}
                />
              </div>
            </AccordianComponent>
          </div>
          <div className="right">
            <>
              <ToggleButton
                selectedOption={selectedOption}
                onToggle={handleToggle}
              />
              <div className="qr-preview__layout__image">
                <div className="Preview-layout Preview-layout--vcard">
                  <TopPreviewHeader className="topHeaderSvg" />
                  <QRPreviewGallery localQrData={localQrData} />
                </div>
                <PreviewFrame className="preview-frame" />
              </div>
            </>

            {/* <img src="/assets/images/phone-image.png" alt="phone-image" /> */}
          </div>
        </div>
      </div>
      <ViewPreviewModal
        setShowModalPreview={setShowModalPreview}
        showModalPreview={showModalPreview}
        localQrData={localQrData}
        type={"image_gallery"}
      />
    </>
  );
};

export default GALLERY;
