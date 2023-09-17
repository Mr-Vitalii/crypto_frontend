import { FC } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useColorModeContext } from "theme/context";
import { IToggleColorMode } from "common/types/theme";

export const ThemeSwitcher: FC = (): JSX.Element => {
    const theme = useTheme();
    const colorMode: IToggleColorMode = useColorModeContext();

    return (
        <Box sx={{ pr: 4, pt: 1 }}>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
            </IconButton>
            <IconButton>
                <NotificationsNoneIcon />
            </IconButton>
        </Box>
    );
};
