import React from "react";
import { Modal } from "react-bootstrap";
import Button from "../../Button";

const UpdateEmail = ({ ShowUpdateEmail, setShowUpdateEmail }) => {
  return (
    <Modal
      show={ShowUpdateEmail}
      onHide={() => setShowUpdateEmail(false)}
      centered
      size="lg"
      className="updateEmail"
    >
      <Modal.Header closeButton>
        <Modal.Title>Update email address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Your email has been automatically set based on your Google Account
          information. Contact us to change it.
        </p>
        <div className="btn-wrapper">
          <Button title={"Request change"} redirect={"/contact-us"} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateEmail;
