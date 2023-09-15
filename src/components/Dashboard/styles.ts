import { makeStyles } from "@mui/styles";
import { colors } from "theme";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            flexGrow: 1,
            padding: 32,
        },
        areaChart: {
            marginBottom: 32,
        },
        lineChartBlock: {
            backgroundColor: `${
                theme.palette.mode === "light"
                    ? colors.primaryWhiteTheme[500]
                    : colors.secondary[800]
            }`,
            padding: "20px 16px",
            marginBottom: 32,
            minHeight: 270,
            border: `1px solid ${theme.palette.borderColor.main}`,
            borderRadius: 12,
        },
        topPriceRoot: {
            backgroundColor: `${
                theme.palette.mode === "light"
                    ? colors.primaryWhiteTheme[500]
                    : colors.secondary[800]
            }`,
            padding: "20px 16px",
            marginBottom: 32,
            minHeight: 270,
            border: `1px solid ${theme.palette.borderColor.main}`,
            borderRadius: 12,
            "& .MuiPaper-root": {
                backgroundColor: "transparent !important",
                boxShadow: "none !important",
                backgroundImage: "none !important",
            },
        },
    };
});
