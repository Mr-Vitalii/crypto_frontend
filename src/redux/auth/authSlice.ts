import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "common/types/auth";

const initialState: IAuthState = {
  user: {
    token: "",
    user: {
      id: null,
      firstName: "",
      userName: "",
      email: "",
      avatarURL: "",
    },
  },
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLoading = true;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
