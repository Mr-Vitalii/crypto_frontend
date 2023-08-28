import "./AuthPage.scss";
import { instance } from "utils/axios";

import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";


import { LoginForm } from "components/auth/LoginForm/LoginForm";
import { RegisterForm } from "components/auth/RegisterForm/RegisterForm";


export default function AuthPage() {
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubmitForm = async (data: any) => {
    const user = await instance.post("auth/login", data);
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
            <LoginForm register={register} errors={errors} />
          ) : location.pathname === "/register" ? (
            <RegisterForm register={register} errors={errors} />
          ) : null}
        </Box>
      </form>
    </div>
  );
}
