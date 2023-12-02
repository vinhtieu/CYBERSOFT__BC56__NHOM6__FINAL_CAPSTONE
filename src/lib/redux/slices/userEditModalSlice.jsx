import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  info: {},
  courses: {},
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
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { openUserEditModal, closeUserEditModal, setInfo, setCourses } =
  UserEditModalSlice.actions;

export default UserEditModalSlice.reducer;
