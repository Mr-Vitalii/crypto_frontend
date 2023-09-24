import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material";

const drawerWidth = 250;

export const Main = styled("main", {
    shouldForwardProp: (prop: any) =>
        prop !== "open" && prop !== "notMobile" && prop !== "isTablet",
})(
    ({
        theme,
        open,
        notMobile,
        isTablet,
    }: {
        theme: Theme;
        open: boolean;
        notMobile: boolean;
        isTablet: boolean;
    }) => {
        return {
            flexGrow: 1,
            padding: notMobile
                ? isTablet
                    ? theme.spacing(8, 1)
                    : theme.spacing(3, 1)
                : theme.spacing(3, 1),
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: `-${notMobile ? drawerWidth : 0}px`,
            ...(open && {
                transition: theme.transitions.create("margin", {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: 0,
            }),
        };
    },
);

export const DrawerHeader = styled("div")(({ theme }: { theme: Theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(6, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));
