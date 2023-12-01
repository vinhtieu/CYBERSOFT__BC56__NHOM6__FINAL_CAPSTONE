import { createSlice } from "@reduxjs/toolkit";
const data = sessionStorage.getItem("userList")
const initialState = {
   list: JSON.parse(data) || [],
}

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setList: (state, action) => {
            state.list = action.payload; 
        }
    }
})

export default courseSlice.reducer;
export const {setList} = courseSlice.actions;