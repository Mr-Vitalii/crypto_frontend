import { createSlice } from "@reduxjs/toolkit";
import { getWatchlistElements } from "./thunks";

const initialState: any = {
    coins: [],
};

export const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getWatchlistElements.fulfilled, (state, action) => {
            state.coins = action.payload;
        });
    },
});

export default watchlistSlice.reducer;
