import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  deleteUser: null,
};

const UserDeleteModalSlice = createSlice({
  name: "userDeleteModal",
  initialState,
  reducers: {
    openUserDeleteModal: (state) => {
      state.isOpen = true;
    },

    closeUserDeleteModal: (state) => {
      state.isOpen = false;
    },

    setDeleteUser: (state, action) => {
      state.deleteUser = action.payload;
    },
  },
});

export const { openUserDeleteModal, closeUserDeleteModal, setDeleteUser } =
  UserDeleteModalSlice.actions;

export default UserDeleteModalSlice.reducer;
