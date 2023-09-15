import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { colors } from "theme";

export const useStyles = makeStyles((theme: Theme) => {
    return {
        navBlock: {
            width: "100%",
            borderBottom: `1px solid ${theme.palette.borderColor.main}`,
        },
        brand: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "30px 15px",
            cursor: "pointer",
        },
        brandTitle: {
            color: `${
                theme.palette.mode === "dark"
                    ? colors.whiteAccent[500]
                    : colors.blackAccent[500]
            }`,
        },
        navList: {
            marginBottom: "55px",
        },
        navItem: {
            "&:hover": {
                backgroundColor: `${colors.blueAccent[500]} !important`,
                color: `${colors.whiteAccent[500]}`,
                borderRadius: "4px",
                "& .MuiSvgIcon-root": {
                    color: `${colors.whiteAccent[500]} !important`,
                },
            },
        },
        active: {
            backgroundColor: `${colors.blueAccent[500]} !important`,
            color: `${colors.whiteAccent[500]} !important`,
            borderRadius: "4px !important",
            "& .MuiSvgIcon-root": {
                color: `${colors.whiteAccent[500]} !important`,
            },
        },
    };
});
