import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { ChangePassword, Forgot, Login, SignUp } from "../components";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import apis from "../services";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slice/userSlice";

const Header = () => {
  const { user } = useSelector((store) => store.user);
  console.log("userHeader", user);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("login");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState(false);
  const [token, setToken] = useState(null);

  //OPEN CHANGE PASSWORD MODAL

  useEffect(() => {
    const tokenFromUrl = searchParams.get("token");
    console.log("tokenFromUrl", tokenFromUrl);
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      setNewPassword(true); // Open the change password modal if token is present
    }
  }, [searchParams]);

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

  //SIGN API CALL
  const { mutate: mutateSignup, isPending } = useMutation({
    mutationFn: apis.signup,
    onError: function (error) {
      const errorMessage =
        error.response?.data?.email?.[0] || "An error occurred";
      // console.log("error", error);
      toast.error(errorMessage);
    },
    onSuccess: ({ data: signupSucess, status }) => {
      // console.log("signupSucessfully!!:", signupSucess);
      if (signupSucess?.success) {
        toast.success(signupSucess?.message);
        setModalType("login");
        setShowModal(true);
      }
    },
  });

  //LOGIN API CALL
  const { mutate: mutateLogin, isPending: isloadingLogin } = useMutation({
    mutationFn: apis.login,
    onError: function (error) {
      // console.log("error", error);
      toast.error(error?.message);
    },
    onSuccess: ({ data: loginSucess, status }) => {
      console.log("loginSucessfully!!:", loginSucess);
      if (loginSucess?.success) {
        toast.success(loginSucess?.message);
        setShowModal(false);
        dispatch(setUser(loginSucess?.data));
        localStorage.setItem("token", loginSucess?.token);
      }
    },
  });

  return (
    <>
      {/* {location.pathname !== "/my-qr-codes" && ( */}
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {/* {location.pathname !== "/qr-editor" && ( */}
        <div className="auth-con">
          {user || user?.user ? (
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
                mutateLogin={mutateLogin}
                isPending={isloadingLogin}
              />
            )}
            {modalType === "signup" && (
              <SignUp
                showSignUp={modalType === "signup"}
                setShowSignUp={setShowModal}
                onSwitchToLogin={switchToLogin}
                mutateSignup={mutateSignup}
                isPending={isPending}
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

      <ChangePassword
        newPassword={newPassword}
        setNewPassword={setNewPassword}
      />
    </>
  );
};

export default Header;
