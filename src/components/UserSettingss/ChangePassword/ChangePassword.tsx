import { FC, useState } from "react";
import { RootGrid } from "./styled-components";

import { updateUserPassword } from "redux/user/thunks";

import { AlertColor, Box, Grid, TextField } from "@mui/material";
import { useAppDispatch } from "utils/hooks";
import { getErrorMessage } from "utils/helpers/getErrorMessage";

import { AppLoadingButton } from "components/global/AppLoadingButton/AppLoadingButton";
import { AppSnackbar } from "components/global/AppSnackbar/AppSnackbar";

export const ChangePassword: FC = (): JSX.Element => {
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <RootGrid
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleChangePassword}
                container
                spacing={4}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ py: 4, maxWidth: "550px" }}
            >
                <Grid item sx={{ width: "100%" }}>
                    <TextField
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        type="text"
                        label="Old password"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item sx={{ width: "100%" }}>
                    <TextField
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="text"
                        label="New password"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item>
                    <AppLoadingButton type="submit">
                        Change password
                    </AppLoadingButton>
                </Grid>
            </RootGrid>
            <AppSnackbar
                open={openSnackbar}
                setOpen={setOpenSnackbar}
                error={error}
                severity={severity}
                successMessage={"Password changed"}
                errorMessage={errorMessage}
            />
        </Box>
    );
};
