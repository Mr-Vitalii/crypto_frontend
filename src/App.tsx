import './App.scss';
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { PrivateRoute } from 'utils/router/PrivateRoute';

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />

        <Route element={<PrivateRoute />}>
          <Route index element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  );
};
