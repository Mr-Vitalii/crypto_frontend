import React, { FC, useEffect, useState } from "react";
import { useStyles } from "./styles";
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
import { ChevronLeftOutlined, LogoutOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween/FlexBetween";
import { navMenu } from "../../common/moks/navigate";
import { NavMenu } from "./NavMenu";
import Logo from "../../assets/images/sidebar/logo.svg";
import ThemeSwitcher from "components/ThemeSwitcher/ThemeSwitcher";
import SearchBar from "components/SearchBar/SearchBar";
import { ISidebarProps } from "common/types/sidebar";

export const Sidebar: FC<ISidebarProps> = (
  props: ISidebarProps
): JSX.Element => {
  const [active, setActive] = useState("");
  const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;
  const classes = useStyles();
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
          <Box className={classes.navBlock}>
            <Box>
              <FlexBetween>
                <Box className={classes.brand}>
                  <img src={Logo} alt="Logo" />
                  <Typography variant="h1" className={classes.brandTitle}>
                    Demo
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsOpen(!isOpen)}>
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
            <List className={classes.navList}>
              <NavMenu
                navMenu={navMenu}
                active={active}
                classes={classes}
                navigate={navigate}
              />
            </List>
          </Box>
          <Box width="100%">
            <List>
              {!isNonMobile && (
                <ListItem>
                  <Box padding="5px">
                    <ThemeSwitcher />
                  </Box>
                </ListItem>
              )}
              <ListItem>
                <ListItemButton className={classes.navItem}>
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
