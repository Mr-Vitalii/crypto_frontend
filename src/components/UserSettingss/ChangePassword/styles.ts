import { makeStyles } from "@mui/styles";
import { colors } from "theme";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                    borderColor: colors.blueAccent[500],
                },
            },
            "& label.Mui-focused": {
                color: `${
                    theme.palette.mode === "dark"
                        ? colors.whiteAccent[500]
                        : colors.blackAccent[500]
                }`,
            },
        },
        formWrapper: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "32px 0",
        },
        inputField: {
            width: "25%",
            marginBottom: "15px !important",
        },
        buttonSubmitBlock: {
            margin: "32px 0",
        },
    };
});
