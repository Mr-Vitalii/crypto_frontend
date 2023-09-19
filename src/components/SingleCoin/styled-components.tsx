import { styled } from "@mui/material/styles";
import { Grid, Typography, Theme } from "@mui/material";
import { colors } from "theme";

export const StyledGrid = styled(Grid, {
    shouldForwardProp: (prop: any) => prop !== "iscolumn",
})(({ theme, iscolumn }: { theme: Theme; iscolumn: boolean }) => ({
    display: "flex",
    flexDirection: `${iscolumn ? "column" : "row"}`,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.secondaryBackground.main,
    padding: "20px 16px",
    maxWidth: "500px",
    minHeight: "185px",
    border: `1px solid ${theme.palette.borderColor.main}`,
    borderRadius: "12px",
}));

export const StyledTypography = styled(Typography, {
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
