import React, { FC, useEffect, useState } from "react";
import { AlertColor, Box, Grid, TextField } from "@mui/material";
import { useStyles } from "./styles";
import { useAppDispatch, useAuth } from "utils/hooks";
// import { getPublicUser, updateUserInfo } from "../../store/thunks/auth";
import { AppLoadingButton } from "components/AppLoadingButton/AppLoadingButton";
import { updateUserInfo } from "redux/auth/thunks";

import { getErrorMessage } from "utils/helpers/getErrorMessage";
import { AppSnackbar } from "components/AppSnackbar/AppSnackbar";

export const SettingsPersonalInfo: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [severity, setSeverity] = useState<AlertColor>("success");

    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            setName(user.firstName);
            setUsername(user.userName);
            setEmail(user.email);
        }
    }, [user]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = {
                firstName: name,
                userName: username,
                email: email,
            };
            await dispatch(updateUserInfo(data)).unwrap();
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
                onSubmit={handleSubmit}
            >
                <Box className={classes.formWrapper}>
                    <TextField
                        className={classes.inputField}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        label="Имя"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        className={classes.inputField}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        label="Username"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        className={classes.inputField}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        label="Email"
                        variant="outlined"
                        fullWidth
                    />
                    <Box className={classes.buttonBlock}>
                        <AppLoadingButton type="submit">Save</AppLoadingButton>
                    </Box>
                </Box>
            </Grid>
            <AppSnackbar
                open={openSnackbar}
                setOpen={setOpenSnackbar}
                error={error}
                severity={severity}
                successMessage={"Data changed"}
                errorMessage={errorMessage}
            />
        </>
    );
};
