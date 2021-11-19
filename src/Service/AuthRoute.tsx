import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../context/UserContext";

export const AuthRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useContext(UserContext);
  return !!user ? children : <Navigate to="/login" replace />;
};
