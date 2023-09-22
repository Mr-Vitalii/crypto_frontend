import { createContext, useContext } from "react";
import { IToggleColorMode } from "common/types/theme";

export const ColorModeContext = createContext<IToggleColorMode | undefined>(
    undefined,
);

export const useColorModeContext = () => {
    const colorMode = useContext(ColorModeContext);
    if (colorMode === undefined) {
        throw new Error(
            "useColorModeContext must be used with a ColorModeContext",
        );
    }

    return colorMode;
};
