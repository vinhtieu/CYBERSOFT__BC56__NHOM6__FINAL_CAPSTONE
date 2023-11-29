import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  addUser: null,
};

const UserAddModalSlice = createSlice({
  name: "userAddModal",
  initialState,
  reducers: {
    openUserAddModal: (state) => {
      state.isOpen = true;
    },

    closeUserAddModal: (state) => {
      state.isOpen = false;
    },

    setAddUser: (state, action) => {
      state.addUser = action.payload;
    },
  },
});

export const { openUserAddModal, closeUserAddModal, setAddUser } =
  UserAddModalSlice.actions;

export default UserAddModalSlice.reducer;
