import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { Grid } from "@mui/material";

export const StyledGrid = styled(Grid)(({ theme }: { theme: Theme }) => ({
    justifyContent: "space-between",
    backgroundColor: theme.palette.secondaryBackground.main,
    minHeight: "270px",
    border: `1px solid ${theme.palette.borderColor.main}`,
    borderRadius: "12px",
    boxShadow: "none",
    backgroundImage: "none",
}));
