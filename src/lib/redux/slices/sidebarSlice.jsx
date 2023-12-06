import { createSlice } from "@reduxjs/toolkit";
import { MODE } from "../../constants/constants";

const initialState = {
  isOpen: false,
  mode: MODE.DESKTOP,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpen = true;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },

    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { openSidebar, closeSidebar, setMode, toggleSidebar } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
