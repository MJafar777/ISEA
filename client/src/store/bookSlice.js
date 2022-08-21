import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../configs/config";

export const BooksGet = createAsyncThunk(
  "books/BooksGet",
  async (_, { rejectWithValue }) => {
    try {
      console.log(11);
      const response = await axios.get(url + "/books?limit=6&sort=-1");
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const GetOneBook = createAsyncThunk(
  "books/GetOneBook",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(url + "/books/" + id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    book: {},
    error: null,
    status: null,
  },
  reducers: {},
  extraReducers: {
    [BooksGet.fulfilled]: (store, action) => {
      store.books = action.payload.data;
      store.status = "resolved";
      store.error = null;
    },
    [BooksGet.pending]: (store, action) => {
      store.status = "loading";
      store.error = null;
    },
    [BooksGet.rejected]: (store, action) => {
      store.error = action.payload;
      store.status = "rejected";
    },
    [GetOneBook.fulfilled]: (store, action) => {
      store.book = action.payload.data;
      store.status = "resolved";
      store.error = null;
    },
    [GetOneBook.rejected]: (store, action) => {
      store.error = action.payload;
      store.status = "rejected";
    },
    [BooksGet.pending]: (store, action) => {
      store.status = "loading";
      store.error = null;
    },
  },
});

export default booksSlice.reducer;
