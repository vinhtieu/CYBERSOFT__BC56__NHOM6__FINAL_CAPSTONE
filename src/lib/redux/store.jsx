import { configureStore } from "@reduxjs/toolkit";
import {
  userSlice,
  userEditModalSlice,
  userDeleteModalSlice,
  userAddModalSlice,
  paginationSlice,
  sidebarSlice,
} from "./slices";

const store = configureStore({
  reducer: {
    user: userSlice,
    userEditModal: userEditModalSlice,
    userDeleteModal: userDeleteModalSlice,
    userAddModal: userAddModalSlice,
    pagination: paginationSlice,
    sidebar: sidebarSlice,
  },
});

export default store;
