import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "../../Button";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../redux/slice/userSlice";

const EditContactInfo = ({
  showConactInfo,
  setShowContactInfo,
  updateProfile,
  isLoading,
}) => {
  const { user } = useSelector((store) => store.user); 
  // const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    first_name: "Muzammil",
    last_name: "Khan",
    phone_no: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user?.first_name || "",
        last_name: user?.last_name || "",
        phone_no: user?.phone_no || "",
      });
    }
  }, [user]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
  

  };
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
        <form className="form" onSubmit={handleSubmit}>
          <div className="main-wrap">
            <div className="input-wrap">
              <label>First name</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                placeholder="Muzammil"
                required
              />
            </div>
            <div className="input-wrap">
              <label>Last name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                placeholder="Khan"
                required
              />
            </div>
          </div>
          <div className="input-wrap last">
            <label>Phone</label>
            <input
              type="text"
              name="phone_no"
              value={formData.phone_no}
              onChange={handleInputChange}
              placeholder="e.g 123-123-123"
              required
            />
          </div>
          <div className="btn-wrapper">
            <Button
              title={"Save"}
              width={"140px"}
              onClick={handleSubmit}
              isLoading={isLoading}
              disabled={isLoading}
            />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditContactInfo;
