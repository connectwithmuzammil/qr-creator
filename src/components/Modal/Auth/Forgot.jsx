import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema for email
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const Forgot = ({
  showForgot,
  setShowForgot,
  onSwitchToLogin,
  isPending,
  mutateForgot,
}) => {
  const handleSubmit = (values, actions) => {
    if (values) {
      mutateForgot(
        { email: values.email },
        {
          onSuccess: () => {
            localStorage.setItem("forgotUserEmail", values.email);
            actions.resetForm();
          },
        }
      );
    }
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Modal
          show={showForgot}
          onHide={() => setShowForgot(false)}
          centered
          size="lg"
          className="loginModal forgot"
        >
          <Modal.Header closeButton>
            <Modal.Title>Forgot your password?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="form-container">
              <p className="forgot-txt">
                Enter the email address you used to create your account. We’ll
                send you an email to reset your password.
              </p>

              {/* Email Input */}
              <div className="input-wrap forgot">
                <label htmlFor="email">Email</label>
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

              {/* Submit Button */}
              <div className="btn-wrapper">
                <button
                  type="submit"
                  disabled={isPending}
                  style={{ background: "#00af63" }}
                >
                  {isPending ? "Loading..." : "Reset password"}
                </button>
              </div>

              {/* Cancel Button */}
              <div className="btn-wrapper">
                <button type="button" onClick={onSwitchToLogin}>
                  Cancel
                </button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </Formik>
  );
};

export default Forgot;
