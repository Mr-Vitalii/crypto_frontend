import { FC, useState } from "react";
import { toast } from "react-hot-toast";
import { Box, Typography, useTheme } from "@mui/material";
import { resendVerifyEmail } from "redux/user/thunks";

import { useAppDispatch, useAppSelector, useAuth } from "utils/hooks";
import { getErrorMessage } from "utils/helpers/getErrorMessage";

import { AppLoadingButton } from "components/global/AppLoadingButton/AppLoadingButton";
import { AppButton } from "components/global/AppButton/AppButton";

import { colors } from "theme";
import { useNavigate } from "react-router-dom";
import { selectAuthIsLoading } from "redux/user/selectors";
import { StyledBox, StyledContainer } from "../styled-components";

export const EmailConfirmation: FC = (): JSX.Element => {
    const { user } = useAuth();
    const theme = useTheme();
    const navigate = useNavigate();
    const loading = useAppSelector(selectAuthIsLoading);

    const [isDisabled, setIsDisabled] = useState(false);

    const dispatch = useAppDispatch();

    const handleResend = async () => {
        try {
            await dispatch(resendVerifyEmail({ email: user.email })).unwrap();
            toast.success(
                `An email with your confirmation link has been resent`,
                {
                    duration: 3000,
                },
            );
            setIsDisabled(true);
        } catch (e) {
            toast.error(getErrorMessage(e), {
                duration: 3000,
            });
        }
    };
    const handleProceed = async () => {
        navigate("/login");
    };

    return (
        <StyledContainer>
            <StyledBox>
                <Typography variant="h2" align="center" sx={{ mb: 2 }}>
                    Account Confirmation
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 2 }}>
                    Congratulations, registration was successful!
                </Typography>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        There's only one last step left. An email with your
                        confirmation link has been sent to your email:{" "}
                        <Typography
                            sx={{
                                display: "inline",
                                color: colors.blueAccent[500],
                                marginLeft: "5px",
                            }}
                        >
                            {user.email}
                        </Typography>
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        After you confirm your email, click the "Proceed"
                        button.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        If for some reason you did not receive the message,
                        click the “Resend” button and we will resend the email
                        with your confirmation link to you.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        p: 2,
                        [theme.breakpoints.down("sm")]: {
                            p: 1,
                            flexDirection: "column",
                        },
                    }}
                >
                    <AppButton onClick={handleProceed}>Proceed</AppButton>
                    <AppLoadingButton
                        disabled={isDisabled}
                        loading={loading}
                        type="button"
                        sx={{
                            width: "60%",
                            ml: 2,
                            [theme.breakpoints.down("sm")]: {
                                ml: 0,
                                mt: 2,
                            },
                        }}
                        variant="contained"
                        onClick={handleResend}
                    >
                        Resend
                    </AppLoadingButton>
                </Box>
            </StyledBox>
        </StyledContainer>
    );
};
