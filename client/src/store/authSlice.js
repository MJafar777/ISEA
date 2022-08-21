import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../configs/config";

export const signupSlice = createAsyncThunk(
  "auth/signupSlice",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios.post(url + "/users/signup", { email });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const verifySlice = createAsyncThunk(
  "auth/verifySlice",
  async ({ verifyCode }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(url + "/users/verify", {
        code: verifyCode,
        token,
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerSlice = createAsyncThunk(
  "auth/registerSlice",
  async (
    {
      name,
      surname,
      name_of_father,
      gender,
      email_or_phone,
      password,
      passwordConfirm,
    },
    { rejectWithValue }
  ) => {
    try {
      const response = axios.post(url + "/users/register", {
        name: name,
        surname,
        gender,
        email_or_phone,
        password,
        passwordConfirm,
        name_of_father,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const errorFunc = (store, action) => {
  store.status = "rejected";
  store.error = action.payload;
};

export const loginSlice = createAsyncThunk(
  "auth/loginSlice",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(url + "/users/login", {
        email,
        password,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuth: false,
    status: null,
    isSend: false,
    error: null,
    isVerify: false,
  },
  reducers: {},
  extraReducers: {
    [signupSlice.pending]: (store, action) => {
      store.error = null;
      store.status = "pending";
    },
    [signupSlice.fulfilled]: (store, action) => {
      store.status = "resolved";
      store.error = null;
      store.isSend = true;
      localStorage.setItem("token", action.payload.token);
    },
    [signupSlice.rejected]: errorFunc,
    [verifySlice.pending]: (store, action) => {
      store.status = "pending";
      store.error = null;
    },
    [verifySlice.fulfilled]: (store, action) => {
      store.status = "resolved";
      store.isVerify = true;
      store.error = null;
    },
    [verifySlice.rejected]: errorFunc,
    [registerSlice.fulfilled]: (store, action) => {
      store.status = "resolved";
      store.error = null;
      store.isAuth = true;
      store.user = action.payload.data;
      localStorage.setItem("userToken", action.payload.token);
    },
    [registerSlice.pending]: (store, action) => {
      store.status = "loading";
      store.error = null;
    },
    [registerSlice.rejected]: errorFunc,
    [loginSlice.pending]: (store, action) => {
      store.status = "loading";
      store.error = null;
    },
    [loginSlice.fulfilled]: (store, action) => {
      store.status = "resolved";
      store.error = null;
      store.isAuth = true;
      store.user = action.payload.user;
      localStorage.setItem("userToken", action.payload.token);
    },
    [loginSlice.rejected]: errorFunc,
  },
});

export default authSlice.reducer;
