import React from "react";
import { Modal } from "react-bootstrap";
import Button from "../../Button";

const ResetPassword = ({resetPassword, setResetPassword}) => {
  return (
    <Modal
      show={resetPassword}
      onHide={() => setResetPassword(false)}
      centered
      size="lg"
      className="resetPassword"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="content">
          <img src="/assets/images/resetPassImg.png" alt="resetPassImg" />
          <h3>Want to change your password?</h3>
          <p>We’ll send you an email to reset your password.</p>

          <Button title={"Reset password"} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ResetPassword;
