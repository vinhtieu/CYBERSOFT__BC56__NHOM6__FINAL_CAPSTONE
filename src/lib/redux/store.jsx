import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./slices/courseSlice";

const store = configureStore({
  reducer: {
    course: courseSlice,
  },
});

export default store;
