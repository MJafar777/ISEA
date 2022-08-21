import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ReviewGetOne = createAsyncThunk(
  "reviews/ReviewGet",
  async ({}, { rejectWithValue }) => {}
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    book: {},
    reviews: [],
    error: null,
    status: null,
  },
});
