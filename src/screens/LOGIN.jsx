import React, { useState } from "react";
import { toast } from "react-toastify";
import { setUser } from "../redux/slice/userSlice";
import { useMutation } from "@tanstack/react-query";
import apis from "../services";
import { Forgot, Login, SignUp } from "../components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LOGINSCREEN = () => {
  const [showModal, setShowModal] = useState(true);
  const [modalType, setModalType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

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
        navigate("/");
        setShowModal(false);
        dispatch(setUser(loginSucess?.data));
        localStorage.setItem("token", loginSucess?.token);
      }
    },
  });
  return (
    <>
    
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
    </>
  );
};

export default LOGINSCREEN;
