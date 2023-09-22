import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICoinsData, ISingleCoin } from "common/types/coins";
import { coinGeckoApi } from "utils/axios";

export const getFavoriteCoins = createAsyncThunk<
    ICoinsData,
    string,
    { rejectValue: string }
>("favoriteCoins/markets", async (coinName, { rejectWithValue }) => {
    try {
        const coins = await coinGeckoApi.get(
            `coins/${coinName}/market_chart?vs_currency=usd&days=90`,
        );
        const singleCoin = await coinGeckoApi.get(
            `coins/markets?vs_currency=usd&ids=${coinName}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
        );
        return {
            name: coinName,
            price_chart_data: coins.data.prices.slice(
                coins.data.prices.length - 60,
                coins.data.prices.length - 1,
            ),
            singleCoin: singleCoin.data,
        };
    } catch (error: any) {
        if (error.response && error.response.data.error) {
            return rejectWithValue(error.response.data.error);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

export const getTopPriceData = createAsyncThunk<
    ISingleCoin[],
    undefined,
    { rejectValue: string }
>("coins/markets/topPrice", async (_, { rejectWithValue }) => {
    try {
        const coins = await coinGeckoApi.get(
            `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
        );
        return coins.data;
    } catch (error: any) {
        if (error.response && error.response.data.error) {
            return rejectWithValue(error.response.data.error);
        } else {
            return rejectWithValue(error.message);
        }
    }
});
