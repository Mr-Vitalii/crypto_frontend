import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWatchlistCoin, IWatchlistState } from "common/types/watchlist";
import {
    addWatchListElement,
    deleteWatchListElement,
    getWatchlistElements,
} from "./thunks";

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

        builder.addCase(addWatchListElement.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addWatchListElement.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(addWatchListElement.rejected, (state) => {
            state.isLoading = false;
        });

        builder.addCase(deleteWatchListElement.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(
            deleteWatchListElement.fulfilled,
            (state, action: PayloadAction<{ id: string; message: string }>) => {
                state.isLoading = false;
                const index = state.watchlistCoins.findIndex(
                    (element) => element._id === action.payload.id,
                );
                state.watchlistCoins.splice(index, 1);
            },
        );
        builder.addCase(deleteWatchListElement.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const watchlistReducer = watchlistSlice.reducer;
