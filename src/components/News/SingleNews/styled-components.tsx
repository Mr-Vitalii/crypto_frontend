import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { Grid } from "@mui/material";

export const StyledGrid = styled(Grid)(
    ({ theme }: { theme: Theme }) => `
            justify-content: space-between;
            background-color: ${theme.palette.secondaryBackground.main};
            min-height: 270px;
            border: 1px solid ${theme.palette.borderColor.main};
            border-radius: 12px;
            box-shadow: none;
            background-image: none;
`,
);
