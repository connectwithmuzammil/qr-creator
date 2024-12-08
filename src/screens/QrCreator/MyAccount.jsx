import React, { useEffect, useState } from "react";
import {
  ChangePassword,
  EditContactInfo,
  ResetPassword,
  Sidebar,
  UpdateEmail,
  UpdateEmailAndPassword,
} from "../../components";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import apis from "../../services";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slice/userSlice";

const MyAccount = () => {
  const { user } = useSelector((store) => store.user);
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showConactInfo, setShowContactInfo] = useState(false);
  const [ShowUpdateEmail, setShowUpdateEmail] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [updateEmail, setUpdateEmail] = useState(false);
  // const [newPassword, setNewPassword] = useState(false);
  // const [token, setToken] = useState(null);
  // const [searchParams] = useSearchParams();

  //UPDATE USER API CALL
  const { mutate: mutateUpdateProfile, isPending: isloadingUpdateProfile } =
    useMutation({
      mutationFn: apis.updateProfile,
      onError: function (error) {
        // console.log("error", error);
        const errorMessage =
          error.response?.data?.email?.[0] || "An error occurred";
        // console.log("error", error);
        toast.error(errorMessage);
        // toast.error(error?.message);
      },
      onSuccess: ({ data: updateProfileSucess, status }) => {
        if (updateProfileSucess?.success) {
          toast.success(updateProfileSucess?.message);
          dispatch(setUser(updateProfileSucess?.data));
          setShowContactInfo(false);
        }
      },
    });
  //UPDATE EMAIL API CALL
  const { mutate: mutateUpdateEmail, isPending: isloadingUpdateEmail } =
    useMutation({
      mutationFn: apis.updateEmail,
      onError: function (error) {
        // console.log("error", error?.response?.data?.confirm_email);
        toast.error(error?.response?.data?.confirm_email[0]);
      },
      onSuccess: ({ data: updateEmailSucess, status }) => {
        // console.log("EMAIL update successfully!!:", updateEmailSucess);
        if (updateEmailSucess?.success) {
          toast.success(updateEmailSucess?.message);
          dispatch(setUser(updateEmailSucess?.data));
          setUpdateEmail(false);
        }
      },
    });
  // console.log("uSERR", user);

  //---------------------------------- RESET PASSWORD ---------------------------------------------------------//
  // useEffect(() => {
  //   const tokenFromUrl = searchParams.get("token");
  //   console.log("tokenFromUrl",tokenFromUrl)
  //   if (tokenFromUrl) {
  //     setToken(tokenFromUrl);
  //     setNewPassword(true);
  //   }
  // }, [searchParams]);

  // API CALL RESET PASS
  const { mutate: sendResetEmailMutate, isPending : isLoadingResetPass } = useMutation({
    mutationFn: apis.sendPasswordResetEmail, 
    onError: (error) => {
      toast.error(error?.message || "Failed to send reset email");
    },
    onSuccess: (response) => {
      if (response?.status) {
        toast.success(response?.data?.message);
        setResetPassword(false);
      } else {
        toast.error(response?.message || "Failed to send reset email");
      }
    },
  });

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
                    <p className="user-data-email">
                      {user?.user?.email || user?.email}
                    </p>
                  </div>
                  <div
                    className="edit-info"
                    onClick={() => setUpdateEmail(true)}
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
        sendResetEmailMutate={sendResetEmailMutate}
        isLoading={isLoadingResetPass}
      />
      {/* <ChangePassword
        newPassword={newPassword}
        setNewPassword={setNewPassword}
      /> */}
      <UpdateEmailAndPassword
        updateEmail={updateEmail}
        setUpdateEmail={setUpdateEmail}
        mutateUpdateEmail={mutateUpdateEmail}
        isLoading={isloadingUpdateEmail}
      />
    </>
  );
};

export default MyAccount;
