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
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { getErrorMessage } from "utils/helpers/getErrorMessage";
import { LoadingComponent } from "components/LoadingComponent/LoadingComponent";
import { useErrorBoundary } from "react-error-boundary";

export const WatchList: FC = (): JSX.Element => {
    const classes = useStyles();
    const { showBoundary } = useErrorBoundary();
    const dispatch = useAppDispatch();
    const watchlist = useAppSelector(selectWatchlist);
    const allCoins: ISingleCoin[] = useAppSelector(selectAllCoins);

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
        <Grid className={classes.root}>
            <Grid className={classes.watchlistHeading}>
                <Typography variant="h2" className={classes.heading}>
                    Favorites
                </Typography>
            </Grid>
            <Grid className={classes.coinsTableBlock}>
                {topPriceDataIsLoading || watchlistElementsIsLoading ? (
                    <LoadingComponent />
                ) : (
                    <CoinsTable coins={filteredArray} />
                )}
            </Grid>
        </Grid>
    );
};
