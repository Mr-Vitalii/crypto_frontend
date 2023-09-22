import { FC } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { StyledGrid } from "./styled-components";
import { ISingleNewsProps } from "common/types/news";

export const SingleNews: FC<ISingleNewsProps> = ({ element }): JSX.Element => {
    return (
        <StyledGrid container sx={{ px: 2, py: 3, mb: 4 }}>
            <Grid item xs={12} md={4}>
                <img
                    style={{ width: "100%" }}
                    src={element.imageurl}
                    alt={element.categories}
                />
            </Grid>
            <Grid item xs={12} md={7.5} sx={{ mb: 2 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h3">{element.title}</Typography>
                </Box>
                <Box sx={{ maxHeight: "210px", overflow: "hidden" }}>
                    <Typography variant="body1">{element.body}</Typography>
                </Box>
            </Grid>

            <Grid item xs={12} md={12} sx={{ textAlign: "center" }}>
                <Typography variant="h4">
                    <Link href={element.url}>Read more</Link>
                </Typography>
            </Grid>
        </StyledGrid>
    );
};
