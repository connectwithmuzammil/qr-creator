import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import "../modal.css";
const SignUp = ({ showSignUp, setShowSignUp, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
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
        <div className="form-container">
          <div className="input-wrap">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="youremail@domain.com"
            />
          </div>
          <div className="input-wrap ">
            <label>Pasword</label>
            <div className="wrap">
              <input
                type={showPassword ? "text" : "password"}
                name="email"
                id=""
                placeholder="Enter your password"
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          <div className="btn-wrapper">
            <button>Create Account</button>
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
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;
