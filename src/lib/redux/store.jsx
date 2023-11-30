import { configureStore } from "@reduxjs/toolkit";
import {
  userSlice,
  userEditModalSlice,
  userDeleteModalSlice,
  userAddModalSlice,
  paginationSlice,
} from "./slices";

const store = configureStore({
  reducer: {
    user: userSlice,
    userEditModal: userEditModalSlice,
    userDeleteModal: userDeleteModalSlice,
    userAddModal: userAddModalSlice,
    pagination: paginationSlice,
  },
});

export default store;
