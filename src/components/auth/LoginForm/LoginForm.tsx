import { StyledTypography } from "./styled-components";

import { IPropsLogin } from "common/types/auth/index";

import { Box, TextField, Typography } from "@mui/material";
import { AppLoadingButton } from "components/AppLoadingButton/AppLoadingButton";
import { FC } from "react";

export const LoginForm: FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const { register, errors, navigate, loading } = props;

    return (
        <>
            <Typography variant="h2" fontFamily="Poppins" textAlign="center">
                Authorization
            </Typography>
            <Typography
                variant="body1"
                marginBottom={2}
                fontFamily="Poppins"
                textAlign="center"
            >
                Enter your username and password
            </Typography>
            <TextField
                autoComplete="off"
                error={!!errors.email}
                fullWidth
                margin="normal"
                label="Email"
                variant="outlined"
                placeholder="Enter your email"
                helperText={errors.email ? `${errors.email.message}` : ""}
                {...register("email")}
            />
            <TextField
                autoComplete="off"
                error={!!errors.password}
                type="password"
                fullWidth
                margin="normal"
                label="Password"
                variant="outlined"
                placeholder="Enter your password"
                helperText={errors.password ? `${errors.password.message}` : ""}
                {...register("password")}
            />
            <AppLoadingButton
                loading={loading}
                type="submit"
                sx={{ marginTop: 2, marginBottom: 2, width: "60%" }}
                variant="contained"
            >
                LogIn
            </AppLoadingButton>
            <Box sx={{ display: "flex" }}>
                <Typography variant="body1">No account yet?</Typography>
                <StyledTypography
                    variant="body1"
                    onClick={() => navigate("/register")}
                >
                    Sign up
                </StyledTypography>
            </Box>
        </>
    );
};
