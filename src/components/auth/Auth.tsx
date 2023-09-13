import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "utils/hooks";

import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema, RegisterSchema } from "../../utils/yup";

import { AlertColor, Box, Container } from "@mui/material";

import { LoginForm } from "components/Auth/LoginForm/LoginForm";
import { RegisterForm } from "components/Auth/RegisterForm/RegisterForm";

import { CommonFormData } from "common/types/auth/index";
import { AppErrors } from "common/errors";
import { loginUser, registerUser } from "redux/auth/thunks";
import { useStyles } from "./styles";
import { AppSnackbar } from "components/AppSnackbar/AppSnackbar";
import { getErrorMessage } from "utils/helpers/getErrorMessage";

export const Auth: FC = (): JSX.Element => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const loading = useAppSelector((state) => state.auth.isLoading);

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [severity, setSeverity] = useState<AlertColor>("success");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<CommonFormData>({
        resolver: yupResolver(
            location.pathname === "/login" ? LoginSchema : RegisterSchema,
        ),
    });

    const handleSubmitForm = async (data: any) => {
        try {
            switch (location.pathname) {
                case "/login":
                    await dispatch(loginUser(data)).unwrap();
                    setError(false);
                    setSeverity("success");
                    setOpenSnackbar(true);
                    reset();
                    navigate("/");
                    break;

                case "/register":
                    if (data.password === data.confirmPassword) {
                        try {
                            const userData = {
                                firstName: data.name,
                                userName: data.username,
                                email: data.email,
                                password: data.password,
                            };
                            await dispatch(registerUser(userData)).unwrap();
                            setError(false);
                            setSeverity("success");
                            setOpenSnackbar(true);
                            reset();
                            navigate("/");
                        } catch (e) {
                            return e;
                        }
                    } else {
                        throw new Error(AppErrors.PasswordDoNotMatch);
                    }
                    break;

                default:
                    break;
            }
        } catch (e) {
            setErrorMessage(getErrorMessage(e));
            setError(true);
            setSeverity("error");
            setOpenSnackbar(true);
        }
    };

    return (
        <Container className={classes.root}>
            <form
                className={classes.form}
                onSubmit={handleSubmit(handleSubmitForm)}
            >
                <Box className={classes.formContainer}>
                    {location.pathname === "/login" ? (
                        <LoginForm
                            register={register}
                            errors={errors}
                            navigate={navigate}
                            loading={loading}
                        />
                    ) : location.pathname === "/register" ? (
                        <RegisterForm
                            register={register}
                            errors={errors}
                            navigate={navigate}
                            loading={loading}
                        />
                    ) : null}
                </Box>
            </form>
            <AppSnackbar
                open={openSnackbar}
                setOpen={setOpenSnackbar}
                error={error}
                severity={severity}
                errorMessage={errorMessage}
            />
        </Container>
    );
};
