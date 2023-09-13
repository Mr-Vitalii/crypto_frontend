import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import TrendUp from "assets/images/chart/trend-up.svg";
import TrendDown from "assets/images/chart/trend-down.svg";
import { IFavoriteBlockProps, ISingleCoin } from "common/types/coins";
import { AreaChart } from "components/charts/AreaChart/AreaChart";

export const FavoriteBlock: FC<IFavoriteBlockProps> = ({
    element,
}): JSX.Element => {
    const classes = useStyles();

    let currentPrice = 0;
    let changePrice = 0;
    element.singleCoin.forEach((element: ISingleCoin) => {
        currentPrice = element.current_price;
        changePrice = element.price_change_percentage_24h;
    });

    return (
        <Grid item xs={12} sm={6} lg={6} key={element.name}>
            <Grid container className={classes.topCardItem}>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography variant="h2" className={classes.assetName}>
                        {element.name}
                    </Typography>
                    <Box className={classes.itemDetails}>
                        <Typography variant="h2" className={classes.cardPrice}>
                            ${currentPrice}
                        </Typography>
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
                            <Typography variant="body2">
                                {Number(changePrice).toFixed(2)}%
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <AreaChart data={element.price_chart_data} />
                </Grid>
            </Grid>
        </Grid>
    );
};
