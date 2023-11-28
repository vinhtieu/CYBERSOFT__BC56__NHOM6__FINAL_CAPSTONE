import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  // status: '',
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
