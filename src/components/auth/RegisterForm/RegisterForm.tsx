import { FC } from "react";
import { StyledTypography } from "./styled-components";
import { Box, TextField, Typography } from "@mui/material";
import { IPropsRegister } from "common/types/user";
import { AppLoadingButton } from "components/global/AppLoadingButton/AppLoadingButton";

export const RegisterForm: FC<IPropsRegister> = (
    props: IPropsRegister,
): JSX.Element => {
    const { register, errors, navigate, loading } = props;

    return (
        <>
            <Typography variant="h2" fontFamily="Poppins" textAlign="center">
                Registration
            </Typography>
            <Typography
                variant="body1"
                marginBottom={2}
                fontFamily="Poppins"
                textAlign="center"
            >
                Enter data for registration
            </Typography>
            <TextField
                autoComplete="off"
                error={!!errors.name}
                fullWidth={true}
                margin="normal"
                label="Name"
                variant="outlined"
                placeholder="Enter your name"
                helperText={errors.name ? `${errors.name.message}` : ""}
                {...register("name")}
            />
            <TextField
                autoComplete="off"
                error={!!errors.username}
                fullWidth={true}
                margin="normal"
                label="Username"
                variant="outlined"
                placeholder="Enter your username"
                helperText={errors.username ? `${errors.username.message}` : ""}
                {...register("username")}
            />
            <TextField
                autoComplete="off"
                error={!!errors.email}
                fullWidth={true}
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
                fullWidth={true}
                margin="normal"
                label="Password"
                variant="outlined"
                placeholder="Enter your password"
                helperText={errors.password ? `${errors.password.message}` : ""}
                {...register("password")}
            />
            <TextField
                autoComplete="off"
                error={!!errors.confirmPassword}
                type="password"
                fullWidth={true}
                margin="normal"
                label="Password"
                variant="outlined"
                placeholder="Repeat your password"
                helperText={
                    errors.confirmPassword
                        ? `${errors.confirmPassword.message}`
                        : ""
                }
                {...register("confirmPassword")}
            />
            <AppLoadingButton
                loading={loading}
                type="submit"
                sx={{ marginTop: 2, marginBottom: 2, width: "60%" }}
                variant="contained"
            >
                Registration
            </AppLoadingButton>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography variant="body1" align="center">
                    Do you already have an account?
                </Typography>
                <StyledTypography
                    variant="body1"
                    onClick={() => navigate("/login")}
                >
                    Authorization
                </StyledTypography>
            </Box>
        </>
    );
};
