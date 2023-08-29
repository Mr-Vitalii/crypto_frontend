import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'utils/hooks';

export const PrivateRoute = () => {
  const auth = useAuth(); 
  
  return (
      auth ? <Outlet /> : <Navigate to="login" />
  );
};
