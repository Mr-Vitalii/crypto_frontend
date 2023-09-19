import { FC, useEffect, useState } from "react";
import {
    BrandContainer,
    BrandTitle,
    NavBlock,
    StyledListItemButton,
} from "./styled-components";
import {
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
import { useLocation, useNavigate } from "react-router-dom";
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
                <Box sx={{ display: "flex", alignItems: "space-between" }}>
                    <BrandContainer
                        sx={{
                            py: 4,
                            px: 2,
                            width: !isNonMobile ? "100%" : drawerWidth,
                        }}
                    >
                        <img src={Logo} alt="Logo" />
                        <BrandTitle variant="h1">Demo</BrandTitle>
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
                        <StyledListItemButton>
                            <ListItemIcon>
                                <LogoutOutlined />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography>Logout</Typography>
                            </ListItemText>
                        </StyledListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};
