import { styled } from "@mui/material/styles";
import { Container, Theme } from "@mui/material";
import { colors } from "theme";

export const StyledContainer = styled(Container)(
    ({ theme }: { theme: Theme }) => `
    & a {
        text-decoration: none;
        color: ${
            theme.palette.mode === "light"
                ? colors.blackAccent[500]
                : colors.whiteAccent[500]
        };
    }
  `,
);
