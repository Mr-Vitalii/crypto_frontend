import { makeStyles } from "@mui/styles";
import { tokens } from "theme";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: `${
                theme.palette.mode === "light"
                    ? colors.primary.DEFAULT
                    : colors.primary[600]
            }`,
            padding: "20px 16px",
            marginBottom: 15,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
        },
    };
});
