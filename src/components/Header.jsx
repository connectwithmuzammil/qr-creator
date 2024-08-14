import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Login, SignUp } from "../components";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("login");
  const location = useLocation();
  console.log("lcoation", location.pathname);

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  const switchToLogin = () => {
    setModalType("login");
  };

  const switchToSignUp = () => {
    setModalType("signup");
  };
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      {location.pathname !== "/qr-editor" && (
        <div className="auth-con">
          <button onClick={() => openModal("login")}>Login</button>
          <button onClick={() => openModal("signup")}>Sign up</button>
        </div>
      )}

      {showModal && (
        <div className="modal">
          {modalType === "login" ? (
            <Login
              showLogin={modalType === "login"}
              setShowLogin={setShowModal}
              onSwitchToSignUp={switchToSignUp}
            />
          ) : (
            <SignUp
              showSignUp={modalType === "signup"}
              setShowSignUp={setShowModal}
              onSwitchToLogin={switchToLogin}
            />
          )}
          {/* <button onClick={closeModal} className="close-button">
            Close
          </button> */}
        </div>
      )}
    </header>
  );
};

export default Header;
