import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            display: "flex",
            justifyContent: "center",
            padding: 32,
        },
        tabsWrapper: {
            borderBottom: `1px solid ${theme.palette.borderColor.main}`,
        },
    };
});
