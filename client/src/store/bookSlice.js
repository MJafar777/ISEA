import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../configs/config";

export const BooksGet = createAsyncThunk(
  "books/BooksGet",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(url + "/books?limit=6&sort=-_id");
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

export const addBook = createAsyncThunk(
  "books/addBook",
  async (
    {
      title,
      publisher,
      sub_description,
      description,
      language,
      file,
      image,
      category,
    },
    { rejectWithValue }
  ) => {
    const response = await axios.post(
      url + "/books",
      {
        title,
        publisher,
        sub_description,
        description,
        language,
        category,
        bookImage: image,
        book: file,
      },
      { headers: { "content-type": "multipart/form-data" } }
    );
    return response.data;
  }
);

const pending = (store, action) => {
  store.status = "loading";
  store.error = null;
};

const rejected = (store, action) => {
  store.error = action.payload;
  store.status = "rejected";
};

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
    [BooksGet.pending]: pending,
    [BooksGet.rejected]: rejected,

    [GetOneBook.fulfilled]: (store, action) => {
      store.book = action.payload.data;
      store.status = "resolved";
      store.error = null;
    },
    [GetOneBook.rejected]: rejected,
    [BooksGet.pending]: pending,

    [addBook.fulfilled]: (store, action) => {
      store.status = "resolved";
      store.error = null;
    },
  },
});

export default booksSlice.reducer;
