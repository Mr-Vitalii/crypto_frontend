import { FC, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    BrandContainer,
    BrandTitle,
    NavBlock,
    StyledListItemButton,
} from "./styled-components";
import {
    AlertColor,
    Avatar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import { ChevronLeftOutlined, LogoutOutlined } from "@mui/icons-material";

import { logOut } from "redux/user/thunks";

import { useAppDispatch, useAuth } from "utils/hooks";
import { getErrorMessage } from "utils/helpers/getErrorMessage";
import { navMenu } from "../../../common/moks/navigate";
import { ISidebarProps } from "common/types/sidebar";

import { NavMenu } from "./NavMenu";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { SearchBar } from "../SearchBar/SearchBar";
import { AppSnackbar } from "components/global/AppSnackbar/AppSnackbar";

export const Sidebar: FC<ISidebarProps> = (
    props: ISidebarProps,
): JSX.Element => {
    const dispatch = useAppDispatch();
    const [active, setActive] = useState("");
    const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [severity, setSeverity] = useState<AlertColor>("success");

    const { user } = useAuth();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname);
    }, [pathname]);

    const logOutUser = useCallback(async () => {
        try {
            await dispatch(logOut()).unwrap();
            setError(false);
            setSeverity("success");
            setOpenSnackbar(true);
            navigate("/login");
        } catch (e) {
            setErrorMessage(getErrorMessage(e));
            setError(true);
            setSeverity("error");
            setOpenSnackbar(true);
            console.error("Error logout:", e);
        }
    }, [dispatch, navigate]);

    const handleLogout = () => {
        logOutUser();
        sessionStorage.clear();
    };

    return (
        <>
            <Drawer
                open={isOpen}
                variant="persistent"
                anchor="left"
                sx={{
                    flexShrink: 0,
                    width: !isNonMobile ? "100%" : drawerWidth,
                    "& .MuiDrawer-paper": {
                        color: theme.palette.secondary.main,
                        backgroundColor: theme.palette.primary.main,
                        boxSizing: "border-box",
                        width: !isNonMobile ? "100%" : drawerWidth,
                    },
                }}
            >
                <NavBlock>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "space-between",
                            maxWidth: !isNonMobile ? "400px" : "auto",
                            margin: !isNonMobile ? "auto" : "initial",
                        }}
                    >
                        <BrandContainer
                            sx={{
                                py: 4,
                                px: 2,
                                width: !isNonMobile ? "100%" : drawerWidth,
                            }}
                        >
                            <Avatar
                                alt="user avatar"
                                src={user.avatarURL}
                                sx={{ width: 65, height: 65 }}
                            />
                            <BrandTitle variant="h1">Crypto</BrandTitle>
                        </BrandContainer>
                        {!isNonMobile && (
                            <IconButton
                                sx={{ mr: "15px" }}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <ChevronLeftOutlined />
                            </IconButton>
                        )}
                    </Box>

                    <List>
                        {!isNonMobile && (
                            <ListItem sx={{ justifyContent: "center" }}>
                                <SearchBar
                                    setIsOpen={setIsOpen}
                                    isOpen={isOpen}
                                    isNonMobile={isNonMobile}
                                />
                            </ListItem>
                        )}
                    </List>
                    <List sx={{ mb: 8, margin: "auto" }}>
                        <NavMenu
                            isNonMobile={isNonMobile}
                            setIsOpen={setIsOpen}
                            isOpen={isOpen}
                            navMenu={navMenu}
                            active={active}
                            navigate={navigate}
                        />
                    </List>
                </NavBlock>
                <Box width="100%">
                    <List>
                        {!isNonMobile && (
                            <ListItem
                                sx={{
                                    maxWidth: !isNonMobile ? "400px" : "auto",
                                    margin: !isNonMobile ? "auto" : "initial",
                                }}
                            >
                                <Box>
                                    <ThemeSwitcher />
                                </Box>
                            </ListItem>
                        )}
                        <ListItem
                            sx={{
                                maxWidth: !isNonMobile ? "400px" : "auto",
                                margin: !isNonMobile ? "auto" : "initial",
                            }}
                        >
                            <StyledListItemButton>
                                <ListItemIcon>
                                    <LogoutOutlined />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography onClick={handleLogout}>
                                        Logout
                                    </Typography>
                                </ListItemText>
                            </StyledListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <AppSnackbar
                open={openSnackbar}
                setOpen={setOpenSnackbar}
                error={error}
                severity={severity}
                errorMessage={errorMessage}
            />
        </>
    );
};
