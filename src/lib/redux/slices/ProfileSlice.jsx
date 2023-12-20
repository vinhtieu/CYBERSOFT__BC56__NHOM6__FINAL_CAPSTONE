import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { courses } from '../../../api/service';

export const fetchUserProfile = createAsyncThunk(
    'uer/fetchUserProfile',
    async () =>{
        try{
            const response = await courses.getProfile();
        }catch(error){
            throw new Error('lỗi tải dữ liệu')
        }
    }
)

const initialState = {
    loading: false,
    error: null,
    userProfile: {
        chiTietKhoaHocGhiDanh: [
            {
              "maKhoaHoc": "121212334023",
              "tenKhoaHoc": "Lập Trình NodeJS treateat",
              "biDanh": "lap-trinh-nodejs-treateat",
              "moTa": "Node.js là môi trường thời gian chạy JavaScript back-end, đa nền tảng, mã nguồn mở, chạy trên công cụ V8 và thực thi mã JavaScript bên ngoài trang web...",
              "luotXem": 100,
              "hinhAnh": "https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-nodejs-treateat_gp01.png",
              "ngayTao": "2023-11-01T00:00:00",
              "danhGia": 10
            },
            {
              "maKhoaHoc": "1231236",
              "tenKhoaHoc": "Lập trình ứng dụng",
              "biDanh": "lap-trinh-ung-dung",
              "moTa": "string SASASA",
              "luotXem": 0,
              "hinhAnh": "https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-ung-dung.jpg",
              "ngayTao": "2023-12-06T21:49:37.977",
              "danhGia": 5
            },
            {
              "maKhoaHoc": "1231237",
              "tenKhoaHoc": "Lap trinh di dong",
              "biDanh": "lap-trinh-di-dong",
              "moTa": "string123",
              "luotXem": 100,
              "hinhAnh": "https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-di-dong_gp01.png",
              "ngayTao": "2023-10-25T00:00:00",
              "danhGia": 10
            },
            {
              "maKhoaHoc": "1231249",
              "tenKhoaHoc": "FrontBack End",
              "biDanh": "frontback-end",
              "moTa": "demo new khoa hoc Front End",
              "luotXem": 100,
              "hinhAnh": "https://elearningnew.cybersoft.edu.vn/hinhanh/frontback-end.png",
              "ngayTao": "2023-10-25T14:47:24.313",
              "danhGia": 5
            },
            {
              "maKhoaHoc": "123138",
              "tenKhoaHoc": "NewKhoaHoc12",
              "biDanh": "newkhoahoc12",
              "moTa": "string",
              "luotXem": 100,
              "hinhAnh": "https://elearningnew.cybersoft.edu.vn/hinhanh/newkhoahoc12_gp01.jpg",
              "ngayTao": "2023-10-25T00:00:00",
              "danhGia": 10
            },
            {
              "maKhoaHoc": "123321",
              "tenKhoaHoc": "khoa hoc moi update",
              "biDanh": "khoa-hoc-moi-update",
              "moTa": "thong tin mo ta ve khoa hoc update",
              "luotXem": 100,
              "hinhAnh": "https://elearningnew.cybersoft.edu.vn/hinhanh/khoa-hoc-moi-update.png",
              "ngayTao": "2023-10-25T18:32:39.257",
              "danhGia": 5
            }
          ],
        email: "khaimail@gmail.com",
        hoTen: "khải",
        maLoaiNguoiDung: "GV",
        maNhom: "GP01",
        matKhau: "321321",
        soDT: "321321",
        taiKhoan: "khai",
    },
}

const ProfileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
    extraReducers:(builder) =>  {
    builder
    .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchUserProfile.fulfilled,(state, action) => {
        state.loading=false;
        state.userProfile= action.payload;
    })
    .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading=false;
        state.error= action.error.message;
    })
  }
});

export const {} = ProfileSlice.actions

export default ProfileSlice.reducer