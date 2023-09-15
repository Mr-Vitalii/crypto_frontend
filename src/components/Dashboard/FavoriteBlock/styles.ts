import { makeStyles } from "@mui/styles";
import { colors } from "theme";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
    return {
        topCardItem: {
            backgroundColor: `${
                theme.palette.mode === "light"
                    ? colors.primaryWhiteTheme[500]
                    : colors.secondary[800]
            }`,
            padding: "20px 16px",
            minHeight: 185,
            border: `1px solid ${theme.palette.borderColor.main}`,
            borderRadius: 12,
        },
        assetName: {
            fontSize: 25,
            fontWeight: 600,
            lineHeight: "30px",
            textTransform: "capitalize",
        },
        itemDetails: {
            display: "flex",
            height: `calc(100% - 35px)`,
            flexDirection: "column",
            justifyContent: "flex-end",
        },
        cardPrice: {
            fontSize: 32,
            fontWeight: 700,
            lineHeight: "48px",
        },
        priceTrend: {
            width: 80,
            display: "flex",
            alignItems: "center",
            padding: "2px",
            borderRadius: 4,
        },
        trendUp: {
            backgroundColor: `${colors.greenAccent[200]}`,
            color: `${colors.greenAccent[500]}`,
        },
        trendDown: {
            backgroundColor: `${colors.redAccent[200]}`,
            color: `${colors.redAccent[500]}`,
        },
    };
});
