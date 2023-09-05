import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import coinsSlice from "./coins/coinsSlice";
import newsSlice from "./news/newsSlice";
import watchlistSlice from "./watchlist/watchlistSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        coins: coinsSlice,
        watchlist: watchlistSlice,
        news: newsSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
