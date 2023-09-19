import { styled } from "@mui/material/styles";
import { Container, Box } from "@mui/material";
import { colors } from "theme";

export const StyledContainer = styled(Container)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    padding: "20px",
});

export const Form = styled("form")({
    flex: 1,
});

export const StyledBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: "640px",
    margin: "auto",
    padding: "16px 32px",
    borderRadius: "5px",
    boxShadow: `-3px -2px 20px 1px ${colors.secondary[800]}`,
});
