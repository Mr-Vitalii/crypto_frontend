import { FC } from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { IErrorComponentProps } from "common/types/error";

export const ErrorComponent: FC<IErrorComponentProps> = ({
    errorMessage,
}): JSX.Element => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ErrorIcon />
                    <Typography variant="body1">
                        Something went wrong:
                    </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "red" }}>
                    {errorMessage}
                </Typography>
            </Box>
        </Box>
    );
};
