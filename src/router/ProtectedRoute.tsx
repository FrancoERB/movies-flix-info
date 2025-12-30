import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth/session";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return children;
};
