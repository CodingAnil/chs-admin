import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Reducers/user";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
