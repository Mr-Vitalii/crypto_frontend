import { Box, Container, Tab, Tabs, useTheme } from "@mui/material";
import React, { FC, useState } from "react";

import { colors } from "theme";
import { tabProps } from "utils/helpers/tabProps";

import { ChangePassword } from "./ChangePassword/ChangePassword";
import { DeleteUser } from "./DeleteUser/DeleteUser";
import { SettingsPersonalInfo } from "./SettingsPersonalInfo/SettingsPersonalInfo";

import { TabPanel } from "./TabPanel/TabPanel";

export const UserSettings: FC = (): JSX.Element => {
    const [value, setValue] = useState(0);
    const theme = useTheme();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container sx={{ display: "flex", justifyContent: "center", p: 4 }}>
            <Box
                sx={{
                    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
                }}
            >
                <Tabs
                    value={value}
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
                    <Tab label="Personal Information" {...tabProps(0)} />
                    <Tab label="Change password" {...tabProps(1)} />
                    <Tab label="Delete account" {...tabProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <SettingsPersonalInfo />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ChangePassword />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <DeleteUser />
                </TabPanel>
            </Box>
        </Container>
    );
};
