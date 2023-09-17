import { styled } from "@mui/material/styles";
import { Grid, Theme } from "@mui/material";

export const StyledGrid = styled(Grid)(
    ({ theme, column }: { theme: Theme; column: boolean }) => `
            display: flex;
            flex-direction: ${column ? "column" : "row"};
            justify-content: center;
            align-items: center;
            background-color: ${theme.palette.secondaryBackground.main};
            padding: 20px 16px;
            max-width: 500px;
            min-height: 185px;
            border: 1px solid ${theme.palette.borderColor.main};
            border-radius: 12px;
`,
);
