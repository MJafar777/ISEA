import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../configs/config";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        url +
          "/projects?state=2&field=_id,sub_description,title,projectImage&limit=6"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOneProject = createAsyncThunk(
  "projects/getOneProject",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(url + "/projects/" + id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const pending = (store, action) => {
  store.error = null;
  store.status = "loading";
};

const rejected = (store, action) => {
  store.error = action.payload;
  store.status = "rejected";
};

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    project: {},
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getProjects.fulfilled]: (store, action) => {
      store.projects = action.payload.data;
      store.status = "resolved";
      store.error = null;
    },
    [getProjects.pending]: pending,
    [getProjects.rejected]: rejected,
    [getOneProject.fulfilled]: (store, action) => {
      store.project = action.payload.data;
      store.error = null;
      store.status = "resolved";
    },
    [getOneProject.pending]: pending,
    [getOneProject.rejected]: rejected,
  },
});

export default projectSlice.reducer;
