import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { refreshUser } from "redux/user/thunks";

import { useMode } from "./theme";
import { ColorModeContext } from "theme/context";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { PrivateRoute } from "utils/routes/PrivateRoute";
import { RestrictedRoute } from "utils/routes/RestrictedRoute";
import { useAppDispatch, useAuth } from "utils/hooks";

import { Layout } from "./components/global/Layout/Layout";
import { LoadingComponent } from "components/global/LoadingComponent/LoadingComponent";

const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const SingleCoinPage = lazy(() => import("./pages/SingleCoinPage"));
const WatchListPage = lazy(() => import("./pages/WatchListPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const UserSettingsPage = lazy(() => import("./pages/UserSettingsPage"));

export const App = () => {
    const [theme, colorMode] = useMode();
    const dispatch = useAppDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);
    return isRefreshing ? (
        <LoadingComponent />
    ) : (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Layout />}>
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
                                <Route index element={<DashboardPage />} />
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
