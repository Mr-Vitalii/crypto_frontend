import React, { FC, useEffect, useState } from "react";
import { updateUserInfo } from "redux/user/thunks";

import { AlertColor, Grid, TextField, Box } from "@mui/material";
import { RootGrid } from "./styled-components";
import { useAppDispatch, useAuth } from "utils/hooks";
import { getErrorMessage } from "utils/helpers/getErrorMessage";

import { AppLoadingButton } from "components/global/AppLoadingButton/AppLoadingButton";
import { AppSnackbar } from "components/global/AppSnackbar/AppSnackbar";

export const SettingsPersonalInfo: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <RootGrid
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                container
                spacing={4}
                direction="column"
                alignItems="center"
                sx={{ py: 4, maxWidth: "550px" }}
            >
                <Grid item sx={{ width: "100%" }}>
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        label="Имя"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item sx={{ width: "100%" }}>
                    <TextField
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        label="Username"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item sx={{ width: "100%" }}>
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        label="Email"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item>
                    <AppLoadingButton type="submit">Save</AppLoadingButton>
                </Grid>
            </RootGrid>
            <AppSnackbar
                open={openSnackbar}
                setOpen={setOpenSnackbar}
                error={error}
                severity={severity}
                successMessage={"Data changed"}
                errorMessage={errorMessage}
            />
        </Box>
    );
};
