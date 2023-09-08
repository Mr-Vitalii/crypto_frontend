import React, { FC, useState } from "react";
import { useStyles } from "./styles";

import { ISingleCoin } from "common/types/coins";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { useNavigate, useParams } from "react-router-dom";
import {
    Alert,
    AlertColor,
    Avatar,
    Button,
    Grid,
    Snackbar,
    Typography,
} from "@mui/material";

import { selectAllCoins, selectCoinsError } from "redux/coins/selectors";

import { FlexBetween } from "components/FlexBetween/FlexBetween";
import { addWatchListElement } from "redux/watchlist/thunks";

export const SingleCoin: FC = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [severity, setSeverity] = useState<AlertColor>("success");

    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const serverError = useAppSelector(selectCoinsError);
    const allCoins: ISingleCoin[] = useAppSelector(selectAllCoins);
    const classes = useStyles();

    const coin = allCoins.find((element) => element.name === (id as string));
    const errorMessage = serverError ? serverError : "Ooops, something wrong";

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
            await dispatch(addWatchListElement(data));
            setError(false);
            setSeverity("success");
            setOpen(true);
        } catch (e) {
            setError(true);
            setSeverity("error");
            setOpen(true);
        }
    };

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
        <>
            {coin && (
                <Grid container className={classes.root}>
                    <Grid item xs={12} className={classes.coinName}>
                        <Typography variant="h1">{coin.name}</Typography>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid container className={classes.cardItem}>
                            <FlexBetween>
                                <Avatar
                                    src={coin.image}
                                    className={classes.coinIcon}
                                />
                                <Typography
                                    variant="h2"
                                    className={classes.coinSymbol}
                                >
                                    {coin.symbol.toUpperCase()}
                                </Typography>
                            </FlexBetween>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid container className={classes.cardItem}>
                            <FlexBetween>
                                <Typography
                                    variant="h2"
                                    className={classes.cardTitle}
                                >
                                    Price:&nbsp;
                                </Typography>
                                <Typography
                                    variant="h2"
                                    className={classes.coinPrice}
                                >
                                    $ {coin.current_price}
                                </Typography>
                            </FlexBetween>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid container className={classes.cardItem}>
                            <Typography
                                variant="h2"
                                className={classes.cardTitle}
                            >
                                Price change in 24 hours:&nbsp;
                            </Typography>
                            <Typography
                                variant="h2"
                                className={
                                    coin.price_change_percentage_24h >= 0
                                        ? `${classes.coinPriceDetail} ${classes.trendUp}`
                                        : `${classes.coinPriceDetail} ${classes.trendDown}`
                                }
                            >
                                $ {coin.price_change_24h.toFixed(4)}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid container className={classes.cardItem}>
                            <Typography
                                variant="h2"
                                className={classes.cardTitle}
                            >
                                Price change in 24 hours :&nbsp;
                            </Typography>
                            <Typography
                                variant="h2"
                                className={
                                    coin.price_change_percentage_24h >= 0
                                        ? `${classes.coinPriceDetail} ${classes.trendUp}`
                                        : `${classes.coinPriceDetail} ${classes.trendDown}`
                                }
                            >
                                % {coin.price_change_percentage_24h.toFixed(2)}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        justifyContent="center"
                        className={classes.cardButtonBlock}
                    >
                        <Button
                            color="success"
                            variant="outlined"
                            className={classes.cardButton}
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </Button>
                        <Button
                            color="success"
                            variant="outlined"
                            className={classes.cardButton}
                            onClick={handleAddCoin}
                        >
                            Add to favorites
                        </Button>
                    </Grid>
                    <Snackbar
                        open={open}
                        autoHideDuration={2000}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                        onClose={handleClose}
                    >
                        <Alert severity={severity} sx={{ width: "100%" }}>
                            {!error ? "Coin added" : errorMessage}
                        </Alert>
                    </Snackbar>
                </Grid>
            )}
        </>
    );
};
