import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth/authSlice";
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
        auth: authReducer,
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
