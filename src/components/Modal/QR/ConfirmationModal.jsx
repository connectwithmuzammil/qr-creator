import React from "react";
import { Modal } from "react-bootstrap";
import { DeleteSVG, ActivePausedSVG } from "../../SVGIcon";

const ConfirmationModal = ({
  showConfirmationModal,
  setShowConfirmationModal,
  onConfirm, // function to handle confirmation action
  title,
  svgType,
  confirmButtonText,
}) => {
  return (
    <Modal
      show={showConfirmationModal}
      onHide={() => setShowConfirmationModal(false)}
      centered
      size="lg"
      className="confirmationModal"
    >
      <Modal.Header closeButton />
      <Modal.Body>
        {svgType === "delete" ? <DeleteSVG /> : <ActivePausedSVG />}
        <h2>{title}</h2>
        <div className="btn-con">
          <button className="cancel" onClick={() => setShowConfirmationModal(false)}>
            Cancel
          </button>
          <button className="pause" onClick={onConfirm}>
            {confirmButtonText}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmationModal;
