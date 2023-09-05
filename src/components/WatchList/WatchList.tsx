import { FC, useEffect } from "react";
import { ISingleCoin, IWatchlistCoin } from "common/types/coins";
import { CoinsTable } from "components/CoinsTable/CoinsTable";
import { selectAllCoins } from "redux/coins/selectors";
import { getTopPriceData } from "redux/coins/thunks";
import { selectWatchlist } from "redux/watchlist/selectors";
import { getWatchlistElements } from "redux/watchlist/thunks";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";

export const WatchList: FC = (): JSX.Element => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const watchlist = useAppSelector(selectWatchlist);
    const allCoins: ISingleCoin[] = useAppSelector(selectAllCoins);

    useEffect(() => {
        dispatch(getTopPriceData());
        dispatch(getWatchlistElements());
    }, [dispatch]);

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
                <CoinsTable coins={filteredArray} />
            </Grid>
        </Grid>
    );
};
