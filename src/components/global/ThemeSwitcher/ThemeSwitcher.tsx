import { FC } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useColorModeContext } from "theme/context";
import { IToggleColorMode } from "common/types/theme";

export const ThemeSwitcher: FC = (): JSX.Element => {
    const theme = useTheme();
    const colorMode: IToggleColorMode = useColorModeContext();

    return (
        <Box sx={{ pr: 3, pt: 1, [theme.breakpoints.down("md")]: { pr: 0 } }}>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
            </IconButton>
        </Box>
    );
};
