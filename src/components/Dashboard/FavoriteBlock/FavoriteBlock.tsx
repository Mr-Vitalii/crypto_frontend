import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import {
    AreaChartContainer,
    CoinDetails,
    FavoriteCardItem,
    PriceTrend,
} from "./styled-components";
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
        <Grid item xs={12} sm={12} lg={6}>
            <FavoriteCardItem container>
                <CoinDetails item xs={12} sm={12} lg={6}>
                    <Typography
                        variant="h2"
                        sx={{ textTransform: "capitalize" }}
                    >
                        {element.name}
                    </Typography>
                    <Box>
                        <Typography variant="h2">${currentPrice}</Typography>
                        <PriceTrend trendup={changePrice > 0}>
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
                </CoinDetails>
                <AreaChartContainer item xs={12} sm={12} lg={6}>
                    <AreaChart data={element.price_chart_data} />
                </AreaChartContainer>
            </FavoriteCardItem>
        </Grid>
    );
};
