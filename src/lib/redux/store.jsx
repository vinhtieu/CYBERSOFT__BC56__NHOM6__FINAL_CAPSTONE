import { configureStore } from "@reduxjs/toolkit";
import { userSlice, userEditModalSlice, userDeleteModalSlice } from "./slices";

const store = configureStore({
  reducer: {
    user: userSlice,
    userEditModal: userEditModalSlice,
    userDeleteModal: userDeleteModalSlice,
  },
});

export default store;
