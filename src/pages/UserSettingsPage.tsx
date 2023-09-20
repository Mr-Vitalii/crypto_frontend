import { FC } from "react";
import { UserSettings } from "components/UserSettingss/UserSettingss";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryComponent } from "components/global/ErrorBoudaryComponent/ErrorBoundaryComponent";

const UserSettingsPage: FC = (): JSX.Element => {
    return (
        <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
            <UserSettings />
        </ErrorBoundary>
    );
};

export default UserSettingsPage;
