import React, { useState } from "react";
import {
  ChangePassword,
  EditContactInfo,
  ResetPassword,
  Sidebar,
  UpdateEmail,
} from "../../components";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const navigate = useNavigate();
  const [showConactInfo, setShowContactInfo] = useState(false);
  const [ShowUpdateEmail, setShowUpdateEmail] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);

  return (
    <>
      <div className="my-account">
        <div className="userDashboard">
          <Sidebar />
          <div className="content-page">
            <div class="top">
              <h1>Account</h1>
              <p>
                Account ID <span> KUT9AR0T2K</span>
              </p>
            </div>
            <div className="bottom">
              <div className="card-con">
                <div className="cardd">
                  <div className="heading">
                    <h1>Basic Contact Information</h1>
                  </div>
                  <div className="user-detail">
                    <div className="wrap">
                      <p>
                        First name <span>Muzammil</span>
                      </p>
                      <p>
                        Last name <span>Khan</span>
                      </p>
                    </div>
                    <p>
                      Phone <span></span>
                    </p>
                  </div>
                  <div
                    className="edit-info"
                    onClick={() => setShowContactInfo(true)}
                  >
                    <p>Edit information</p>
                  </div>
                </div>
                <div className="cardd">
                  <div className="heading">
                    <h1>Email Address</h1>
                  </div>
                  <div className="user-detail">
                    <p>Click on the button below to update your email.</p>
                    <p className="user-data-email">muzammilmmk.77@gmail.com</p>
                  </div>
                  <div
                    className="edit-info"
                    onClick={() => setShowUpdateEmail(true)}
                  >
                    <p>Update email</p>
                  </div>
                </div>
                <div className="cardd">
                  <div className="heading">
                    <h1>Account status</h1>
                  </div>
                  <div className="user-detail">
                    <p>
                      Subscribe to access premium features including analytics
                    </p>
                  </div>
                  <div className="edit-account-status">
                    <p>Inactive</p>
                    <button onClick={() => navigate("/pricing")}>
                      Activate account
                    </button>
                  </div>
                </div>
                <div className="cardd">
                  <div className="heading">
                    <h1>Password</h1>
                  </div>
                  <div className="user-detail">
                    <p>Click on the button below to change your password</p>
                    <p>********</p>
                  </div>
                  <div
                    className="edit-info"
                    onClick={() => setResetPassword(true)}
                  >
                    <p>Change password</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditContactInfo
        setShowContactInfo={setShowContactInfo}
        showConactInfo={showConactInfo}
      />
      <UpdateEmail
        ShowUpdateEmail={ShowUpdateEmail}
        setShowUpdateEmail={setShowUpdateEmail}
      />
      <ResetPassword
        resetPassword={resetPassword}
        setResetPassword={setResetPassword}
      />
      <ChangePassword
        newPassword={newPassword}
        setNewPassword={setNewPassword}
      />
    </>
  );
};

export default MyAccount;
