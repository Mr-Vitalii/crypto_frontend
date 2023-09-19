import { styled } from "@mui/material/styles";
import { Theme, TableCell } from "@mui/material";
import { TableContainer } from "@mui/material";
import { colors } from "theme";

export const StyledTableContainer = styled(TableContainer)(
    ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.secondaryBackground.main,
        boxShadow: "none",
        backgroundImage: "none",
    }),
);

export const StyledTableCell = styled(TableCell, {
    shouldForwardProp: (prop: any) => prop !== "trendup",
})(({ theme, trendup }: { theme: Theme; trendup: boolean }) => ({
    color: trendup
        ? theme.palette.mode === "light"
            ? colors.greenAccent[300]
            : colors.greenAccent[200]
        : theme.palette.mode === "light"
        ? colors.redAccent[300]
        : colors.redAccent[200],
}));
