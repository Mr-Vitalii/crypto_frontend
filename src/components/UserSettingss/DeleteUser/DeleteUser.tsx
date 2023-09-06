import { FC, useState } from "react";
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    Typography,
    useTheme,
} from "@mui/material";
import { useStyles } from "./styles";
import { tokens } from "theme";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "utils/hooks";
import { deleteUser } from "redux/auth/thunks";

export const DeleteUser: FC = (): JSX.Element => {
    const [checked, setChecked] = useState(false);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deleteUser());
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("name");
        navigate("/login");
    };

    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.tabHeading}>
                <Typography variant="h2">Account deleting</Typography>
            </Grid>
            <Grid item className={classes.alertMessage}>
                <Typography variant="body1">
                    Dear user, by deleting your account, you delete all personal
                    information. After deletion, all the information you saved
                    will be inaccessible.
                </Typography>
            </Grid>
            <Grid item className={classes.checkBoxBlock}>
                <FormGroup>
                    <FormControlLabel
                        sx={{
                            justifyContent: "center",
                        }}
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                                sx={{
                                    color: colors.blue,
                                    "&.Mui-checked": {
                                        color: colors.blue,
                                    },
                                }}
                            />
                        }
                        label="I agree"
                    />
                </FormGroup>
            </Grid>
            <Grid item className={classes.buttonBlock}>
                <Button
                    onClick={handleDelete}
                    color="success"
                    variant="outlined"
                    disabled={!checked}
                >
                    Delete account
                </Button>
            </Grid>
        </Grid>
    );
};
