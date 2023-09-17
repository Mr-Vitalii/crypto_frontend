import { styled } from "@mui/material/styles";
import { Box, Theme } from "@mui/material";

export const StyledBox = styled(Box)(
    ({ theme }: { theme: Theme }) => `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: ${theme.palette.secondaryBackground.main};
            padding: 20px 16px;
            marginBottom: 15px;
            border: 1px solid ${theme.palette.borderColor.main};
            border-radius: 12px;
`,
);
