import React, { FC } from "react";
import { WatchList } from "components/WatchList/WatchList";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryComponent } from "components/ErrorBoudaryComponent/ErrorBoundaryComponent";

const WatchListPage: FC = (): JSX.Element => {
    return (
        <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
            <WatchList />
        </ErrorBoundary>
    );
};

export default WatchListPage;
