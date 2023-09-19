import { styled } from "@mui/material/styles";
import { Box, Typography, ListItemButton, Theme } from "@mui/material";
import { colors } from "theme";

export const NavBlock = styled(Box)(({ theme }: { theme: Theme }) => ({
    width: "100%",
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
}));

export const BrandContainer = styled(Typography)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
});

export const BrandTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
    color:
        theme.palette.mode === "dark"
            ? theme.palette.common.white
            : theme.palette.common.black,
}));

export const DrawerHeader = styled("div")(({ theme }: { theme: Theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export const StyledListItemButton = styled(ListItemButton, {
    shouldForwardProp: (prop: any) => prop !== "active",
})(({ theme, active }: { theme: Theme; active?: boolean }) => {
    return {
        backgroundColor: "transparent",
        color: colors.secondary[500],
        "& .MuiSvgIcon-root": {
            color: colors.secondary[500],
        },
        "&:hover, &:focus": {
            backgroundColor: colors.blueAccent[500],
            color: theme.palette.common.white,
            borderRadius: "4px",
            "& .MuiSvgIcon-root": {
                color: theme.palette.common.white,
            },
        },
        ...(active && {
            backgroundColor: colors.blueAccent[500],
            color: theme.palette.common.white,
            "& .MuiSvgIcon-root": {
                color: theme.palette.common.white,
            },
        }),
    };
});
