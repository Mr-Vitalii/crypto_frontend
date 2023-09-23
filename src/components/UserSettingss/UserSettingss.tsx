import React, { FC, useState } from "react";
import { Box, Tab, useMediaQuery, useTheme } from "@mui/material";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { colors } from "theme";
import { ChangeAvatar } from "./ChangeAvatar/ChangeAvatar";

import { ChangePassword } from "./ChangePassword/ChangePassword";
import { DeleteUser } from "./DeleteUser/DeleteUser";
import { SettingsPersonalInfo } from "./SettingsPersonalInfo/SettingsPersonalInfo";

export const UserSettings: FC = (): JSX.Element => {
    const [value, setValue] = useState("1");
    const theme = useTheme();
    const isNonMobile = useMediaQuery("(min-width:760px)");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                borderBottom: `1px solid ${theme.palette.borderColor.main}`,
            }}
        >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                        variant={!isNonMobile ? "scrollable" : "standard"}
                        scrollButtons
                        allowScrollButtonsMobile
                        onChange={handleChange}
                        aria-label="Settings tabs"
                        centered
                        textColor="secondary"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: colors.blueAccent[500],
                            },
                        }}
                    >
                        <Tab label="Personal Information" value="1" />
                        <Tab label="Change password" value="2" />
                        <Tab label="Change avatar" value="3" />
                        <Tab label="Delete account" value="4" />
                    </TabList>
                </Box>

                <TabPanel value="1">
                    <SettingsPersonalInfo />
                </TabPanel>
                <TabPanel value="2">
                    <ChangePassword />
                </TabPanel>
                <TabPanel value="3">
                    <ChangeAvatar />
                </TabPanel>
                <TabPanel value="4">
                    <DeleteUser />
                </TabPanel>
            </TabContext>
        </Box>
    );
};
