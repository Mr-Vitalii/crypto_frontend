import { FC, Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { DrawerHeader, Main } from "./styled-components";

import { Box, useMediaQuery, Container, useTheme } from "@mui/material";
import { useAuth } from "utils/hooks";

import { Navbar } from "components/global/Navbar/Navbar";
import { Sidebar } from "components/global/Sidebar/Sidebar";

export const Layout: FC = (): JSX.Element => {
    const isNonMobile = useMediaQuery("(min-width:760px)");
    const isTablet = useMediaQuery("(min-width: 760px) and (max-width: 900px)");

    const [isOpen, setIsOpen] = useState(isNonMobile ? true : false);
    const { isLoggedIn } = useAuth();
    const theme = useTheme();

    return (
        <div>
            {isLoggedIn ? (
                <Box display={isNonMobile ? "flex" : "block"}>
                    <Navbar
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        isNonMobile={isNonMobile}
                    />

                    <Sidebar
                        isNonMobile={isNonMobile}
                        drawerWidth="250px"
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                    <Main
                        open={isOpen}
                        notMobile={isNonMobile}
                        isTablet={isTablet}
                    >
                        <DrawerHeader />
                        <Container
                            sx={{
                                p: 1,
                                [theme.breakpoints.up("md")]: {
                                    p: 3,
                                },
                                [theme.breakpoints.up("lg")]: {
                                    p: 4,
                                },
                            }}
                        >
                            <Suspense fallback={null}>
                                <Outlet />
                            </Suspense>
                            <Toaster
                                position="top-center"
                                reverseOrder={false}
                            />
                        </Container>
                    </Main>
                </Box>
            ) : (
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            )}
        </div>
    );
};
