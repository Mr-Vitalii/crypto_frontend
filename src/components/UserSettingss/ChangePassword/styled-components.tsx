import { styled } from "@mui/material/styles";
import { Grid, Theme } from "@mui/material";
import { colors } from "theme";

export const RootGrid = styled(Grid)(
    ({ theme }: { theme: Theme }) => `
    && {
        & .MuiOutlinedInput-root {
            &.Mui-focused fieldset {
                border-color: ${colors.blueAccent[500]};
            }
        }

        & label.Mui-focused {
            color: ${
                theme.palette.mode === "dark"
                    ? colors.whiteAccent[500]
                    : colors.blackAccent[500]
            };
        }
    }
`,
);
