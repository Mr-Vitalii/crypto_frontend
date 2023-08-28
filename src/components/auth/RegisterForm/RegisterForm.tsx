import "./RegisterForm.scss";

import { Button, TextField, Typography } from "@mui/material";

export const RegisterForm = (props:any) => {
  const {register, errors } = props;

  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Registration
      </Typography>
      <Typography
        variant="body1"
        marginBottom={3}
        fontFamily="Poppins"
        textAlign="center"
      >
        Enter data for registration
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Name"
        variant="outlined"
        placeholder="Enter your name"
        {...register("name")}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Username"
        variant="outlined"
        placeholder="Enter your username"
        {...register("username")}
      />
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
      <TextField
        type="password"
        fullWidth
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Enter your password again"
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
        <span className="incitingText">Authorization</span>
      </Typography>
    </>
  );
};
