import { FC, useState } from "react";
import {
    AlertColor,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    Typography,
} from "@mui/material";

import { colors } from "theme";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "utils/hooks";
import { deleteUser } from "redux/auth/thunks";

import { getErrorMessage } from "utils/helpers/getErrorMessage";
import { AppSnackbar } from "components/AppSnackbar/AppSnackbar";

export const DeleteUser: FC = (): JSX.Element => {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [severity, setSeverity] = useState<AlertColor>("success");

    const handleDelete = (): void => {
        try {
            dispatch(deleteUser());
            sessionStorage.removeItem("user");
            setError(false);
            setSeverity("success");
            setOpenSnackbar(true);
            navigate("/login");
        } catch (e) {
            setErrorMessage(getErrorMessage(e));
            setError(true);
            setSeverity("error");
            setOpenSnackbar(true);
        }
    };

    return (
        <>
            <Grid container spacing={4} direction="column" alignItems="center">
                <Grid item>
                    <Typography align="center" variant="h2">
                        Account deleting
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" sx={{ textAlign: "center" }}>
                        Dear user, by deleting your account, you delete all
                        personal information. After deletion, all the
                        information you saved will be inaccessible.
                    </Typography>
                </Grid>
                <Grid item>
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
                                        color: colors.blueAccent[500],
                                        "&.Mui-checked": {
                                            color: colors.blueAccent[500],
                                        },
                                    }}
                                />
                            }
                            label="I agree"
                        />
                    </FormGroup>
                </Grid>
                <Grid item>
                    <Button
                        onClick={handleDelete}
                        color="error"
                        variant="outlined"
                        disabled={!checked}
                    >
                        Delete account
                    </Button>
                </Grid>
            </Grid>
            <AppSnackbar
                open={openSnackbar}
                setOpen={setOpenSnackbar}
                error={error}
                severity={severity}
                successMessage={"Account deleted"}
                errorMessage={errorMessage}
            />
        </>
    );
};
