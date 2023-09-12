import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISingleNews } from "common/types/news";
import { newsInstance } from "utils/axios";

export const getNews = createAsyncThunk<
    ISingleNews[],
    undefined,
    { rejectValue: string }
>("get-news", async (_, { rejectWithValue }) => {
    try {
        const news = await newsInstance.get("news/?lang=EN");
        if (news.data.Response === "Error") {
            throw new Error(news.data.Message);
        }
        return news.data.Data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});
