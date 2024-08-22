import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signUpSchema } from "../../../Helper/ValidationSchema.js";

import "../modal.css";
import apis from "../../../services";
const SignUp = ({ showSignUp, setShowSignUp, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //   const handleSubmit = async (e) => {
  //     try {
  //       const body = {
  //         username: "testuser",
  //         email: "testuser@example.com",
  //         password: "testpassword",
  //       };
  //       const response = await apis.authRegister(body);
  //       console.log("API Response:", response.data);
  //     } catch (error) {
  //       console.error("API Error:", error.response?.data || error.message); // Log the error if any
  //     }
  //   };
  //   handleSubmit();
  // }, []);

  const handleSubmit = (values) => {
    // console.log("values", values);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Modal
          show={showSignUp}
          onHide={() => setShowSignUp(false)}
          centered
          size="lg"
          className="loginModal"
          // backdrop="static"
          // keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="form-container">
              <div className="input-wrap">
                <label>Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="youremail@domain.com"
                  className={`${
                    errors.email && touched.email ? "input-error" : ""
                  }`}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="input-wrap ">
                <label>Pasword</label>
                <div className="wrap">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className={`${
                      errors.password && touched.password ? "input-error" : ""
                    }`}
                  />
                  <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <div className="btn-wrapper">
                <button type="submit">Create Account</button>
              </div>
              <div className="line-container">
                <hr className="line" />
                <span className="text">or</span>
                <hr className="line" />
              </div>
              <div className="google-con">
                <FcGoogle />
                <p>Continue with Google</p>
              </div>
              <div className="signup-con">
                <p>
                  Already have an account?{" "}
                  <span onClick={onSwitchToLogin}>Log In</span>
                </p>
              </div>
              <div className="terms-con">
                <p>
                  By clicking "Create Account" or signing up with your Google
                  account, I expressly accept the{" "}
                  <span> Terms and Conditions </span> and
                  <span> Privacy policy.</span>
                </p>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </Formik>
  );
};

export default SignUp;
