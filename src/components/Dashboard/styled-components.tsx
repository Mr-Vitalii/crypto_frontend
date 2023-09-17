import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { Grid } from "@mui/material";

export const StyledGridContainer = styled(Grid)(
    ({ theme }: { theme: Theme }) => `
            background-color: ${theme.palette.secondaryBackground.main};
            padding: 20px 16px;
            margin-bottom: 32px;
            min-height: 270px;
            border: 1px solid ${theme.palette.borderColor.main};
            border-radius: 12px;
`,
);
