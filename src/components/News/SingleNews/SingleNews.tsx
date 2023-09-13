import React, { FC } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { ISingleNewsProps } from "common/types/news";

export const SingleNews: FC<ISingleNewsProps> = ({ element }): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid container className={classes.newsBlock}>
            <Grid item xs={12} md={3}>
                <img src={element.imageurl} alt={element.categories} />
            </Grid>
            <Grid item xs={12} md={8}>
                <Box className={classes.newsTitle}>
                    <Typography variant="h3">{element.title}</Typography>
                </Box>
                <Box>
                    <Typography
                        variant="body1"
                        className={classes.textContainer}
                    >
                        {element.body}
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={12} md={12} className={classes.readMore}>
                <Typography variant="h4">
                    <Link href={element.url}>Read more</Link>
                </Typography>
            </Grid>
        </Grid>
    );
};
