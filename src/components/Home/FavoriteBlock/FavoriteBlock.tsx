import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import TrendUp from "assets/images/chart/trend-up.svg";
import TrendDown from "assets/images/chart/trend-down.svg";
import { IChartData } from "common/types/coins";
import { AreaChart } from "components/charts/AreaChart/AreaChart";

export const FavoriteBlock = (props: any) => {
    const { element } = props;
   
    const classes = useStyles();

    const currentPrice = element.singleCoin.map(
        (element: any) => element.current_price,
    );
    const currentCap = element.singleCoin.map(
        (element: any) => element.market_cap,
    );
    const changePrice = element.singleCoin.map(
        (element: any) => element.price_change_percentage_24h,
    );

    return (
        <Grid item xs={12} sm={6} lg={6} key={element.name}>
            <Grid container className={classes.topCardItem}>
                <Grid item xs={12} sm={6} lg={6}>
                    <h3 className={classes.assetName}>{element.name}</h3>
                    <div className={classes.itemDetails}>
                        <h3 className={classes.cardPrice}>${currentPrice}</h3>
                        <Box
                            className={
                                changePrice > 0
                                    ? `${classes.priceTrend} ${classes.trendUp}`
                                    : `${classes.priceTrend} ${classes.trendDown}`
                            }
                        >
                            {changePrice > 0 ? (
                                <img src={TrendUp} alt="TrendUp" />
                            ) : (
                                <img src={TrendDown} alt="TrendDown" />
                            )}
                            <span>{Number(changePrice).toFixed(2)}%</span>
                        </Box>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <AreaChart data={element.price_chart_data} />
                </Grid>
            </Grid>
        </Grid>
    );
};
