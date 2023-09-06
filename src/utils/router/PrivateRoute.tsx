import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "utils/hooks";

export const PrivateRoute = () => {
    const { isLogged } = useAuth();

    return isLogged ? <Outlet /> : <Navigate to="login" />;
};
