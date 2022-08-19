import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../configs/config";

export const usersGet = createAsyncThunk(
  "users/usersGet",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(url + "/users");
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const usersUpdate = createAsyncThunk(
  "users/usersUpdate",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(url + "/users", data);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: null,
    status: null,
  },
  reducers: {},
  extraReducers: {
    [usersGet.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [usersGet.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.status = "resolved";
    },
    [usersGet.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
