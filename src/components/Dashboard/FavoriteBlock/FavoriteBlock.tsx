import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { FavoriteCardItem, PriceTrend } from "./styled-components";
import TrendUp from "assets/images/chart/trend-up.svg";
import TrendDown from "assets/images/chart/trend-down.svg";
import { IFavoriteBlockProps, ISingleCoin } from "common/types/coins";
import { AreaChart } from "components/charts/AreaChart/AreaChart";

export const FavoriteBlock: FC<IFavoriteBlockProps> = ({
    element,
}): JSX.Element => {
    let currentPrice = 0;
    let changePrice = 0;
    element.singleCoin.forEach((element: ISingleCoin) => {
        currentPrice = element.current_price;
        changePrice = element.price_change_percentage_24h;
    });

    return (
        <Grid item xs={12} sm={6} lg={6} key={element.name}>
            <FavoriteCardItem container>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{ textTransform: "capitalize" }}
                    >
                        {element.name}
                    </Typography>
                    <Box>
                        <Typography variant="h2">${currentPrice}</Typography>
                        <PriceTrend trendUp={changePrice > 0}>
                            {changePrice > 0 ? (
                                <img src={TrendUp} alt="TrendUp" />
                            ) : (
                                <img src={TrendDown} alt="TrendDown" />
                            )}
                            <Typography variant="body2">
                                {Number(changePrice).toFixed(2)}%
                            </Typography>
                        </PriceTrend>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <AreaChart data={element.price_chart_data} />
                </Grid>
            </FavoriteCardItem>
        </Grid>
    );
};
