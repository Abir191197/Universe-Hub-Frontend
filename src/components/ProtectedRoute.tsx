import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useCurrentToken } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hook";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = useAppSelector(useCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
