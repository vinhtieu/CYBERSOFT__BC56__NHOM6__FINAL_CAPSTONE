import { createSlice } from "@reduxjs/toolkit";
import {
  LOG_IN,
  LOG_OUT,
  REGISTERED,
  STAND_BY,
} from "../../../constant/constants";

const currentUser = localStorage.getItem("currentUser");

const initialState = {
  registerStatus: currentUser ? REGISTERED : STAND_BY,
  registerAccount: {},
  userStatus: currentUser ? LOG_IN : LOG_OUT,
  userAccount: JSON.parse(currentUser) || {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setRegisterStatus: (state, action) => {
      state.registerStatus = action.payload;
    },
    setRegisterAccount: (state, action) => {
      state.registerAccount = action.payload;
    },

    setUserStatus: (state, action) => {
      state.userStatus = action.payload;
    },
    setUserAccount: (state, action) => {
      state.userAccount = action.payload;
    },
  },
});

// export const {setRegisterStatus,setRegisterAccount,setUserStatus,setUserAccount} = userSlice.actions
export default userSlice;
