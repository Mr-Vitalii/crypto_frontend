import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "common/types/auth";
import { loginUser, registerUser, updateUserInfo } from "./thunks";

const initialState: IAuthState = {
    token: "",
    user: {
        id: null,
        firstName: "",
        userName: "",
        email: "",
        avatarURL: "",
    },
    isLogged: false,
    isLoading: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLogged = false;
            state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
            state.isLoading = false;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLogged = false;
            state.isLoading = false;
        });
        builder.addCase(registerUser.pending, (state, action) => {
            state.isLogged = false;
            state.isLoading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
            state.isLoading = false;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLogged = false;
            state.isLoading = false;
        });
        builder.addCase(updateUserInfo.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(updateUserInfo.fulfilled, (state, action) => {
            console.log(action.payload);

            // state.user = action.payload.user;
            // state.token = action.payload.token;
            state.isLoading = false;
        });
        builder.addCase(updateUserInfo.rejected, (state, action) => {
            state.isLoading = false;
        });
    },
});

export default authSlice.reducer;
