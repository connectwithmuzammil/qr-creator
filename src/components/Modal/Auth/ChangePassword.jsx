import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import Button from "../../Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ChangePasswordSchema } from "../../../Helper/ValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import apis from "../../../services";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { setUser } from "../../../redux/slice/userSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

const ChangePassword = ({ newPassword, setNewPassword }) => {
  const { user } = useSelector((store) => store.user);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // console.log("userrr", user);
  const email = localStorage.getItem("forgotUserEmail");
  // console.log("chekkemai",email)
  const tokenFromUrl = searchParams.get("token");
  // console.log("tokenFromUrlbbb", tokenFromUrl);
  //CHANGE PASSWORD API
  const { mutate: mutateChangePass, isPending } = useMutation({
    mutationFn: apis.changePassword,
    onError: function (error) {
      // console.log("error", error);
      toast.error(error?.response?.data?.error);
    },
    onSuccess: ({ data: changePassword, status }) => {
      // console.log("changePassword successfully!!:", changePassword);
      if ((!user?.user || !user) && tokenFromUrl == null) {
        navigate("/login");
      } else if (tokenFromUrl) {
        navigate("/my-qr-codes");
        dispatch(setUser(changePassword));
      }
    },
  });

  const handleSubmit = (values, actions) => {
    const payload = {
      otp: values.otp,
      password: values.newPassword,
      email: email,
    };
    // console.log("Changing password with values:", values);

    mutateChangePass(payload, {
      onSuccess: () => {
        actions.resetForm();
        toast.success("Password Change Sucessfully!!");
        setNewPassword(false);
      },
    });

    // actions.resetForm();
  };

  return (
    <Modal
      show={newPassword}
      onHide={() => setNewPassword(false)}
      centered
      size="lg"
      className="changePassword"
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Create a new password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            newPassword: "",
            confirmPassword: "",
            otp: "",
          }}
          validationSchema={ChangePasswordSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <div className="input-wrap">
                <label>New password</label>
                <div className="wrap">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="newPassword"
                    placeholder="Type your new password"
                    className={`${
                      errors.newPassword && touched.newPassword
                        ? "input-error"
                        : ""
                    }`}
                  />
                  <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="error"
                />
              </div>
              <div className="input-wrap">
                <label>Confirm new password</label>
                <div className="wrap">
                  <Field
                    type={showNewPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Re-enter your new password"
                    className={`${
                      errors.confirmPassword && touched.confirmPassword
                        ? "input-error"
                        : ""
                    }`}
                  />
                  <span onClick={() => setShowNewPassword(!showNewPassword)}>
                    {showNewPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error"
                />
              </div>
              <div className="input-wrap">
                <label>OTP</label>
                <div className="wrap">
                  <Field
                    type={showOtp ? "text" : "password"}
                    name="otp"
                    placeholder="Please Enter OTP Code"
                    className={`${
                      errors.otp && touched.otp ? "input-error" : ""
                    }`}
                  />
                  <span onClick={() => setShowOtp(!showOtp)}>
                    {showOtp ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <ErrorMessage name="otp" component="div" className="error" />
              </div>
              <div className="btn-wrapper">
                <Button
                  title={"Accept New password"}
                  onClick={() => {}} // You can keep this or remove if not needed
                  isLoading={isPending}
                  disabled={isPending}
                  type="submit"
                />
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default ChangePassword;
