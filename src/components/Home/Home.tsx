import { FC, useCallback, useEffect, useMemo, useRef } from "react";
import { selectAllCoins, selectFavoriteCoins } from "redux/coins/selectors";
import { Box, Grid } from "@mui/material";
import { getFavoriteCoins, getTopPriceData } from "redux/coins/thunks";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { useStyles } from "./styles";
import { FavoriteBlock } from "./FavoriteBlock/FavoriteBlock";
import { ICoinsData, ISingleCoin } from "common/types/coins";
import { LineChart } from "components/charts/LineChart/LineChart";
import { TopPrice } from "components/TopPrice/TopPrice";

export const Home: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const fetchDataRef = useRef(false);
    const classes = useStyles();
    const favoriteCoins: ICoinsData[] = useAppSelector(selectFavoriteCoins);
    const allCoins: ISingleCoin[] = useAppSelector(selectAllCoins);

    const favoriteCoinName = useMemo(() => ["bitcoin", "ethereum"], []);

    const fetchData = useCallback(
        (coinNames: string[]) => {
            coinNames.forEach((name: string) => {
                dispatch(getFavoriteCoins(name));
            });
        },
        [dispatch],
    );

    useEffect(() => {
        if (fetchDataRef.current) return;
        fetchDataRef.current = true;
        fetchData(favoriteCoinName);
        dispatch(getTopPriceData());
    }, [favoriteCoinName, fetchData, dispatch]);

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
            <Grid container spacing={2} className={classes.areaChart}>
                {filteredFavoriteCoinsArray.map((element: ICoinsData) => (
                    <FavoriteBlock key={element.name} element={element} />
                ))}
            </Grid>
            <Grid container className={classes.lineChartBlock}>
                <Grid item xs={12} sm={12} lg={12}>
                    {filteredFavoriteCoinsArray.length && (
                        <LineChart data={filteredFavoriteCoinsArray} />
                    )}
                </Grid>
            </Grid>
            <Grid container className={classes.topPriceRoot}>
                <Grid item xs={12} sm={12} lg={12}>
                    {filteredCoinsArray.length && (
                        <TopPrice coins={filteredCoinsArray.slice(0, 6)} />
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};
