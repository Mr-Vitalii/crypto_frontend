import { FC, useCallback, useEffect } from "react";
import { IWatchlistCoin } from "common/types/watchlist";
import { ISingleCoin } from "common/types/coins";
import { CoinsTable } from "components/CoinsTable/CoinsTable";
import { selectAllCoins, selectCoinsIsLoading } from "redux/coins/selectors";
import { getTopPriceData } from "redux/coins/thunks";
import {
    selectWatchlist,
    selectWatchlistIsLoading,
} from "redux/watchlist/selectors";
import { getWatchlistElements } from "redux/watchlist/thunks";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { StyledBox } from "./styled-components";
import { getErrorMessage } from "utils/helpers/getErrorMessage";
import { LoadingComponent } from "components/LoadingComponent/LoadingComponent";
import { useErrorBoundary } from "react-error-boundary";

export const WatchList: FC = (): JSX.Element => {
    const { showBoundary } = useErrorBoundary();
    const dispatch = useAppDispatch();
    const watchlist = useAppSelector(selectWatchlist);
    const allCoins: ISingleCoin[] = useAppSelector(selectAllCoins);
    const theme = useTheme();

    const topPriceDataIsLoading: boolean = useAppSelector(selectCoinsIsLoading);
    const watchlistElementsIsLoading: boolean = useAppSelector(
        selectWatchlistIsLoading,
    );

    const fetchTopPriceData = useCallback(async () => {
        try {
            await dispatch(getTopPriceData()).unwrap();
        } catch (error) {
            showBoundary(getErrorMessage(error));
        }
    }, [dispatch, showBoundary]);

    const fetchWatchlistElements = useCallback(async () => {
        try {
            await dispatch(getWatchlistElements()).unwrap();
        } catch (error) {
            showBoundary(getErrorMessage(error));
        }
    }, [dispatch, showBoundary]);

    useEffect(() => {
        fetchTopPriceData();
        fetchWatchlistElements();
    }, [dispatch, fetchTopPriceData, fetchWatchlistElements]);

    const filteredArray = allCoins.filter((element: ISingleCoin) => {
        return watchlist.some((watchlistElement: IWatchlistCoin) => {
            return watchlistElement.coinId === element.id;
        });
    });

    return (
        <>
            <Box sx={{ textAlign: "center" }}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                    Favorites
                </Typography>
            </Box>
            <StyledBox sx={{ px: 2, py: 3, mb: 4 }}>
                {topPriceDataIsLoading || watchlistElementsIsLoading ? (
                    <LoadingComponent />
                ) : (
                    <CoinsTable coins={filteredArray} />
                )}
            </StyledBox>
        </>
    );
};
