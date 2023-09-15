import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { colors } from "theme";

export const useStyles = makeStyles((theme: Theme) => {
    return {
        newsBlock: {
            justifyContent: "space-between",
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
        newsTitle: {
            marginBottom: 32,
        },
        textContainer: {
            maxHeight: 210,
            overflow: "hidden",
            marginBottom: "10px !important",
        },
        newsContainer: {
            display: "flex",
            gap: "0px 20px",
        },
        readMore: {
            textAlign: "center",
        },
    };
});
