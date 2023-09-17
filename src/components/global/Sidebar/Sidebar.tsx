import { FC, useEffect, useState } from "react";
import { BrandContainer, BrandTitle, NavBlock } from "./styled-components";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import { ChevronLeftOutlined, LogoutOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { FlexBetween } from "components/FlexBetween/FlexBetween";
import { navMenu } from "../../../common/moks/navigate";
import { NavMenu } from "./NavMenu";
import Logo from "assets/images/sidebar/logo.svg";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { SearchBar } from "../SearchBar/SearchBar";
import { ISidebarProps } from "common/types/sidebar";

export const Sidebar: FC<ISidebarProps> = (
    props: ISidebarProps,
): JSX.Element => {
    const [active, setActive] = useState("");
    const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname);
    }, [pathname]);

    return (
        <Box component="nav">
            {isOpen && (
                <Drawer
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    <NavBlock>
                        <Box>
                            <FlexBetween>
                                <BrandContainer sx={{ py: 4, px: 2 }}>
                                    <img src={Logo} alt="Logo" />
                                    <BrandTitle variant="h1">Demo</BrandTitle>
                                </BrandContainer>
                                {!isNonMobile && (
                                    <IconButton
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <ChevronLeftOutlined />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {!isNonMobile && (
                                <ListItem>
                                    <SearchBar />
                                </ListItem>
                            )}
                        </List>
                        <List sx={{ mb: 8 }}>
                            <NavMenu
                                navMenu={navMenu}
                                active={active}
                                navigate={navigate}
                            />
                        </List>
                    </NavBlock>
                    <Box width="100%">
                        <List>
                            {!isNonMobile && (
                                <ListItem>
                                    <Box>
                                        <ThemeSwitcher />
                                    </Box>
                                </ListItem>
                            )}
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LogoutOutlined />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography>Logout</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};
