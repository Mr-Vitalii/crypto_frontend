import { styled } from "@mui/material/styles";
import { Grid, Theme } from "@mui/material";

export const StyledGrid = styled(Grid)(
    ({ theme, column }: { theme: Theme; column: boolean }) => ({
        display: "flex",
        flexDirection: `${column ? "column" : "row"}`,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondaryBackground.main,
        padding: "20px 16px",
        maxWidth: "500px",
        minHeight: "185px",
        border: `1px solid ${theme.palette.borderColor.main}`,
        borderRadius: "12px",
    }),
);
