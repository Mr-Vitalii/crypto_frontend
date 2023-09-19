import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material";

const drawerWidth = 250;

export const Main = styled("main", {
    shouldForwardProp: (prop: any) => prop !== "open" && prop !== "mobile",
})(
    ({
        theme,
        open,
        mobile,
    }: {
        theme: Theme;
        open: boolean;
        mobile: string;
    }) => {
        return {
            flexGrow: 1,
            padding: mobile ? theme.spacing(3) : theme.spacing(7, 1),
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: `-${mobile ? drawerWidth : 0}px`,
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
