import { styled } from "@mui/material/styles";
import { Box, Theme } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }: { theme: Theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.secondaryBackground.main,
    padding: "20px 16px",
    marginBottom: "15px",
    border: `1px solid ${theme.palette.borderColor.main}`,
    borderRadius: "12px",
}));
