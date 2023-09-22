import { FC } from "react";
import { FallbackProps, useErrorBoundary } from "react-error-boundary";
import { StyledBox } from "./styled-components";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

export const ErrorBoundaryComponent: FC<FallbackProps> = ({
    error,
}): JSX.Element => {
    const { resetBoundary } = useErrorBoundary();
    const theme = useTheme();
    return (
        <Container
            sx={{
                [theme.breakpoints.up("lg")]: {
                    px: 4,
                },
            }}
        >
            <StyledBox>
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
            </StyledBox>
        </Container>
    );
};
