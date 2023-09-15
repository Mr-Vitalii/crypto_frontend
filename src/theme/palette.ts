import { PaletteOptions } from "@mui/material";
import { IColors } from "common/types/theme";

declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
    }
    interface Palette {
        neutral: Palette["primary"];
        borderColor: Palette["primary"];
    }
    interface PaletteOptions {
        neutral: PaletteOptions["primary"];
        borderColor: PaletteOptions["primary"];
    }
}

export const darkModePalette = (colors: IColors): PaletteOptions => {
    return {
        primary: {
            main: colors.primaryDarkTheme[500],
        },
        secondary: {
            main: colors.secondary[500],
        },
        neutral: {
            main: colors.secondary[700],
            dark: colors.secondary[800],
            darker: colors.secondary[900],
        },
        borderColor: {
            main: colors.secondary[700],
        },
        background: {
            default: colors.secondary[900],
            paper: colors.primaryDarkTheme[500],
        },
    };
};

export const lightModePalette = (colors: IColors): PaletteOptions => {
    return {
        primary: {
            main: colors.primaryWhiteTheme[500],
        },
        secondary: {
            main: colors.secondary[500],
        },
        neutral: {
            main: colors.secondary[700],
            dark: colors.secondary[800],
            darker: colors.secondary[900],
        },
        borderColor: {
            main: colors.secondary[200],
        },
        background: {
            default: colors.secondary[100],
            paper: colors.primaryWhiteTheme[500],
        },
    };
};
