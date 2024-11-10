import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const ImageUploadComponent = ({
  defaultImage,
  onImageUpload,
  onImageDelete,
  label,
  name,
  localQrData,
  onEditImagePreview,
}) => {
  const [image, setImage] = useState(null);

  // Generate a unique id for each instance of the component
  const uniqueId = `file-upload-${label.replace(/\s+/g, "-")}-${Math.random()}`;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log("filetetstt", file);
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate a local URL for the file
      console.log("imageurlll", imageUrl);
      setImage(imageUrl);

      event.target.value = null;
      if (onImageUpload) {
        // Pass the name (identifier), imageUrl, and file object to the parent handler
        onImageUpload(imageUrl, name, file);
      }
    }
  };

  const handleImageDelete = () => {
    setImage(null);
    if (onImageDelete) {
      // onImageDelete();
      onImageDelete(name);
    }
  };

  return (
    <div className="img-upload-comp">
      <div className="wrap">
        <p>{label}</p>
        <div className="img-wrapper">
          <img
            src={
              // ? image
              // : onEditImagePreview
              // ? onEditImagePreview
              // : defaultImage
              image || onEditImagePreview || defaultImage
            }
            alt="Uploaded"
            className="uploaded-img"
          />
          <div className="icon-overlay">
            <label htmlFor={uniqueId} className="upload-icon">
              <h3>+</h3>
              <input
                type="file"
                id={uniqueId} // Use the unique id here
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>
      </div>
      {image && (
        <button className="delete-icon" onClick={handleImageDelete}>
          Delete
        </button>
      )}
    </div>
  );
};

ImageUploadComponent.propTypes = {
  defaultImage: PropTypes.string.isRequired,
  onImageUpload: PropTypes.func,
  onImageDelete: PropTypes.func,
  label: PropTypes.string.isRequired,
};

export default ImageUploadComponent;


