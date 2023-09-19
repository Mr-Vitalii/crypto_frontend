import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { Grid, Box } from "@mui/material";
import { colors } from "theme";

export const FavoriteCardItem = styled(Grid)(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.secondaryBackground.main,
    padding: "20px 16px",
    minHeight: "185px",
    border: `1px solid ${theme.palette.borderColor.main}`,
    borderRadius: "12px",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

export const CoinDetails = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
});

export const AreaChartContainer = styled(Box)(
    ({ theme }: { theme: Theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            marginTop: "10px",
        },
    }),
);

export const PriceTrend = styled(Box)(({ trendup }: { trendup: boolean }) => ({
    width: "80px",
    display: "flex",
    alignItems: "center",
    padding: "2px",
    borderRadius: "4px",
    backgroundColor: trendup ? colors.greenAccent[200] : colors.redAccent[200],
    color: trendup ? colors.greenAccent[500] : colors.redAccent[500],
}));
