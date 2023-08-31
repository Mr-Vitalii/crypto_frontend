import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Box, AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { useStyles } from "./styles";
import FlexBetween from "../FlexBetween/FlexBetween";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import SearchBar from "../SearchBar/SearchBar";

import { useAppSelector } from "../../utils/hooks";
import { ITopBarProps } from "common/types/topbar";

export const Navbar: FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
  const classes = useStyles();
  const { setIsOpen, isOpen, isNonMobile } = props;
  const { user } = useAppSelector((state) => state.auth.user);
  return (
    <Box justifyContent="space-between" width="100%" height="100%">
      <AppBar className={classes.root} position="static">
        <Toolbar className={classes.toolbar}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item sm={3} lg={3}>
              <FlexBetween>
                <MenuOutlined
                  className={classes.menuIcon}
                  onClick={() => setIsOpen(!isOpen)}
                />
                <Typography variant="h3">
                  Welcome {user ? `${user.firstName}` : ""}
                </Typography>
              </FlexBetween>
            </Grid>
            {isNonMobile && (
              <Grid display="flex" justifyContent="flex-end" item sm={9} lg={9}>
                <ThemeSwitcher />
                <SearchBar/>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
