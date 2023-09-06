import { Box, Grid, Tab, Tabs, useTheme } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { selectUser } from "redux/auth/selectors";
import { tokens } from "theme";
import { tabProps } from "utils/helpers";
import { useAppDispatch, useAppSelector, useAuth } from "utils/hooks";
import { ChangePassword } from "./ChangePassword/ChangePassword";
import { DeleteUser } from "./DeleteUser/DeleteUser";
import { SettingsPersonalInfo } from "./SettingsPersonalInfo/SettingsPersonalInfo";

import { useStyles } from "./styles";
import { TabPanel } from "./TabPanel/TabPanel";

export const UserSettings: FC = (): JSX.Element => {
    const [value, setValue] = useState(0);
    const dispatch = useAppDispatch();
    const { user } = useAuth();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = useStyles();

    console.log(user);

    useEffect(() => {
        // dispatch(getPublicUser());
    }, [dispatch]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Grid className={classes.root}>
            <Box className={classes.tabsWrapper}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Settings tabs"
                    centered
                    textColor="secondary"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: colors.blue,
                        },
                    }}
                >
                    <Tab label="Personal Information" {...tabProps(0)} />
                    <Tab label="Change password" {...tabProps(1)} />
                    <Tab label="Delete account" {...tabProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <SettingsPersonalInfo />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ChangePassword />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DeleteUser />
            </TabPanel>
        </Grid>
    );
};
