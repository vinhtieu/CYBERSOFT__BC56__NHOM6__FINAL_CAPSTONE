import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { courses } from '../../../api/service';
import { useParams } from 'react-router-dom';

export const fetchCourseDetail = createAsyncThunk(
    'detail/fetchCourseDetail',
    async(maKhoaHoc) => {
        try{
            const response = await courses.getDetail(maKhoaHoc);
            console.log("🚀 ~ file: DetailSlice.jsx:13 ~ async ~ response.data:", response.data)
           return response.data;
        }catch(error){
            throw new Error('Lỗi tải dữ liệu');
        }
           
        
    }
)

const initialState = {
    courseDetail: null,
    loading: false,
    error: null,
}

const DetailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers:(builder) =>  {
    builder
    .addCase(fetchCourseDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchCourseDetail.fulfilled,(state, action) => {
        state.loading=false;
        state.courseDetail= action.payload;
    })
    .addCase(fetchCourseDetail.rejected, (state, action) => {
        state.loading=false;
        state.error= action.error.message;
    })
  }
});

export const {} = DetailSlice.actions

export default DetailSlice.reducer