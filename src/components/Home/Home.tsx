import React from "react";
import { useStyles } from "./styles";

export const Home = () => {
   const classes = useStyles();
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
