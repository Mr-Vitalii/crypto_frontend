import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { TableContainer } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)(
    ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.secondaryBackground.main,
        boxShadow: "none",
        backgroundImage: "none",
    }),
);
