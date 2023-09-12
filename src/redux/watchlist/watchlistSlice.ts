import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWatchlistCoin, IWatchlistState } from "common/types/watchlist";
import { getWatchlistElements } from "./thunks";

const initialState: IWatchlistState = {
    watchlistCoins: [],
    isLoading: false,
};

export const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getWatchlistElements.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(
            getWatchlistElements.fulfilled,
            (state, action: PayloadAction<IWatchlistCoin[]>) => {
                state.watchlistCoins = action.payload;
                state.isLoading = false;
            },
        );
        builder.addCase(getWatchlistElements.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const watchlistReducer = watchlistSlice.reducer;
