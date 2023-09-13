import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    selectAllCoins,
    selectCoinsIsLoading,
    selectFavoriteCoins,
    selectFavoriteCoinsIsLoading,
} from "redux/coins/selectors";
import { Box, Grid } from "@mui/material";
import { getFavoriteCoins, getTopPriceData } from "redux/coins/thunks";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { useStyles } from "./styles";
import { FavoriteBlock } from "./FavoriteBlock/FavoriteBlock";
import { ICoinsData, ISingleCoin } from "common/types/coins";
import { LineChart } from "components/charts/LineChart/LineChart";
import { TopPrice } from "components/TopPrice/TopPrice";

import { ErrorComponent } from "components/ErrorComponent/ErrorComponent";
import { getErrorMessage } from "utils/helpers/getErrorMessage";
import { LoadingComponent } from "components/LoadingComponent/LoadingComponent";

export const Dashboard: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const fetchDataRef = useRef(false);
    const classes = useStyles();

    const favoriteCoins: ICoinsData[] = useAppSelector(selectFavoriteCoins);
    const favoriteCoinsIsLoading: boolean = useAppSelector(
        selectFavoriteCoinsIsLoading,
    );
    const topPriceTableIsLoading: boolean =
        useAppSelector(selectCoinsIsLoading);

    const [favoriteCoinsError, setFavoriteCoinsError] = useState<null | string>(
        null,
    );
    const [priceTableError, setPriceTableError] = useState<null | string>(null);

    const allCoins: ISingleCoin[] = useAppSelector(selectAllCoins);

    const favoriteCoinName = useMemo(() => ["bitcoin", "ethereum"], []);

    const fetchFavoriteCoins = useCallback(
        async (coinNames: string[]) => {
            for (const name of coinNames) {
                try {
                    await dispatch(getFavoriteCoins(name)).unwrap();
                } catch (error) {
                    setFavoriteCoinsError(getErrorMessage(error));
                    console.error("Error fetching FavoriteCoins:", error);
                }
            }
        },
        [dispatch],
    );

    const fetchTopPriceData = useCallback(async () => {
        try {
            await dispatch(getTopPriceData()).unwrap();
        } catch (error) {
            setPriceTableError(getErrorMessage(error));
            console.error("Error fetching TopPriceData:", error);
        }
    }, [dispatch]);

    useEffect(() => {
        if (fetchDataRef.current) return;
        fetchDataRef.current = true;
        fetchFavoriteCoins(favoriteCoinName);
        fetchTopPriceData();
    }, [favoriteCoinName, fetchFavoriteCoins, fetchTopPriceData, dispatch]);

    const filteredFavoriteCoinsArray = useMemo(() => {
        return favoriteCoins.filter(
            (value: ICoinsData, index: number, self: ICoinsData[]) => {
                return (
                    index ===
                    self.findIndex(
                        (coinData: ICoinsData) => coinData.name === value.name,
                    )
                );
            },
        );
    }, [favoriteCoins]);

    const filteredCoinsArray = allCoins
        .slice()
        .sort((a, b) => b.current_price - a.current_price);

    return (
        <Box className={classes.root}>
            {favoriteCoinsIsLoading ? (
                <LoadingComponent />
            ) : favoriteCoinsError ? (
                <ErrorComponent errorMessage={favoriteCoinsError} />
            ) : (
                <>
                    <Grid container spacing={2} className={classes.areaChart}>
                        {filteredFavoriteCoinsArray.map(
                            (element: ICoinsData) => (
                                <FavoriteBlock
                                    key={element.name}
                                    element={element}
                                />
                            ),
                        )}
                    </Grid>
                    <Grid container className={classes.lineChartBlock}>
                        <Grid item xs={12} sm={12} lg={12}>
                            {filteredFavoriteCoinsArray.length && (
                                <LineChart data={filteredFavoriteCoinsArray} />
                            )}
                        </Grid>
                    </Grid>
                </>
            )}
            {topPriceTableIsLoading ? (
                <LoadingComponent />
            ) : priceTableError ? (
                <ErrorComponent errorMessage={priceTableError} />
            ) : (
                <Grid container className={classes.topPriceRoot}>
                    <Grid item xs={12} sm={12} lg={12}>
                        {filteredCoinsArray.length && (
                            <TopPrice coins={filteredCoinsArray.slice(0, 6)} />
                        )}
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};
