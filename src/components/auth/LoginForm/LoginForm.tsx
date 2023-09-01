import { useStyles } from "./styles";

import { IPropsLogin } from "common/types/auth/index";

import { TextField, Typography } from "@mui/material";
import { AppLoadingButton } from "components/AppLoadingButton/AppLoadingButton";


export const LoginForm: React.FC<IPropsLogin> = (
  props: IPropsLogin
): JSX.Element => {
  const { register, errors, navigate, loading } = props;
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Authorization
      </Typography>
      <Typography
        variant="body1"
        marginBottom={3}
        fontFamily="Poppins"
        textAlign="center"
      >
        Enter your username and password
      </Typography>
      <TextField
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
      <Typography variant="body1">
        No account yet?
        <span
          className={classes.incitingText}
          onClick={() => navigate("/register")}
        >
          Sign up
        </span>
      </Typography>
    </>
  );
};
