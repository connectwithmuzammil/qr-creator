// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// const ImageUploadComponent = ({ defaultImage, onImageUpload, onImageDelete, label }) => {
//   const [image, setImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//         if (onImageUpload) {
//           onImageUpload(reader.result);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleImageDelete = () => {
//     setImage(null);
//     if (onImageDelete) {
//       onImageDelete();
//     }
//   };

//   return (
//     <div className="img-upload-comp">
//       <div className="wrap">
//         <p>{label}</p>
//         <div className="img-wrapper">
//           <img
//             src={image || defaultImage}
//             alt="Uploaded"
//             className="uploaded-img"
//           />
//           <div className="icon-overlay">
//             <label htmlFor="file-upload" className="upload-icon">
//               <h3>+</h3>
//               <input
//                 type="file"
//                 id="file-upload"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//               />
//             </label>
//           </div>
//         </div>
//       </div>
//       {image && (
//         <button className="delete-icon" onClick={handleImageDelete}>
//           Delete
//         </button>
//       )}
//     </div>
//   );
// };

// ImageUploadComponent.propTypes = {
//   defaultImage: PropTypes.string.isRequired,
//   onImageUpload: PropTypes.func,
//   onImageDelete: PropTypes.func,
//   label: PropTypes.string.isRequired,
// };

// export default ImageUploadComponent;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ImageUploadComponent = ({ defaultImage, onImageUpload, onImageDelete, label }) => {
  const [image, setImage] = useState(null);

  // Generate a unique id for each instance of the component
  const uniqueId = `file-upload-${label.replace(/\s+/g, '-')}-${Math.random()}`;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        if (onImageUpload) {
          onImageUpload(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setImage(null);
    if (onImageDelete) {
      onImageDelete();
    }
  };

  return (
    <div className="img-upload-comp">
      <div className="wrap">
        <p>{label}</p>
        <div className="img-wrapper">
          <img
            src={image || defaultImage}
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
