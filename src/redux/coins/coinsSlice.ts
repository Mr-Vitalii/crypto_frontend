import { createSlice } from "@reduxjs/toolkit";
import { getFavoriteCoins } from "./thunks";

const initialState: any = {
  coins: [],
  favoriteCoins: [],
};

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFavoriteCoins.fulfilled, (state, action) => {
      state.favoriteCoins.push(action.payload);
    });
  },
});

export default coinsSlice.reducer;
