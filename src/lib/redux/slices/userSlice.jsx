import { createSlice } from "@reduxjs/toolkit";

const data = sessionStorage.getItem("userList");
const initialState = {
  list: JSON.parse(data) || [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    // decrement: (state) => {
    //   state.count = state.count - 1;
    // },
  },
});

export const { setList } = userSlice.actions;

export default userSlice.reducer;
