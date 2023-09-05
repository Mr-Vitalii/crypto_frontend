import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Layout } from "./components/Layout/Layout";
import { PrivateRoute } from "utils/router/PrivateRoute";
import { WatchList } from "components/WatchList/WatchList";
import { News } from "components/News/News";
import { Settings } from "components/Settings/Settings";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const SingleCoinPage = lazy(
    () => import("./pages/SingleCoinPage/SingleCoinPage"),
);
const WatchListPage = lazy(() => import("./pages/WatchListPage/WatchList"));

export const App = () => {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="/register" element={<AuthPage />} />
                            <Route path="/login" element={<AuthPage />} />

                            <Route element={<PrivateRoute />}>
                                <Route index element={<HomePage />} />
                                <Route
                                    path="/watchlist"
                                    element={<WatchListPage />}
                                />
                                <Route path="/news" element={<News />} />
                                <Route
                                    path="/settings"
                                    element={<Settings />}
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
