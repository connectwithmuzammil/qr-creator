import React from "react";
import { Sidebar } from "../../components";

const MyAccount = () => {
  return (
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
                <div className="edit-info">
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
                <div className="edit-info">
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
                  <button>Activate account</button>
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
                <div className="edit-info">
                  <p>Change password</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
