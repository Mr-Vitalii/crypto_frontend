import { makeStyles } from "@mui/styles";
import { colors } from "theme";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            padding: 32,
            "& a": {
                textDecoration: "none",
                color: `${
                    theme.palette.mode === "light"
                        ? colors.blackAccent[500]
                        : colors.whiteAccent[500]
                }`,
            },
        },
        blockTitle: {
            textAlign: "center",
            marginBottom: 32,
        },
    };
});
