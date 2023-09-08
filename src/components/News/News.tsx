import { FC, useEffect } from "react";
import { selectNews } from "redux/news/selectors";
import { getNews } from "redux/news/thunks";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { SingleNews } from "./SingleNews/SingleNews";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { ISingleNews } from "common/types/coins";

export const News: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const news = useAppSelector(selectNews);

    const classes = useStyles();

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    return (
        <Grid className={classes.root}>
            <Grid className={classes.blockTitle}>
                <Typography variant="h2">News</Typography>
            </Grid>
            <Grid>
                {news.map((element: ISingleNews) => (
                    <SingleNews key={element.id} element={element} />
                ))}
            </Grid>
        </Grid>
    );
};
