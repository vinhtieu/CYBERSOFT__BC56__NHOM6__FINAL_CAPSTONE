import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../constants/constants";

const initialState = {
  userTable: STATUS.STAND_BY,
  userTableData: STATUS.STAND_BY,
};

const StatusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setUserTableStatus: (state, action) => {
      state.userTable = action.payload;
    },
    setUserTableDataStatus: (state, action) => {
      state.userTableData = action.payload;
    },
  },
});

export const { setUserTableStatus, setUserTableDataStatus } =
  StatusSlice.actions;

export default StatusSlice.reducer;
