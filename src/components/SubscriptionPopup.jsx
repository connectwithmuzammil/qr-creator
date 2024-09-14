import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { useSelector } from "react-redux";

const SubscriptionPopup = () => {
  const { user } = useSelector((store) => store.user);
  console.log("USERSUBSCRIPTIONSTAGING", user);
  console.log("userSubscriptionPopup", user.expiry);
  return (
    (user?.user?.expiry === true || user?.expiry === true) && (
      <div className="subscriptionPopup">
        <div className="left">
          <MdErrorOutline />
          <p>
            Activate your subscription to get scannable codes, access to
            analytics, and more premium features!
          </p>
        </div>
        <button>Upgrade now</button>
      </div>
    )
  );
};

export default SubscriptionPopup;
