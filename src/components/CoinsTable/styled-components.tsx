import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { TableContainer } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)(
    ({ theme }: { theme: Theme }) => `
            background-color: ${theme.palette.secondaryBackground.main};
            box-shadow: none;
            background-image: none;
`,
);