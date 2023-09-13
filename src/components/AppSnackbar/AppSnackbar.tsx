import React, { FC } from "react";
import { ISnackbarProps } from "common/types/snackbar";
import { Alert, Snackbar } from "@mui/material";

export const AppSnackbar: FC<ISnackbarProps> = ({
    open,
    setOpen,
    error,
    severity,
    successMessage,
    errorMessage,
}): JSX.Element => {
    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string,
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
            onClose={handleClose}
        >
            <Alert severity={severity} sx={{ width: "100%" }}>
                {!error ? successMessage : `An error occurred: ${errorMessage}`}
            </Alert>
        </Snackbar>
    );
};
