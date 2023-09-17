import { FC } from "react";
import { StyledBox } from "./styled-components";
import { Box, Container, Typography, useTheme } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { IErrorComponentProps } from "common/types/error";

export const ErrorComponent: FC<IErrorComponentProps> = ({
    errorMessage,
}): JSX.Element => {
    const theme = useTheme();
    return (
        <Container
            sx={{
                mb: 2,
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
                    {errorMessage}
                </Typography>
            </StyledBox>
        </Container>
    );
};
