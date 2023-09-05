import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { tokens } from "theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        newsBlock: {
            justifyContent: "space-between",
            backgroundColor: `${
                theme.palette.mode === "light"
                    ? colors.primary.DEFAULT
                    : colors.primary[600]
            }`,
            padding: "20px 16px",
            marginBottom: 32,
            minHeight: 270,
            border: `1px solid ${colors.borderColor}`,
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
