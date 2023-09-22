import { FC, useCallback, useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { Box, Typography, useTheme } from "@mui/material";

import { selectNews, selectNewsIsLoading } from "redux/news/selectors";
import { getNews } from "redux/news/thunks";

import { useAppDispatch, useAppSelector } from "utils/hooks";
import { getErrorMessage } from "utils/helpers/getErrorMessage";
import { ISingleNews } from "common/types/news";

import { SingleNews } from "./SingleNews/SingleNews";
import { LoadingComponent } from "components/global/LoadingComponent/LoadingComponent";

export const News: FC = (): JSX.Element => {
    const [newsItems, setNewsItems] = useState([]);
    const [loadedNewsCount, setLoadedNewsCount] = useState(10);
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useAppDispatch();
    const news = useAppSelector(selectNews);
    const newsIsLoading = useAppSelector(selectNewsIsLoading);
    const totalNewsCount = news.length;
    const { showBoundary } = useErrorBoundary();
    const theme = useTheme();

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
        <Box
            sx={{
                a: {
                    textDecoration: "none",
                    color: `${
                        theme.palette.mode === "light"
                            ? theme.palette.common.black
                            : theme.palette.common.white
                    }`,
                },
            }}
        >
            <Box sx={{ mb: 4, textAlign: "center" }}>
                <Typography variant="h2">News</Typography>
            </Box>
            {newsIsLoading ? (
                <LoadingComponent />
            ) : (
                <Box>
                    {newsItems.map((element: ISingleNews) => (
                        <SingleNews key={element.id} element={element} />
                    ))}
                </Box>
            )}
        </Box>
    );
};
