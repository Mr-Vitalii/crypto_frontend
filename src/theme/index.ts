import { useState, useMemo } from "react";
import { createTheme, PaletteMode } from "@mui/material";
import { darkModePalette, lightModePalette } from "./palette";
import { Theme } from "@mui/system";

export const colors = {
    primaryDarkTheme: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",
    },
    primaryWhiteTheme: {
        100: "#fefefe",
        200: "#fefefe",
        300: "#fdfdfd",
        400: "#fdfdfd",
        500: "#fcfcfc",
        600: "#cacaca",
        700: "#979797",
        800: "#656565",
        900: "#323232",
    },
    secondary: {
        100: "#e5e5e5",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#969696",
        500: "#7c7c7c",
        600: "#636363",
        700: "#3c3c3c",
        800: "#232323",
        900: "#0F0E0E",
    },

    whiteAccent: {
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#333333",
    },

    blackAccent: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",
    },

    blueAccent: {
        100: "#d1ccf7",
        200: "#a399ee",
        300: "#7566e6",
        400: "#4733dd",
        500: "#1900d5",
        600: "#1400aa",
        700: "#0f0080",
        800: "#0a0055",
        900: "#05002b",
    },
    redAccent: {
        100: "#e3cccc",
        200: "#FFA7A7",
        300: "#ac6666",
        400: "#903333",
        500: "#740000",
        600: "#5d0000",
        700: "#460000",
        800: "#2e0000",
        900: "#170000",
    },

    greenAccent: {
        100: "#cde3cc",
        200: "#A9FFA7",
        300: "#68ac66",
        400: "#359033",
        500: "#037400",
        600: "#025d00",
        700: "#024600",
        800: "#012e00",
        900: "#011700",
    },
};

export const themeSettings: any = (mode: string) => {
    return {
        palette: {
            mode,
            ...(mode === "light"
                ? lightModePalette(colors)
                : darkModePalette(colors)),
        },
        typography: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 14,
            h1: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 40,
                fontWeight: 600,
            },
            h2: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 35,
                fontWeight: 600,
            },
            h3: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 30,
                fontWeight: 500,
            },
            h4: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 25,
                fontWeight: 500,
            },
            p: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 20,
            },
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: ({ theme }: { theme: Theme }) => {
                        return {
                            backgroundColor: `${theme.palette.primary.main}`,
                            backgroundImage: "none",
                            boxShadow: "none",
                        };
                    },
                },
            },
        },
    };
};

export const useMode = () => {
    const [mode, setMode] = useState<PaletteMode>("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        [],
    );

    const theme: any = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
};

// export const tokens = (mode: string) => ({
//     ...(mode === "dark"
//         ? {
//               primary: {
//                 100: "#000000",
//                 200: "#000000",
//                 300: "#000000",
//                 400: "#000000",
//                 500: "#0F0E0E",
//                 600: "#232323",
//                 700: "#3D3D3D",
//                 800: "#525252",
//                 900: "#5C5C5C",
//                 },
//               secondary: {
//                     DEFAULT: "#7C7C7C",
//                 },
//                 black: {
//                       DEFAULT: "#000000",
//                       100: "#000000",
//                       200: "#000000",
//                       300: "#000000",
//                       400: "#000000",
//                       500: "#0F0E0E",
//                       600: "#292929",
//                       700: "#3D3D3D",
//                       800: "#525252",
//                       900: "#5C5C5C",
//                 },
//                 white: {
//                     DEFAULT: "#FFFFFF",
//                     100: "#F7F7F7",
//                 },
//                 gray: {
//                     DEFAULT: "#3C3C3C",
//                     dark: "#232323",
//                 },
//                 accentMain: "#0F0E0E",
//                 borderColor: "#3C3C3C",
//           }
//         : {
//                 white: {
//                     DEFAULT: "#FFFFFF",
//                     100: "#F7F7F7",
//                     200: "#D1D1D1",
//                 },
//                 primary: {
//                     DEFAULT: "#FSFSFS",
//                     500: "#F7F7F7",
//                 },
//               secondary: {
//                   DEFAULT: "#7C7C7C",
//               },
//               black: {
//                   DEFAULT: "#000000",
//                   100: "#525252",
//                   200: "#3D3D3D",
//                   300: "#292929",
//                   400: "#141414",
//                   500: "#000000",
//               },
//               gray: {
//                   DEFAULT: "#3C3C3C",
//               },
//               accentMain: "#F7F7F7",
//               borderColor: "#D1D1D1",
//               blue: "#1900D5",
//               red: "#FFA7A7",
//           }),
// });

