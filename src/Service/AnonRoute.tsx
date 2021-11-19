import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../context/UserContext";

export const AnonRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useContext(UserContext);
  return !!user ? <Navigate to="/eventlist" replace /> : children;
};
