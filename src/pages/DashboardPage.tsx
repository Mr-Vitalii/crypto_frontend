import { FC } from "react";
import { Dashboard } from "components/Dashboard/Dashboard";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryComponent } from "components/ErrorBoudaryComponent/ErrorBoundaryComponent";

const DashboardPage: FC = (): JSX.Element => {
    return (
        <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
            <Dashboard />
        </ErrorBoundary>
    );
};

export default DashboardPage;
