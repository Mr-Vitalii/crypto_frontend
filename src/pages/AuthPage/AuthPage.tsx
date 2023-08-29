import "./AuthPage.scss";
import { instance } from "utils/axios";
import { useAppDispatch } from "utils/hooks";

import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema, RegisterSchema } from "../../utils/yup";

import { Box } from "@mui/material";

import { LoginForm } from "components/auth/LoginForm/LoginForm";
import { RegisterForm } from "components/auth/RegisterForm/RegisterForm";

import { CommonFormData } from "common/types/auth/index";
import { AppErrors } from "common/errors";
import { login } from "redux/auth/authSlice";

const AuthPage: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CommonFormData>({
    resolver: yupResolver(
      location.pathname === "/login" ? LoginSchema : RegisterSchema
    ),
  });

  const handleSubmitForm = async (data: any) => {
    if (location.pathname === "/login") {
      try {
        console.log(data);
        const user = await instance.post("auth/login", data);
        dispatch(login(user.data));
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
            console.log("register");
            const newUser = await instance.post("auth/register", userData);
             dispatch(login(newUser.data));
              navigate("/");
          } catch (error) {
            console.log(error);
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
    <div className="auth-root">
      <form className="auth-form" onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={"-3px -2px 20px 1px #202020"}
        >
          {location.pathname === "/login" ? (
            <LoginForm
              register={register}
              errors={errors}
              navigate={navigate}
            />
          ) : location.pathname === "/register" ? (
            <RegisterForm
              register={register}
              errors={errors}
              navigate={navigate}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthPage;
