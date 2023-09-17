import { FC, Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "components/global/Navbar/Navbar";
import { Box, useMediaQuery } from "@mui/material";
import { StyledBox } from "./styled-components";
import { Sidebar } from "components/global/Sidebar/Sidebar";
import { useAuth } from "utils/hooks";

export const Layout: FC = (): JSX.Element => {
    const isNonMobile = useMediaQuery("(min-width:760px)");

    const [isOpen, setIsOpen] = useState(isNonMobile ? true : false);
    const { isLoggedIn } = useAuth();

    return (
        <div>
            {isLoggedIn ? (
                <Box
                    display={isNonMobile ? "flex" : "block"}
                    justifyContent="space-between"
                    width="100%"
                    height="100%"
                >
                    <Sidebar
                        isNonMobile={isNonMobile}
                        drawerWidth="250px"
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                    <StyledBox>
                        <Navbar
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            isNonMobile={isNonMobile}
                        />
                        <Suspense fallback={null}>
                            <Outlet />
                        </Suspense>
                    </StyledBox>
                </Box>
            ) : (
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            )}
        </div>
    );
};
