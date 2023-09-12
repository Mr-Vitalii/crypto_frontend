import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    root: {
        display: "flex !important",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        padding: "20px",
    },
    form: {
        flex: 1,
    },
    formContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: 640,
        margin: "auto",
        padding: "16px 32px",
        borderRadius: 5,
        boxShadow: "-3px -2px 20px 1px #202020",
    },
});
