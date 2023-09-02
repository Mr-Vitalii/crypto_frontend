import React, { FC, useCallback, useEffect, useMemo, useRef } from "react";
import { selectFavoriteCoins } from "redux/coins/selectors";
import { Box, Grid } from "@mui/material";
import { getFavoriteCoins } from "redux/coins/thunks";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { useStyles } from "./styles";
import { FavoriteBlock } from "./FavoriteBlock/FavoriteBlock";
import { IChartData } from "common/types/coins";

export const Home:FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const fetchDataRef = useRef(false);
  const favoriteCoins: IChartData[] = useAppSelector(selectFavoriteCoins);
  const classes = useStyles();

  console.log(favoriteCoins);
  

  const favoriteCoinName = useMemo(() => ["bitcoin", "ethereum"], []);

  const filteredArray = useMemo(() => {
    return favoriteCoins.filter(
      (value:any, index:any, self:any) =>
        index === self.findIndex((t:any) => t.name === value.name)
    );
  }, [favoriteCoins]);

  const fetchData = useCallback(
    (data: string[]) => {
      data.forEach((element: string) => {
        dispatch(getFavoriteCoins(element));
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (fetchDataRef.current) return;
    fetchDataRef.current = true;
    fetchData(favoriteCoinName);
  }, [favoriteCoinName, fetchData, dispatch]);

  console.log(filteredArray);
  

  return (
      <Box className={classes.root}>
          <Grid container spacing={2}>
              {filteredArray.map((element: IChartData) => (
                  <FavoriteBlock key={element.name} element={element} />
              ))}
          </Grid>
      </Box>
  );
};
