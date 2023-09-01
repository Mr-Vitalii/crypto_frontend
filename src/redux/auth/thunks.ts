import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginData, IRegisterData } from "common/types/auth";
import { instance } from "utils/axios";

// import { instance, instanceAuth } from "../../../utils/axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: ILoginData, { rejectWithValue }) => {
    try {
      const res = await instance.post("auth/login", data);
      if (
        res.data.status === 400 ||
        res.data.status === 401 ||
        res.data.status === 500
      )
        return;

      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("name", res.data.user.firstName);

      return res.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: IRegisterData, { rejectWithValue }) => {
    try {
      const res = await instance.post("auth/register", data);
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("name", res.data.user.firstName);
      return res.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
