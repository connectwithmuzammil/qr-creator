import React from "react";
import { Button, Sidebar } from "../../components";

const MyBilling = () => {
  return (
    <div className="my-billing">
      <div className="userDashboard">
        <Sidebar />
        <div className="content-page">
          <div class="top">
            <h1>Billing</h1>
          </div>
          <div className="bottom">
            <div className="content">
              <img src="/assets/images/billing-page-img.png" alt="billing" />
              <p>Manage your billing details and access invoices</p>
              <h1>
                Choose a plan and track all your payment info in one place
              </h1>
              <Button title={"Browse plans"} redirect={"/pricing"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBilling;
