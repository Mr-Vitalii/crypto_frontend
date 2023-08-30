import "./RegisterForm.scss";

import { Button, TextField, Typography } from "@mui/material";
import { IPropsRegister } from "common/types/auth";

export const RegisterForm: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const { register, errors, navigate } = props;

  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Регистрация
      </Typography>
      <Typography
        variant="body1"
        marginBottom={3}
        fontFamily="Poppins"
        textAlign="center"
      >
        Введите данные для регистрации
      </Typography>
      <TextField
        error={!!errors.name}
        fullWidth={true}
        margin="normal"
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше имя"
        helperText={errors.name ? `${errors.name.message}` : ""}
        {...register("name")}
      />
      <TextField
        error={!!errors.username}
        fullWidth={true}
        margin="normal"
        label="Username"
        variant="outlined"
        placeholder="Введите ваш username"
        helperText={errors.username ? `${errors.username.message}` : ""}
        {...register("username")}
      />
      <TextField
        error={!!errors.email}
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        helperText={errors.email ? `${errors.email.message}` : ""}
        {...register("email")}
      />
      <TextField
        error={!!errors.password}
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        helperText={errors.password ? `${errors.password.message}` : ""}
        {...register("password")}
      />
      <TextField
        error={!!errors.confirmPassword}
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Повторите ваш пароль"
        helperText={
          errors.confirmPassword ? `${errors.confirmPassword.message}` : ""
        }
        {...register("confirmPassword")}
      />
      <Button
        type="submit"
        sx={{ marginTop: 2, marginBottom: 2, width: "60%" }}
        variant="contained"
      >
        Registration
      </Button>
      <Typography variant="body1">
        Do you already have an account?
        <span className="incitingText" onClick={() => navigate("/login")}>Authorization</span>
      </Typography>
    </>
  );
};