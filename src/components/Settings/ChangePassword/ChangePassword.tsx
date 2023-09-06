import React, { FC, useState } from "react";
import { useStyles } from "./styles";
import { Box, Grid, TextField } from "@mui/material";
import { useAppDispatch } from "utils/hooks";

// import { updateUserPassword } from "../../store/thunks/auth";
import { AppLoadingButton } from "components/AppLoadingButton/AppLoadingButton";

export const ChangePassword: FC = (): JSX.Element => {
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const classes = useStyles();
    const dispatch = useAppDispatch();

    const handleChangePassword = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const data = {
            oldPassword,
            newPassword,
        };

        // dispatch(updateUserPassword(data));
    };

    return (
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
                    label="Старый пароль"
                    variant="outlined"
                />
                <TextField
                    className={classes.inputField}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="text"
                    label="Новый пароль"
                    variant="outlined"
                />
                <Box className={classes.buttonSubmitBlock}>
                    <AppLoadingButton type="submit">
                        Change password
                    </AppLoadingButton>
                </Box>
            </Box>
        </Grid>
    );
};
