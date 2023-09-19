import { FC, useState } from "react";
import { StyledGrid, StyledTypography } from "./styled-components";

import { ISingleCoin } from "common/types/coins";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { AlertColor, Avatar, Button, Grid, Typography } from "@mui/material";

import { selectAllCoins } from "redux/coins/selectors";
import { addWatchListElement } from "redux/watchlist/thunks";
import { getErrorMessage } from "utils/helpers/getErrorMessage";
import { AppSnackbar } from "components/AppSnackbar/AppSnackbar";

export const SingleCoin: FC = (): JSX.Element => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [severity, setSeverity] = useState<AlertColor>("success");

    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const allCoins: ISingleCoin[] = useAppSelector(selectAllCoins);

    let coin = allCoins.find((element) => element.name === (id as string));

    const handleAddCoin = async () => {
        try {
            const data = {
                name: "",
                coinId: "",
            };

            if (coin) {
                data.name = coin.name;
                data.coinId = coin.id;
            }

            await dispatch(addWatchListElement(data)).unwrap();

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
            {coin && (
                <>
                    <Typography variant="h1" align="center" sx={{ mb: 3 }}>
                        {coin.name}
                    </Typography>
                    <Grid container spacing={2} sx={{ mb: 4 }}>
                        <Grid item sm={6} xs={12}>
                            <StyledGrid>
                                <Avatar src={coin.image} sx={{ mr: "5px" }} />
                                <Typography variant="h1">
                                    {coin.symbol.toUpperCase()}
                                </Typography>
                            </StyledGrid>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <StyledGrid>
                                <Typography variant="h2">
                                    Price:&nbsp;
                                </Typography>
                                <Typography variant="h2">
                                    $ {coin.current_price}
                                </Typography>
                            </StyledGrid>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <StyledGrid iscolumn={true}>
                                <Typography variant="h3" align="center">
                                    Price change in 24 hours:&nbsp;
                                </Typography>
                                <StyledTypography
                                    variant="h2"
                                    trendup={
                                        coin.price_change_percentage_24h >= 0
                                    }
                                >
                                    $ {coin.price_change_24h.toFixed(4)}
                                </StyledTypography>
                            </StyledGrid>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <StyledGrid iscolumn={true}>
                                <Typography variant="h3" align="center">
                                    Price change in 24 hours :&nbsp;
                                </Typography>
                                <StyledTypography
                                    variant="h2"
                                    trendup={
                                        coin.price_change_percentage_24h >= 0
                                    }
                                >
                                    %{" "}
                                    {coin.price_change_percentage_24h.toFixed(
                                        2,
                                    )}
                                </StyledTypography>
                            </StyledGrid>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Button
                            color="success"
                            variant="outlined"
                            sx={{ mr: 3 }}
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </Button>
                        <Button
                            color="success"
                            variant="outlined"
                            onClick={handleAddCoin}
                        >
                            Add to favorites
                        </Button>
                    </Grid>
                    <AppSnackbar
                        open={openSnackbar}
                        setOpen={setOpenSnackbar}
                        error={error}
                        severity={severity}
                        successMessage={"Coin added"}
                        errorMessage={errorMessage}
                    />
                </>
            )}
        </>
    );
};
