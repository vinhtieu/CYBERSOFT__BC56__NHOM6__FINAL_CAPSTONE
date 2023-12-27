import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./slices/courseSlice";
import DanhMucSlice from "./slices/DanhMucSlice";
import DetailReducer from "./slices/DetailSlice";
import ProfileReducer from "./slices/ProfileSlice";
import SearchSlice from "./slices/SearchSlice";
import userSlice from "./slices/userSlice";
const store = configureStore({
  reducer: {
    course: courseSlice,
    data: DanhMucSlice,
    detail: DetailReducer,
    user: ProfileReducer,
    search: SearchSlice,
    users: userSlice,
  },
});

export default store;
