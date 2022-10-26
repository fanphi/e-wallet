import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../components/user/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});
