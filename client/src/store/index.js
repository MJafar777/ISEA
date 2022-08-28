import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import authSlice from "./authSlice";
import booksSlice from "./bookSlice";
import newsSlice from "./newsSlice";

export default configureStore({
  reducer: {
    users: usersSlice,
    auth: authSlice,
    books: booksSlice,
    news: newsSlice,
  },
});
