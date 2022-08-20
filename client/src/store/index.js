import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import authSlice from "./authSlice";

export default configureStore({
  reducer: { users: usersSlice, auth: authSlice },
});
