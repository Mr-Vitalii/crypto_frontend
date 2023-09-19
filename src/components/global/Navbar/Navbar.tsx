import { FC } from "react";

import { Box, Grid, Toolbar, Typography, useTheme } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { SearchBar } from "../SearchBar/SearchBar";

import { useAuth } from "utils/hooks";
import { INavBarProps } from "common/types/navbar";
import { AppBar } from "./styled-components";

export const Navbar: FC<INavBarProps> = (props: INavBarProps): JSX.Element => {
    const { setIsOpen, isOpen, isNonMobile } = props;
    const { user } = useAuth();
    const theme = useTheme();

    return (
        <AppBar
            open={isOpen}
            position="fixed"
            sx={{
                borderBottom: `1px solid ${theme.palette.borderColor.main}`,
            }}
        >
            <Toolbar
                sx={{
                    py: 3,
                    justifyContent: "space-between",
                    [theme.breakpoints.down("sm")]: {
                        px: 2,
                    },
                }}
            >
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item sm={4} lg={4}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <MenuOutlined
                                sx={{ mr: 2, cursor: "pointer" }}
                                onClick={() => setIsOpen(!isOpen)}
                            />
                            <Typography variant="h3">
                                Welcome {user ? `${user.userName}` : ""}
                            </Typography>
                        </Box>
                    </Grid>
                    {isNonMobile && (
                        <Grid
                            display="flex"
                            justifyContent="flex-end"
                            item
                            sm={7}
                            lg={8}
                        >
                            <ThemeSwitcher />
                            <SearchBar />
                        </Grid>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
