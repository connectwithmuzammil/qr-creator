import React, { useState } from "react";
import {
  ChangePassword,
  EditContactInfo,
  ResetPassword,
  Sidebar,
  UpdateEmail,
} from "../../components";
import { useNavigate } from "react-router-dom";
import apis from "../../services";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slice/userSlice";

const MyAccount = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showConactInfo, setShowContactInfo] = useState(false);
  const [ShowUpdateEmail, setShowUpdateEmail] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);

  //UPDATE USER API CALL
  const { mutate: mutateUpdateProfile, isPending: isloadingUpdateProfile } =
    useMutation({
      mutationFn: apis.updateProfile,
      onError: function (error) {
        // console.log("error", error);
        toast.error(error?.message);
      },
      onSuccess: ({ data: updateProfileSucess, status }) => {
        console.log("update profile successfully!!:", updateProfileSucess);
        if (updateProfileSucess?.success) {
          toast.success(updateProfileSucess?.message);
          dispatch(setUser(updateProfileSucess?.data));
          setShowContactInfo(false);
        }
      },
    });
  console.log("uSERR", user);

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
                        First name <span>{user?.first_name}</span>
                      </p>
                      <p>
                        Last name <span>{user?.last_name}</span>
                      </p>
                    </div>
                    <p>
                      Phone <span>{user?.phone_no}</span>
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
        updateProfile={mutateUpdateProfile}
        isLoading={isloadingUpdateProfile}
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
