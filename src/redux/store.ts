import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./user/userSlice";
import { coinsReducer } from "./coins/coinsSlice";
import { newsReducer } from "./news/newsSlice";
import { watchlistReducer } from "./watchlist/watchlistSlice";

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        user: userReducer,
        coins: coinsReducer,
        watchlist: watchlistReducer,
        news: newsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
    devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
