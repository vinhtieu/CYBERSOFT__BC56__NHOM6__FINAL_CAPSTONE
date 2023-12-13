import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {courses} from "../../../api/service"

export const fecthCategories = createAsyncThunk('categories/fecthCategories',
    async () => {
        const response = await courses.getDanhMucKhoaHoc();
        return response.data;
    }
)

export const fecthCoursesByCategories = createAsyncThunk('data/fecthCoursesByCategories',
    async (category) => {
        const response = await courses.getkhoaHocTheoDanhMuc(category);
        return response.data;
    }
)

const initialState = {
    categorise: [],
    coursesByCategory: {},
    loadingCategories: false,
    loadingCourses: false,
    errorCategories: null,
    errorCourses:null,
}

const DanhMucSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fecthCategories.pending, (state) => {
        state.loadingCategories = true;
        state.errorCategories = null;
      })
      .addCase(fecthCategories.fulfilled, (state, action) => {
        state.loadingCategories = false;
        state.categorise = action.payload;
      })
      .addCase(fecthCategories.rejected, (state, action) => {
        state.loadingCategories = false;
        state.errorCategories = action.error.message;
      })
      .addCase(fecthCoursesByCategories.pending, (state) => {
        state.loadingCourses = true;
        state.errorCourses = null;
      })
      .addCase(fecthCoursesByCategories.fulfilled, (state, action) => {
        state.loadingCourses = false;
        state.coursesByCategory[action.meta.arg] = action.payload;
      })
      .addCase(fecthCoursesByCategories.rejected, (state, action) => {
        state.loadingCourses = false;
        state.errorCourses = action.error.message;
      });
  }
});

export const {} = DanhMucSlice.actions

export default DanhMucSlice.reducer