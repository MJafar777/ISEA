import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
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

export const registerSlice = createAsyncThunk(
  "auth/registerSlice",
  async (
    {
      username,
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
      const token = localStorage.getItem("token");
      const response = axios.post(url + "/users/register", {
        name: username,
        surname,
        gender,
        email_or_phone,
        password,
        passwordConfirm,
        name_of_father,
        token,
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
      return response.data;
    } catch (error) {
      console.log(error?.response.data.message);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const checkMe = createAsyncThunk(
  "users/checkMe",
  async (_, { rejectwithValue }) => {
    const token = localStorage.getItem("userToken");
    const response = await axios.post(url + "/users/checkMe", { token });
    return response.data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("userToken");
  localStorage.removeItem("token");
  return {};
});

export const advancedProfile = createAsyncThunk(
  "auth/advancedProfile",
  async (
    {
      position,
      stir,
      type_of_activity,
      academic_degree,
      degree,
      work_place,
      cardNum,
    },
    { rejectWithValue }
  ) => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.post(url + "/advanced", {
        position,
        stir,
        type_of_activity,
        degree,
        academic_degree,
        work_place,
        cardNum,
        token,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    advanced: {},
    isAuth: false,
    status: null,
    error: null,
    isVerify: false,
    isAdvanced: null,
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
      store.isAdvanced = action.payload.user.advanced;
      localStorage.setItem("userToken", action.payload.token);
    },
    [loginSlice.rejected]: errorFunc,
    [checkMe.fulfilled]: (store, action) => {
      store.user = action.payload.user;
      store.isAdvanced = action.payload.user.advanced;
      store.isAuth = true;
      store.status = "resolved";
    },
    [checkMe.rejected]: (store, action) => {
      store.error = null;
    },
    [checkMe.pending]: (store, action) => {
      store.status = "loading";
      store.error = null;
    },
    [logout.pending]: (store, action) => {
      store.status = "loading";
      store.error = null;
    },
    [logout.fulfilled]: (store, action) => {
      store.status = "resolved";
      store.isAuth = false;
      store.isVerify = false;
      store.isAdvanced = null;
    },
    [advancedProfile.fulfilled]: (store, action) => {
      store.advanced = action.payload.data;
      store.isAdvanced = true;
      store.status = "resolved";
      store.error = null;
    },
    [advancedProfile.pending]: (store, action) => {
      store.status = "loading";
      store.error = null;
    },
    [advancedProfile.rejected]: (store, action) => {
      store.status = "rejected";
      store.error = action.payload;
    },
  },
});

export default authSlice.reducer;
