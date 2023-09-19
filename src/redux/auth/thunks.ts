import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    IAuthData,
    ILoginData,
    IPasswordData,
    IRegisterData,
    IUserAttributes,
} from "common/types/auth";
import {
    clearAuthHeader,
    instance,
    instanceAuth,
    setAuthHeader,
} from "utils/axios";

export const registerUser = createAsyncThunk<
    IAuthData,
    IRegisterData,
    { rejectValue: string }
>("auth/register", async (registerData, { rejectWithValue }) => {
    try {
        const res = await instance.post("auth/register", registerData);
        setAuthHeader(res.data.token);
        return res.data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

export const loginUser = createAsyncThunk<
    IAuthData,
    ILoginData,
    { rejectValue: string }
>("auth/login", async (loginData, { rejectWithValue }) => {
    try {
        const res = await instance.post("auth/login", loginData);
        setAuthHeader(res.data.token);
        return res.data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

export const updateUserInfo = createAsyncThunk<
    IUserAttributes,
    IUserAttributes,
    { rejectValue: string }
>("user/update", async (userData, { rejectWithValue }) => {
    try {
        const user = await instanceAuth.patch("auth/user", userData);
        return user.data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data);
        } else {
            return rejectWithValue(error);
        }
    }
});

export const updateUserPassword = createAsyncThunk<
    string,
    IPasswordData,
    { rejectValue: string }
>("users/change-password", async (passwordData, { rejectWithValue }) => {
    try {
        const password = await instanceAuth.patch(
            "auth/update_password",
            passwordData,
        );
        return password.data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

export const deleteUser = createAsyncThunk<
    string,
    undefined,
    { rejectValue: string }
>("users/delete-user", async (_, { rejectWithValue }) => {
    try {
        const response = await instanceAuth.delete("auth/user");
        clearAuthHeader();
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

export const refreshUser = createAsyncThunk<
    IUserAttributes,
    undefined,
    { rejectValue: string }
>("auth/refresh", async (_, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
        setAuthHeader(persistedToken);
        const res = await instanceAuth.get("/auth/current");
        return res.data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOut = createAsyncThunk<
    string,
    undefined,
    { rejectValue: string }
>("auth/logout", async (_, { rejectWithValue }) => {
    try {
        const response = await instanceAuth.post("auth/logout");
        clearAuthHeader();
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});
