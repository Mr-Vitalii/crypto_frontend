import { createAsyncThunk } from "@reduxjs/toolkit";
import { IWatchlistCoin } from "common/types/coins";
import { instanceAuth } from "utils/axios";

export const getWatchlistElements = createAsyncThunk<
    IWatchlistCoin[],
    undefined,
    { rejectValue: string }
>("watchlist/get-elements", async (_, { rejectWithValue }) => {
    try {
        const response = await instanceAuth.get("watchlist");
        console.log(response.data);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

export const addWatchListElement = createAsyncThunk<
    IWatchlistCoin,
    { name: string; coinId: string },
    { rejectValue: string }
>("watchlist/create", async (data, { rejectWithValue }) => {
    try {
        const response = await instanceAuth.post("watchlist", data);
        console.log(response.data);

        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});
