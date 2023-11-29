import { configureStore } from "@reduxjs/toolkit";
import {
  userSlice,
  userEditModalSlice,
  userDeleteModalSlice,
  userAddModalSlice,
} from "./slices";

const store = configureStore({
  reducer: {
    user: userSlice,
    userEditModal: userEditModalSlice,
    userDeleteModal: userDeleteModalSlice,
    userAddModal: userAddModalSlice,
  },
});

export default store;
