import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./slices/courseSlice"; 
import DanhMucSlice from "./slices/DanhMucSlice";
const store = configureStore({
  reducer: {
    course: courseSlice,
    data: DanhMucSlice,
  },
});

export default store;
