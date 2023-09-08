import React, { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "utils/hooks";

export const PrivateRoute: FC = (): JSX.Element => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <Outlet /> : <Navigate to="login" />;
};
