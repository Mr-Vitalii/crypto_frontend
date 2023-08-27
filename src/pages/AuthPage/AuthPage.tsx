
import "./AuthPage.scss";

import { useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Box } from '@mui/material';



export default function AuthPage() {
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubmitForm = async (data: any) => {
    console.log(data);
    
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
            <div>Login Form</div>
          ) : location.pathname === "/register" ? (
            <div>Register Form</div>
          ) : null}
        </Box>
      </form>
    </div>
  );
}