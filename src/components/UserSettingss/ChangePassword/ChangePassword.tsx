import React, { FC, useState } from "react";
import { useStyles } from "./styles";
import { AlertColor, Box, Grid, TextField } from "@mui/material";
import { useAppDispatch } from "utils/hooks";

import { AppLoadingButton } from "components/AppLoadingButton/AppLoadingButton";
import { updateUserPassword } from "redux/auth/thunks";

import { getErrorMessage } from "utils/helpers/getErrorMessage";
import { AppSnackbar } from "components/AppSnackbar/AppSnackbar";

export const ChangePassword: FC = (): JSX.Element => {
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const classes = useStyles();
    const dispatch = useAppDispatch();

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [severity, setSeverity] = useState<AlertColor>("success");

    const handleChangePassword = async (
        e: React.FormEvent<HTMLFormElement>,
    ) => {
        e.preventDefault();
        try {
            const data = {
                oldPassword,
                newPassword,
            };
            await dispatch(updateUserPassword(data)).unwrap();
            setError(false);
            setSeverity("success");
            setOpenSnackbar(true);
        } catch (e) {
            setErrorMessage(getErrorMessage(e));
            setError(true);
            setSeverity("error");
            setOpenSnackbar(true);
        }
    };

    return (
        <>
            <Grid
                component="form"
                noValidate
                autoComplete="off"
                className={classes.root}
                onSubmit={handleChangePassword}
            >
                <Box className={classes.formWrapper}>
                    <TextField
                        className={classes.inputField}
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        type="text"
                        label="Old password"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        className={classes.inputField}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="text"
                        label="New password"
                        variant="outlined"
                        fullWidth
                    />
                    <Box className={classes.buttonSubmitBlock}>
                        <AppLoadingButton type="submit">
                            Change password
                        </AppLoadingButton>
                    </Box>
                </Box>
            </Grid>
            <AppSnackbar
                open={openSnackbar}
                setOpen={setOpenSnackbar}
                error={error}
                severity={severity}
                successMessage={"Password changed"}
                errorMessage={errorMessage}
            />
        </>
    );
};
