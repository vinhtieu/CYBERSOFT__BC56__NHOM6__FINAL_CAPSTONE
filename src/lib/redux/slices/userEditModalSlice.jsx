import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  searchKey: "",
  info: {},
  courses: {},
  editedData: [],
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
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setEditedData: (state, action) => {
      state.editedData.push(action.payload);
    },
  },
});

export const {
  openUserEditModal,
  closeUserEditModal,
  setInfo,
  setCourses,
  setSearchKey,
  setEditedData,
} = UserEditModalSlice.actions;

export default UserEditModalSlice.reducer;
