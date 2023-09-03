import { createSlice } from "@reduxjs/toolkit";
import { getFavoriteCoins, getTopPriceData } from "./thunks";

const initialState: any = {
    coins: [],
    favoriteCoins: [],
};

export const coinsSlice = createSlice({
    name: "assets",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFavoriteCoins.fulfilled, (state, action) => {
            state.favoriteCoins.push(action.payload);
        });
        builder.addCase(getTopPriceData.fulfilled, (state, action) => {
            state.coins = action.payload;
        });
    },
});

export default coinsSlice.reducer;
