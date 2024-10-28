import React from "react";
import { Modal } from "react-bootstrap";
import { DeleteSVG } from "../../SVGIcon";

const ConfirmationModal = ({
  showConfirmationModal,
  setShowConfirmationModal,
}) => {
  return (
    <Modal
      show={showConfirmationModal}
      onHide={() => setShowConfirmationModal(false)}
      centered
      size="lg"
      className="confirmationModal"
      // backdrop="static"
      // keyboard={false}
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <DeleteSVG />
        <h2>Are you sure you want to pause this QR code?</h2>
        <div className="btn-con">
          <button className="cancel">Cancel</button>
          <button className="pause">Yes, Paused</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmationModal;
