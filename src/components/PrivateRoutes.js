import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user } = useSelector((store) => store.user);
  const location = useLocation();
  console.log("userstateprivate", user);
  console.log(" ", location); // Log the location object

  // If there is no user (not authenticated), redirect to login page
  if (!user) {
    console.log("locationtest", location);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user is authenticated, render the component
  return <Component {...rest} />;
};

export default PrivateRoute;
