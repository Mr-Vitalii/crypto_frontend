import { FC } from "react";
import { useStyles } from "./styles";
import { Box, Button, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { FallbackProps, useErrorBoundary } from "react-error-boundary";

export const ErrorBoundaryComponent: FC<FallbackProps> = ({
    error,
}): JSX.Element => {
    console.log(error);

    const { resetBoundary } = useErrorBoundary();
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
                    {error}
                </Typography>
                <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ mt: 2 }}
                    onClick={resetBoundary}
                >
                    Try again
                </Button>
            </Box>
        </Box>
    );
};
