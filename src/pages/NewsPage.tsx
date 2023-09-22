import { FC } from "react";
import { News } from "components/News/News";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryComponent } from "components/global/ErrorBoudaryComponent/ErrorBoundaryComponent";

const NewsPage: FC = (): JSX.Element => {
    return (
        <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
            <News />;
        </ErrorBoundary>
    );
};

export default NewsPage;
