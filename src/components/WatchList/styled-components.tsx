import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)(
    ({ theme }: { theme: Theme }) => `
            background-color: ${theme.palette.secondaryBackground.main};
            min-height: 270px;
            border: 1px solid ${theme.palette.borderColor.main};
            border-radius: 12px;
            box-shadow: none;
            background-image: none;
`,
);
