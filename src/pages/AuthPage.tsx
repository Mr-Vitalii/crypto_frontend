import { FC } from "react";
import { Auth } from "components/Auth/Auth";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryComponent } from "components/ErrorBoudaryComponent/ErrorBoundaryComponent";

const AuthPage: FC = (): JSX.Element => {
    return (
        <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
            <Auth />
        </ErrorBoundary>
    );
};

export default AuthPage;
