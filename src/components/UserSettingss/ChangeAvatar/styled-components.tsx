import { styled } from "@mui/material/styles";
import { Box, ListItem, Theme } from "@mui/material";
import { colors } from "theme";

export const FormContainer = styled(Box)({
    margin: "auto",
    maxWidth: "550px",
});

export const Form = styled("form")({
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
});

export const DropContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    minHeight: "150px",
    textAlign: "center",
    cursor: "pointer",
    border: `2px dashed ${colors.secondary[500]}`,
    transition: "border 0.3s ease",
    "&:hover": {
        borderColor: colors.blueAccent[500],
    },
});

export const FilePreview = styled(Box)(({ theme }: { theme: Theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",

    "& img": {
        width: "80px",
        height: "80px",
        objectFit: "cover",
        border: `1px solid ${colors.secondary[500]}`,
        borderRadius: "5px",
    },
}));

export const RejectedFiles = styled(Box)({
    marginTop: "15px",
    marginBottom: "15px",
});

export const DeleteButton = styled("button")(({ theme }: { theme: Theme }) => ({
    marginTop: "5px",
    backgroundColor: colors.redAccent[500],
    color: theme.palette.common.white,
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",

    "&:hover": {
        backgroundColor: colors.redAccent[300],
    },
}));

export const StyledListItem = styled(ListItem, {
    shouldForwardProp: (prop: any) => prop !== "key",
})(({ theme }: { theme: Theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: theme.palette.secondaryBackground.main,
    color: colors.redAccent[300],
}));
