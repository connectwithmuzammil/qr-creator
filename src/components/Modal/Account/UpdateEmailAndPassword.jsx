import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import Button from "../../Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";

const UpdateEmailAndPassword = ({
  updateEmail,
  setUpdateEmail,
  mutateUpdateEmail,
  isLoading,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const { user } = useSelector((store) => store.user);
  // console.log("userrUpdateEmailPage", user);
  const currentEmail = user?.email || user?.user?.email;
  const currentPass = user?.password || user?.user?.password;

  // Formik setup with validation schema
  const formik = useFormik({
    initialValues: {
      password: currentPass || "",
      email: currentEmail || "",
      confirm_email: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      password: Yup.string().required("Password is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      confirm_email: Yup.string()
        .email("Invalid email format")
        .required("Confirm email is required")
        .test(
          "emails-dont-match",
          "Confirm email must not match email",
          function (value) {
            return value !== this.parent.email;
          }
        ),
    }),
    onSubmit: (values) => {
      mutateUpdateEmail(values);
    },
  });

  return (
    <Modal
      show={updateEmail}
      onHide={() => setUpdateEmail(false)}
      centered
      size="lg"
      className="changePassword"
    >
      <Modal.Header closeButton>
        <Modal.Title>Update Email and Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="input-wrap">
            <label>Enter your password</label>
            <div className="wrap">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="input-wrap">
            <label>Enter your new email address</label>
            <div className="wrap">
              <input
                type="email"
                name="email"
                placeholder="Enter your new email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="input-wrap">
            <label>Confirm your new email address</label>
            <div className="wrap">
              <input
                type="email"
                name="confirm_email"
                placeholder="Confirm your new email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirm_email}
              />
            </div>
            {formik.touched.confirm_email && formik.errors.confirm_email ? (
              <div className="error">{formik.errors.confirm_email}</div>
            ) : null}
          </div>

          <div
            className="btn-wrapper"
            style={{ textAlign: "center", width: "100%" }}
          >
            <button
              type="submit"
              disabled={isLoading}
              className="btn-updateEmail"
            >
              {isLoading ? "Saving" : "Save"}
            </button>
            {/* <Button
              title="Save"
              width="100%" // Set button width
              isLoading={isLoading} // Show loading state during mutation
              disabled={isLoading || !formik.isValid} // Disable if loading or form is invalid
            /> */}
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateEmailAndPassword;
