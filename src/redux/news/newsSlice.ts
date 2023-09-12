import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewsState, ISingleNews } from "common/types/news";
import { getNews } from "./thunks";

const initialState: INewsState = {
    news: [],
    isLoading: false,
};

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNews.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(
            getNews.fulfilled,
            (state, action: PayloadAction<ISingleNews[]>) => {
                state.news = action.payload;
                state.isLoading = false;
            },
        );
        builder.addCase(getNews.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export const newsReducer = newsSlice.reducer;
