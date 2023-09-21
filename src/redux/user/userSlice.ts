import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthData, IUserState, IUserAttributes } from "common/types/user";
import {
    deleteUser,
    loginUser,
    logOut,
    refreshUser,
    registerUser,
    updateAvatar,
    updateUserInfo,
    updateUserPassword,
} from "./thunks";

import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import { getPersistConfig } from "redux-deep-persist";

const initialState: IUserState = {
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

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
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

        builder.addCase(updateUserPassword.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateUserPassword.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(updateUserPassword.rejected, (state) => {
            state.isLoading = false;
        });

        builder.addCase(updateAvatar.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(
            updateAvatar.fulfilled,
            (state, action: PayloadAction<{ avatarURL: string }>) => {
                state.user.avatarURL = action.payload.avatarURL;
                state.isLoading = false;
            },
        );
        builder.addCase(updateAvatar.rejected, (state) => {
            state.isLoading = false;
        });

        builder.addCase(deleteUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state) => {
            state.user = {
                firstName: "",
                userName: "",
                email: "",
                avatarURL: "",
            };
            state.token = "";
            state.isLoggedIn = false;
            state.isLoading = false;
        });
        builder.addCase(deleteUser.rejected, (state) => {
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

        builder.addCase(logOut.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(logOut.fulfilled, (state) => {
            state.user = {
                firstName: "",
                userName: "",
                email: "",
                avatarURL: "",
            };
            state.token = "";
            state.isLoggedIn = false;
            state.isLoading = false;
        });
        builder.addCase(logOut.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

const rootReducer = userSlice.reducer;

const PersistConfig = getPersistConfig({
    key: "user",
    storage: storageSession,
    whitelist: ["user.userName", "user.email", "token"],
    rootReducer,
});

export const userReducer = persistReducer(PersistConfig, rootReducer);
