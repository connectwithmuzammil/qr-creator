import React from "react";
import { Modal } from "react-bootstrap";
import Button from "../../Button";

const EditContactInfo = ({ showConactInfo, setShowContactInfo }) => {
  return (
    <Modal
      show={showConactInfo}
      onHide={() => setShowContactInfo(false)}
      centered
      size="lg"
      className="EditContactInfo"
      // backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Basic Contact Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form">
          <div className="main-wrap">
            <div className="input-wrap">
              <label>First name</label>
              <input type="text" name="" id="" placeholder="Muzammil" />
            </div>
            <div className="input-wrap">
              <label>Last name</label>
              <input type="text" name="" id="" placeholder="Khan" />
            </div>
          </div>
          <div className="input-wrap last">
            <label>Phone</label>
            <input type="text" name="" id="" placeholder="e.g 123-123-123" />
          </div>
          <div className="btn-wrapper">
            <Button title={"Save"} width={'140px'}/>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditContactInfo;
