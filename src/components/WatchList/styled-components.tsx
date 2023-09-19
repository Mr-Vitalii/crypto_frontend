import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.secondaryBackground.main,
    minHeight: "270px",
    border: `1px solid ${theme.palette.borderColor.main}`,
    borderRadius: "12px",
    boxShadow: "none",
    backgroundImage: "none",
}));
