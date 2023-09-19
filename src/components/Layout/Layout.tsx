import { FC, Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "components/global/Navbar/Navbar";
import {
    Box,
    useMediaQuery,
    Container,
    Typography,
    useTheme,
} from "@mui/material";
import { DrawerHeader, Main } from "./styled-components";
import { Sidebar } from "components/global/Sidebar/Sidebar";
import { useAuth } from "utils/hooks";

export const Layout: FC = (): JSX.Element => {
    const isNonMobile = useMediaQuery("(min-width:760px)");

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
                    <Main open={isOpen} mobile={isNonMobile}>
                        <DrawerHeader />
                        <Container
                            sx={{
                                [theme.breakpoints.up("lg")]: {
                                    p: 4,
                                },
                            }}
                        >
                            <Suspense fallback={null}>
                                <Outlet />
                            </Suspense>
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
