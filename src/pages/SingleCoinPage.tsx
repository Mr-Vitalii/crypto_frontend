import { FC } from "react";
import { SingleCoin } from "components/SingleCoin/SingleCoin";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryComponent } from "components/global/ErrorBoudaryComponent/ErrorBoundaryComponent";

const SingleCoinPage: FC = (): JSX.Element => {
    return (
        <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
            <SingleCoin />
        </ErrorBoundary>
    );
};

export default SingleCoinPage;
