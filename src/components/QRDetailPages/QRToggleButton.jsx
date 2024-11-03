import React from 'react';
import PropTypes from 'prop-types';

const ToggleButton = ({ selectedOption, onToggle }) => {
  return (
    <div className="qr-preview__header__buttons-toggle">
      <button
        aria-label="Preview Page"
        data-testid="button"
        data-qa="qr-editor-preview-button"
        className={`button button-toggle button--secondary button--square ${selectedOption === 'Preview Page' ? 'button--active' : 'button--inactive'}`}
        type="button"
        onClick={() => onToggle("Preview Page")}
      >
        <span data-testid="button-label" className="button__text">
          Preview Page
        </span>
      </button>
      <button
        aria-label="QR Code"
        data-testid="button"
        data-qa="qr-editor-qr-preview-button"
        className={`button button-toggle button--secondary button--square ${selectedOption === 'QR Code' ? 'button--active' : 'button--inactive'}`}
        type="button"
        onClick={() => onToggle("QR Code")}
      >
        <span data-testid="button-label" className="button__text">
          QR Code
        </span>
      </button>
    </div>
  );
};

// Prop types for validation
ToggleButton.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ToggleButton;
