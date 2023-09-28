import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryComponent } from "components/global/ErrorBoudaryComponent/ErrorBoundaryComponent";
import { EmailConfirmation } from "components/auth/EmailConfirmation/EmailConfirmation";

const ConfirmationPage: FC = (): JSX.Element => {
    return (
        <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
            <EmailConfirmation />
        </ErrorBoundary>
    );
};

export default ConfirmationPage;
