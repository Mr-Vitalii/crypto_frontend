import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            position: "static",
            borderBottom: `1px solid ${theme.palette.borderColor.main}`,
        },
        toolbar: {
            justifyContent: "space-between",
            padding: "25px 45px",
        },
        menuIcon: {
            marginRight: "10px",
            cursor: "pointer",
        },
    };
});
