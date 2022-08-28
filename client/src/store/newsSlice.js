import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../configs/config";

export const GetNews = createAsyncThunk(
  "news/GetNews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(url + "/news");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const AddNews = createAsyncThunk(
  "news/AddNews",
  async (
    { title, image, category, publisher, description },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        url + "/news",
        { title, photo: image, category, description, publisher },
        { headers: { "content-type": "multipart/form-data" } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const GetOne = createAsyncThunk(
  "news/GetOne",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(url + "/news/" + id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const rejected = (store, action) => {
  store.error = action.payload;
  store.status = "rejected";
};

const pending = (store, action) => {
  store.status = "loading";
  store.error = null;
};

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    oneNews: {},
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [GetNews.fulfilled]: (store, action) => {
      store.news = action.payload.data;
      store.status = "resolved";
      store.error = null;
    },
    [GetNews.pending]: pending,
    [GetNews.rejected]: rejected,
    [AddNews.fulfilled]: (store, action) => {
      store.status = "resolved";
      store.error = null;
    },
    [AddNews.pending]: pending,
    [AddNews.rejected]: rejected,
    [GetOne.fulfilled]: (store, action) => {
      store.oneNews = action.payload.data;
      store.status = "resolved";
      store.error = null;
    },
    [GetOne.rejected]: rejected,
    [GetOne.pending]: pending,
  },
});

export default newsSlice.reducer;
