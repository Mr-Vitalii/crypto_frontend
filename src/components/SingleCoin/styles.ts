import { makeStyles } from "@mui/styles";
import { colors } from "../../theme";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            padding: 5,
            alignItems: "center",
        },
        coinName: {
            display: "flex",
            justifyContent: "center",
            margin: "50px 0 !important",
        },
        card: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        cardItem: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: `${
                theme.palette.mode === "light"
                    ? colors.primaryWhiteTheme[500]
                    : colors.secondary[800]
            }`,
            padding: "20px 16px",
            width: "100%",
            maxWidth: 500,
            minHeight: 185,
            marginBottom: "25px !important",
            border: `1px solid ${theme.palette.borderColor.main}`,
            borderRadius: 12,
        },
        coinIcon: {
            marginRight: 2,
        },
        coinSymbol: {
            fontSize: 20,
            fontWeight: 600,
        },
        cardTitle: {
            fontSize: 20,
            fontWeight: 600,
            marginRight: 2,
        },
        coinPrice: {
            fontSize: 20,
        },
        coinPriceDetail: {
            fontSize: 20,
        },
        trendUp: {
            color: `${colors.greenAccent[200]}`,
        },
        trendDown: {
            color: `${colors.redAccent[200]}`,
        },
        cardButtonBlock: {
            marginTop: 25,
        },
        cardButton: {
            "&:first-child": {
                marginRight: 20,
            },
        },
    };
});
