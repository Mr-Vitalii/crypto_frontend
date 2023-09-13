import { useAuth } from "utils/hooks";
import { RouteProps } from "common/types/routes";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({
    component: Component,
    redirectTo = "/",
}: RouteProps): JSX.Element => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
