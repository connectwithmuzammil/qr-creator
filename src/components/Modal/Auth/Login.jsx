import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import "../modal.css";
const Login = ({ showLogin, setShowLogin, onSwitchToSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Modal
      show={showLogin}
      onHide={() => setShowLogin(false)}
      centered
      size="lg"
      className="loginModal"
      // backdrop="static"
      // keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Welcome back!</Modal.Title>
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
          <div className="forgot-con">
            <p>
              Forgot your password? <span>Click here</span>
            </p>
          </div>
          <div className="btn-wrapper">
            <button>Log In</button>
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
              Don't have an account yet?{" "}
              <span onClick={onSwitchToSignUp}>Sign up!</span>
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
