import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  editUser: {},
};

const UserEditModalSlice = createSlice({
  name: "userEditModal",
  initialState,
  reducers: {
    openUserEditModal: (state) => {
      state.isOpen = true;
    },
    closeUserEditModal: (state) => {
      state.isOpen = false;
    },
    setEditUser: (state, action) => {
      state.editUser = action.payload;
    },
  },
});

export const { openUserEditModal, closeUserEditModal, setEditUser } =
  UserEditModalSlice.actions;

export default UserEditModalSlice.reducer;
