import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { PrivateRoute } from "utils/routes/PrivateRoute";
import { Layout } from "./components/Layout/Layout";
import { RestrictedRoute } from "utils/routes/RestrictedRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const SingleCoinPage = lazy(() => import("./pages/SingleCoinPage"));
const WatchListPage = lazy(() => import("./pages/WatchListPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const UserSettingsPage = lazy(() => import("./pages/UserSettingsPage"));

export const App = () => {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            {/* <Route path="/register" element={<AuthPage />} />
                            <Route path="/login" element={<AuthPage />} /> */}

                            <Route
                                path="/register"
                                element={
                                    <RestrictedRoute
                                        component={<AuthPage />}
                                        redirectTo="/"
                                    />
                                }
                            />
                            <Route
                                path="/login"
                                element={
                                    <RestrictedRoute
                                        component={<AuthPage />}
                                        redirectTo="/"
                                    />
                                }
                            />

                            <Route element={<PrivateRoute />}>
                                <Route index element={<HomePage />} />
                                <Route
                                    path="/watchlist"
                                    element={<WatchListPage />}
                                />
                                <Route path="/news" element={<NewsPage />} />
                                <Route
                                    path="/settings"
                                    element={<UserSettingsPage />}
                                />
                                <Route
                                    path="/single/:id"
                                    element={<SingleCoinPage />}
                                />
                            </Route>
                        </Route>
                    </Routes>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
