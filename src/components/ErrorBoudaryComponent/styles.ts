import { makeStyles } from "@mui/styles";
import { colors } from "theme";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: `${
                theme.palette.mode === "light"
                    ? colors.primaryWhiteTheme[500]
                    : colors.secondary[800]
            }`,
            padding: "20px 16px",
            marginBottom: 15,
            border: `1px solid ${theme.palette.borderColor.main}`,
            borderRadius: 12,
        },
    };
});
