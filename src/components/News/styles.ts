import { makeStyles } from "@mui/styles";
import { tokens } from "theme";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        root: {
            padding: 32,
            "& a": {
                textDecoration: "none",
                color: `${
                    theme.palette.mode === "light"
                        ? colors.black.DEFAULT
                        : colors.white.DEFAULT
                }`,
            },
        },
        blockTitle: {
            textAlign: "center",
            marginBottom: 32,
        },
    };
});
