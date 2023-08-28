import "./LoginForm.scss";

import { Button, TextField, Typography } from "@mui/material";


export const LoginForm = (props: any) => {
  const { register, errors } = props;

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
        fullWidth
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Enter your email"
        {...register("email")}
      />
      <TextField
        type="password"
        fullWidth
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Enter your password"
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
        Don't have an account?
        <span className="incitingText">Registration</span>
      </Typography>
    </>
  );
};
