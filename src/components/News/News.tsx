import { FC, useCallback, useEffect, useState } from "react";
import { selectNews, selectNewsIsLoading } from "redux/news/selectors";
import { getNews } from "redux/news/thunks";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { SingleNews } from "./SingleNews/SingleNews";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { ISingleNews } from "common/types/news";
import { getErrorMessage } from "utils/helpers/getErrorMessage";
import { LoadingComponent } from "components/LoadingComponent/LoadingComponent";
import { useErrorBoundary } from "react-error-boundary";

export const News: FC = (): JSX.Element => {
    const [newsItems, setNewsItems] = useState([]);
    const [loadedNewsCount, setLoadedNewsCount] = useState(10);
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useAppDispatch();
    const news = useAppSelector(selectNews);
    const newsIsLoading = useAppSelector(selectNewsIsLoading);
    const totalNewsCount = news.length;
    const { showBoundary } = useErrorBoundary();

    const classes = useStyles();

    const fetchNews = useCallback(async () => {
        try {
            await dispatch(getNews()).unwrap();
        } catch (error) {
            showBoundary(getErrorMessage(error));
        }
    }, [dispatch, showBoundary]);

    useEffect(() => {
        fetchNews();
    }, [dispatch, fetchNews]);

    useEffect(() => {
        if (isLoaded) {
            setLoadedNewsCount((prevState) => prevState + 10);
        }
        setIsLoaded(false);
    }, [isLoaded]);

    const handleScroll = useCallback(
        (e: any) => {
            if (
                e.currentTarget.documentElement.scrollHeight -
                    (e.currentTarget.documentElement.scrollTop +
                        window.innerHeight) <
                100
            ) {
                if (loadedNewsCount >= totalNewsCount) return;
                setIsLoaded(true);
            }
        },
        [totalNewsCount, loadedNewsCount],
    );

    useEffect(() => {
        setNewsItems(news.slice(0, loadedNewsCount));
    }, [news, loadedNewsCount]);

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <Grid className={classes.root}>
            <Grid className={classes.blockTitle}>
                <Typography variant="h2">News</Typography>
            </Grid>
            {newsIsLoading ? (
                <LoadingComponent />
            ) : (
                <Grid>
                    {newsItems.map((element: ISingleNews) => (
                        <SingleNews key={element.id} element={element} />
                    ))}
                </Grid>
            )}
        </Grid>
    );
};
