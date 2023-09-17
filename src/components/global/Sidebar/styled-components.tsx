import { styled } from "@mui/material/styles";
import { Box, Typography, Theme } from "@mui/material";
import { colors } from "theme";

export const NavBlock = styled(Box)(
    ({ theme }: { theme: Theme }) => `
   width: 100%;
    border-bottom: 1px solid ${theme.palette.borderColor.main};
`,
);

export const BrandContainer = styled(Box)`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

export const BrandTitle = styled(Typography)(
    ({ theme }: { theme: Theme }) => `
   color: ${
       theme.palette.mode === "dark"
           ? colors.whiteAccent[500]
           : colors.blackAccent[500]
   };
`,
);
