import { createSlice } from "@reduxjs/toolkit";
import { getWatchlistElements } from "./thunks";

const initialState: any = {
    watchlistCoins: [],
};

export const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getWatchlistElements.fulfilled, (state, action) => {
            state.watchlistCoins = action.payload;
        });
    },
});

export const watchlistReducer = watchlistSlice.reducer;
