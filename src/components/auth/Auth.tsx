import { FC } from "react";
import { useAppDispatch, useAppSelector } from "utils/hooks";

import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema, RegisterSchema } from "../../utils/yup";

import { Box } from "@mui/material";

import { LoginForm } from "components/Auth/LoginForm/LoginForm";
import { RegisterForm } from "components/Auth/RegisterForm/RegisterForm";

import { CommonFormData } from "common/types/auth/index";
import { AppErrors } from "common/errors";
import { loginUser, registerUser } from "redux/auth/thunks";
import { useStyles } from "./styles";

export const Auth: FC = (): JSX.Element => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    const loading = useAppSelector((state) => state.auth.isLoading);

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
        if (location.pathname === "/login") {
            try {
                dispatch(loginUser(data));
                reset();
                navigate("/");
            } catch (error) {
                return error;
            }
        } else {
            try {
                if (data.password === data.confirmPassword) {
                    try {
                        const userData = {
                            firstName: data.name,
                            userName: data.username,
                            email: data.email,
                            password: data.password,
                        };
                        dispatch(registerUser(userData));
                        reset();
                        navigate("/");
                    } catch (error) {
                        return error;
                    }
                } else {
                    throw new Error(AppErrors.PasswordDoNotMatch);
                }
            } catch (error) {
                console.error(error); //* Тут нужно сообщить об этом пользователю
            }
        }
    };

    return (
        <div className={classes.root}>
            <form
                className={classes.form}
                onSubmit={handleSubmit(handleSubmitForm)}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    maxWidth={640}
                    margin="auto"
                    paddingY={2}
                    paddingX={4}
                    borderRadius={5}
                    boxShadow={"-3px -2px 20px 1px #202020"}
                >
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
        </div>
    );
};
