import { createSlice } from "@reduxjs/toolkit";
import { getFavoriteCoins, getTopPriceData } from "./thunks";

const handleRejected = (state: any, action: any) => {
    state.error = action.payload;
};

const initialState: any = {
    coins: [],
    favoriteCoins: [],
    error: null,
    isLoading: false,
};

export const coinsSlice = createSlice({
    name: "coins",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFavoriteCoins.fulfilled, (state, action) => {
                console.log(action.payload);

                state.favoriteCoins.push(action.payload);
            })
            .addCase(getFavoriteCoins.rejected, handleRejected);

        builder
            .addCase(getTopPriceData.fulfilled, (state, action) => {
                console.log(action.payload);
                state.coins = action.payload;
            })
            .addCase(getTopPriceData.rejected, handleRejected);
    },
});

export const coinsReducer = coinsSlice.reducer;
