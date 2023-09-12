import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICoinsData, ICoinsState, ISingleCoin } from "common/types/coins";
import { getFavoriteCoins, getTopPriceData } from "./thunks";

const initialState: ICoinsState = {
    coins: [],
    favoriteCoins: [],
    favoriteCoinsIsLoading: false,
    coinsIsLoading: false,
};

export const coinsSlice = createSlice({
    name: "coins",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFavoriteCoins.pending, (state) => {
            state.favoriteCoinsIsLoading = true;
        });
        builder.addCase(
            getFavoriteCoins.fulfilled,
            (state, action: PayloadAction<ICoinsData>) => {
                state.favoriteCoins.push(action.payload);
                state.favoriteCoinsIsLoading = false;
            },
        );
        builder.addCase(getFavoriteCoins.rejected, (state) => {
            state.favoriteCoinsIsLoading = false;
        });

        builder.addCase(getTopPriceData.pending, (state) => {
            state.coinsIsLoading = true;
        });
        builder.addCase(
            getTopPriceData.fulfilled,
            (state, action: PayloadAction<ISingleCoin[]>) => {
                state.coins = action.payload;
                state.coinsIsLoading = false;
            },
        );
        builder.addCase(getTopPriceData.rejected, (state) => {
            state.coinsIsLoading = false;
        });
    },
});

export const coinsReducer = coinsSlice.reducer;
