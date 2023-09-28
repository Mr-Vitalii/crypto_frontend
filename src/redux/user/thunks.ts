import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    IAuthData,
    ILoginData,
    IPasswordData,
    IRegisterData,
    IUserAttributes,
} from "common/types/user";
import {
    clearAuthHeader,
    instance,
    instanceAuth,
    setAuthHeader,
} from "utils/axios";

export const registerUser = createAsyncThunk<
    IUserAttributes,
    IRegisterData,
    { rejectValue: string }
>("auth/register", async (registerData, { rejectWithValue }) => {
    try {
        const res = await instance.post("auth/register", registerData);
        return res.data;
    } catch (error: any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

export const resendVerifyEmail = createAsyncThunk<
    string,
    { email: string },
    { rejectValue: string }
>("auth/verify", async (email, { rejectWithValue }) => {
    try {
        const res = await instance.post("auth/verify", email);
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
>("user/update_user", async (userData, { rejectWithValue }) => {
    try {
        const user = await instanceAuth.patch("user/update_user", userData);
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
>("user/update_password", async (passwordData, { rejectWithValue }) => {
    try {
        const password = await instanceAuth.patch(
            "user/update_password",
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

export const updateAvatar = createAsyncThunk<
    { avatarURL: string },
    FormData,
    { rejectValue: string }
>("user/update_avatars", async (avatarImage, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue("Unable to change avatar");
    }

    try {
        setAuthHeader(persistedToken);
        const res = await instanceAuth.patch(
            "user/update_avatars",
            avatarImage,
        );
        console.log(res.data);

        return res.data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteUser = createAsyncThunk<
    string,
    undefined,
    { rejectValue: string }
>("user/delete-user", async (_, { rejectWithValue }) => {
    try {
        const response = await instanceAuth.delete("user/delete_user");
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
>("user/refresh", async (_, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
        setAuthHeader(persistedToken);
        const res = await instanceAuth.get("user/current");
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