// export const tokens = (mode: string) => ({
//     ...(mode === "dark"
//         ? {
//               primary: {
//                   100: "#cccccc",
//                   200: "#999999",
//                   300: "#666666",
//                   400: "#333333",
//                   500: "#000000",
//                   600: "#000000",
//                   700: "#000000",
//                   800: "#000000",
//                   900: "#000000",
//               },
//               secondary: {
//                   100: "#e5e5e5",
//                   200: "#cbcbcb",
//                   300: "#b0b0b0",
//                   400: "#969696",
//                   500: "#7c7c7c",
//                   600: "#636363",
//                   700: "#3c3c3c",
//                   800: "#232323",
//                   900: "#0F0E0E",
//               },

//               whiteAccent: {
//                   100: "#ffffff",
//                   200: "#ffffff",
//                   300: "#ffffff",
//                   400: "#ffffff",
//                   500: "#ffffff",
//                   600: "#cccccc",
//                   700: "#999999",
//                   800: "#666666",
//                   900: "#333333",
//               },

//               blueAccent: {
//                   100: "#d1ccf7",
//                   200: "#a399ee",
//                   300: "#7566e6",
//                   400: "#4733dd",
//                   500: "#1900d5",
//                   600: "#1400aa",
//                   700: "#0f0080",
//                   800: "#0a0055",
//                   900: "#05002b",
//               },
//               redAccent: {
//                   100: "#e3cccc",
//                   200: "#c79999",
//                   300: "#ac6666",
//                   400: "#903333",
//                   500: "#740000",
//                   600: "#5d0000",
//                   700: "#460000",
//                   800: "#2e0000",
//                   900: "#170000",
//               },
//               greenAccent: {
//                   100: "#cde3cc",
//                   200: "#A9FFA7",
//                   300: "#68ac66",
//                   400: "#359033",
//                   500: "#037400",
//                   600: "#025d00",
//                   700: "#024600",
//                   800: "#012e00",
//                   900: "#011700",
//               },
//           }
//         : {
//               primary: {
//                   100: "#fefefe",
//                   200: "#fefefe",
//                   300: "#fdfdfd",
//                   400: "#fdfdfd",
//                   500: "#fcfcfc",
//                   600: "#cacaca",
//                   700: "#979797",
//                   800: "#656565",
//                   900: "#323232",
//               },
//               secondary: {
//                   100: "#0F0E0E",
//                   200: "#232323",
//                   300: "#3c3c3c",
//                   400: "#636363",
//                   500: "#7c7c7c",
//                   600: "#969696",
//                   700: "#b0b0b0",
//                   800: "#D1D1D1",
//                   900: "#e5e5e5",
//               },

//               whiteAccent: {
//                   100: "#333333",
//                   200: "#666666",
//                   300: "#999999",
//                   400: "#cccccc",
//                   500: "#ffffff",
//                   600: "#ffffff",
//                   700: "#ffffff",
//                   800: "#ffffff",
//                   900: "#ffffff",
//               },

//               blueAccent: {
//                   100: "#05002b",
//                   200: "#0a0055",
//                   300: "#0f0080",
//                   400: "#1400aa",
//                   500: "#1900d5",
//                   600: "#4733dd",
//                   700: "#7566e6",
//                   800: "#a399ee",
//                   900: "#d1ccf7",
//               },
//               redAccent: {
//                   100: "#170000",
//                   200: "#2e0000",
//                   300: "#460000",
//                   400: "#5d0000",
//                   500: "#740000",
//                   600: "#903333",
//                   700: "#ac6666",
//                   800: "#c79999",
//                   900: "#e3cccc",
//               },
//               greenAccent: {
//                   100: "#011700",
//                   200: "#012e00",
//                   300: "#024600",
//                   400: "#025d00",
//                   500: "#037400",
//                   600: "#359033",
//                   700: "#68ac66",
//                   800: "#A9FFA7",
//                   900: "#cde3cc",
//               },
//           }),
// });
