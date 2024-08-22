import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Forgot, Login, SignUp } from "../components";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("login");
  const [User, setUser] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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
  const switchToForgot = () => {
    setModalType("forgot");
  };
  return (
    <>
      {/* {location.pathname !== "/my-qr-codes" && ( */}
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {/* {location.pathname !== "/qr-editor" && ( */}
        <div className="auth-con">
          {User ? (
            <button
              onClick={() => navigate("/my-qr-codes")}
              className="my-account-btn"
            >
              My Account
            </button>
          ) : (
            <>
              <button onClick={() => openModal("login")} className="login">
                Login
              </button>
              <button onClick={() => openModal("signup")} className="signup">
                Sign Up
              </button>
            </>
          )}
        </div>
        {/* )} */}

        {showModal && (
          <div className="modal">
            {modalType === "login" && (
              <Login
                showLogin={modalType === "login"}
                setShowLogin={setShowModal}
                onSwitchToSignUp={switchToSignUp}
                onSwitchToForgot={switchToForgot}
              />
            )}
            {modalType === "signup" && (
              <SignUp
                showSignUp={modalType === "signup"}
                setShowSignUp={setShowModal}
                onSwitchToLogin={switchToLogin}
              />
            )}
            {modalType === "forgot" && (
              <Forgot
                showForgot={modalType === "forgot"}
                setShowForgot={setShowModal}
                onSwitchToLogin={switchToLogin}
              />
            )}
          </div>
        )}
      </header>
      {/* )} */}
    </>
  );
};

export default Header;
