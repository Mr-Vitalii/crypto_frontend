import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthData, IAuthState, UserAttributes } from "common/types/auth";
import { loginUser, registerUser, updateUserInfo } from "./thunks";

// import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import { getPersistConfig } from "redux-deep-persist";

const initialState: IAuthState = {
    token: "",
    user: {
        id: null,
        firstName: "",
        userName: "",
        email: "",
        avatarURL: "",
    },
    isLoggedIn: false,
    isLoading: false,
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
            (state, action: PayloadAction<AuthData>) => {
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
            (state, action: PayloadAction<AuthData>) => {
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
            (state, action: PayloadAction<UserAttributes>) => {
                state.user.firstName = action.payload.firstName;
                state.user.userName = action.payload.userName;
                state.user.email = action.payload.email;
                state.isLoading = false;
            },
        );
        builder.addCase(updateUserInfo.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

const rootReducer = authSlice.reducer;

const PersistConfig = getPersistConfig({
    key: "auth",
    storage: storageSession,
    whitelist: ["user.userName", "user.email"],
    rootReducer,
});

export const authReducer = persistReducer(PersistConfig, rootReducer);
