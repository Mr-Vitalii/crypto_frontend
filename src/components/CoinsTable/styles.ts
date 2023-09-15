import { makeStyles } from "@mui/styles";
import { colors } from "theme";

export const useStyles = makeStyles({
    priceUp: {
        color: `${colors.greenAccent[200]} !important`,
    },
    priceDown: {
        color: `${colors.redAccent[200]} !important`,
    },
});
