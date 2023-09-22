import { FC } from "react";
import { Auth } from "components/auth/Auth";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryComponent } from "components/global/ErrorBoudaryComponent/ErrorBoundaryComponent";

const AuthPage: FC = (): JSX.Element => {
    return (
        <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
            <Auth />
        </ErrorBoundary>
    );
};

export default AuthPage;
