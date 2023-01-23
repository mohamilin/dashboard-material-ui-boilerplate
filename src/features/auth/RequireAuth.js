import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { selectCurrentToken } from "./authSlice";

import React from "react";

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  if (token === undefined) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
