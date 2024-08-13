
import React from 'react';

const Step = ({ image, title, description }) => {
  return (
    <div className="steps">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Step;
