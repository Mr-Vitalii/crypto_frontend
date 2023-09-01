import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { selectFavoriteCoins } from "redux/coins/selectors";
import { getFavoriteCoins } from "redux/coins/thunks";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { useStyles } from "./styles";

export const Home = () => {
  const dispatch = useAppDispatch();
  const fetchDataRef = useRef(false);
  const favoriteCoins = useAppSelector(selectFavoriteCoins);
  const classes = useStyles();

   const favoriteCoinName = useMemo(() => ["bitcoin", "ethereum"], []);

  console.log(favoriteCoins);

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

  return (
    <div className={classes.home}>
      <h1>
        Welcome page
        <span role="img" aria-label="Greeting icon">
          👻
        </span>
      </h1>
    </div>
  );
};
