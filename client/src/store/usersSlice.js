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

export const usersDelete = createAsyncThunk(
  "users/usersUpdate",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(url + "/users/" + id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const usersAdd = createAsyncThunk(
  "users/usersAdd",
  async (
    {
      name,
      surname,
      name_of_father,
      gender,
      photo,
      email,
      password,
      passwordConfirm,
      role,
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post({
        name,
        surname,
        name_of_father,
        gender,
        photo,
        email,
        password,
        passwordConfirm,
        role,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateImage = createAsyncThunk(
  "users/updateImage",
  async ({ file }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.post(
        url + "/users/upload",
        { photo: file, token },
        { headers: { "content-type": "multipart/form-data" } }
      );
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
    [usersDelete.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
    [usersDelete.pending]: (state, action) => {
      state.error = null;
      state.status = "loading";
    },
    [usersDelete.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [usersAdd.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
    [usersAdd.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [usersDelete.pending]: (state, action) => {
      state.error = null;
      state.status = "loading";
    },
    [updateImage.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.error = null;
      state.status = "resolved";
    },
    [usersDelete.pending]: (state, action) => {
      state.error = null;
      state.status = "loading";
    },
    [usersAdd.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
