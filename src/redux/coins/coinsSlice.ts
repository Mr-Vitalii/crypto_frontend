import { createSlice } from "@reduxjs/toolkit";
import {
    createWatchListRecord,
    getFavoriteCoins,
    getTopPriceData,
} from "./thunks";

const handleRejected = (state: any, action: any) => {
    state.error = action.payload;
};

const initialState: any = {
    coins: [],
    favoriteCoins: [],
    error: null,
};

export const coinsSlice = createSlice({
    name: "assets",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFavoriteCoins.fulfilled, (state, action) => {
                state.favoriteCoins.push(action.payload);
            })
            .addCase(getFavoriteCoins.rejected, handleRejected);

        builder
            .addCase(getTopPriceData.fulfilled, (state, action) => {
                state.coins = action.payload;
            })
            .addCase(getTopPriceData.rejected, handleRejected);

        builder
            .addCase(createWatchListRecord.fulfilled, (state, action) => {
                state.coins = action.payload;
            })
            .addCase(createWatchListRecord.rejected, handleRejected);
    },
});

export default coinsSlice.reducer;
