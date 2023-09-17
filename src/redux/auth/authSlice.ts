import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthData, IAuthState, IUserAttributes } from "common/types/auth";
import { loginUser, refreshUser, registerUser, updateUserInfo } from "./thunks";

// import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import { getPersistConfig } from "redux-deep-persist";

const initialState: IAuthState = {
    token: "",
    user: {
        firstName: "",
        userName: "",
        email: "",
        avatarURL: "",
    },
    isLoggedIn: false,
    isLoading: false,
    isRefreshing: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.isLoggedIn = false;
            state.isLoading = true;
        });
        builder.addCase(
            loginUser.fulfilled,
            (state, action: PayloadAction<IAuthData>) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
            },
        );
        builder.addCase(loginUser.rejected, (state) => {
            state.isLoggedIn = false;
            state.isLoading = false;
        });
        builder.addCase(registerUser.pending, (state) => {
            state.isLoggedIn = false;
            state.isLoading = true;
        });
        builder.addCase(
            registerUser.fulfilled,
            (state, action: PayloadAction<IAuthData>) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
            },
        );
        builder.addCase(registerUser.rejected, (state) => {
            state.isLoggedIn = false;
            state.isLoading = false;
        });
        builder.addCase(updateUserInfo.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(
            updateUserInfo.fulfilled,
            (state, action: PayloadAction<IUserAttributes>) => {
                state.user = action.payload;
                state.isLoading = false;
            },
        );
        builder.addCase(updateUserInfo.rejected, (state) => {
            state.isLoading = false;
        });
        builder.addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
        });
        builder.addCase(
            refreshUser.fulfilled,
            (state, action: PayloadAction<IUserAttributes>) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            },
        );
        builder.addCase(refreshUser.rejected, (state) => {
            state.isRefreshing = false;
        });
    },
});

const rootReducer = authSlice.reducer;

const PersistConfig = getPersistConfig({
    key: "auth",
    storage: storageSession,
    whitelist: ["user.userName", "user.email", "token"],
    rootReducer,
});

export const authReducer = persistReducer(PersistConfig, rootReducer);
