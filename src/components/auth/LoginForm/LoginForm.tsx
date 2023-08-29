import "./LoginForm.scss";

import {IPropsLogin} from "common/types/auth/index" 

import { Button, TextField, Typography } from "@mui/material";

export const LoginForm: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { register, errors, navigate } = props;

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
      <Button
        type="submit"
        sx={{ marginTop: 2, marginBottom: 2, width: "60%" }}
        variant="contained"
      >
        LogIn
      </Button>
      <Typography variant="body1">
        No account yet?
        <span className="incitingText" onClick={() => navigate("/register")}>
          Sign up
        </span>
      </Typography>
    </>
  );
};
