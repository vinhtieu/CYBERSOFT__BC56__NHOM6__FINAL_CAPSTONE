
import HTTPS from "./config";

export let courses ={
    getListCourse:() => {
     return HTTPS.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?maNhom=GP01")
    },
    getDanhMucKhoaHoc: () => {
        return HTTPS.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
    },
    getkhoaHocTheoDanhMuc: (params) => {
        return HTTPS.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${params}&MaNhom=GP01`)
    },
    getDetail:(params) => {
    return HTTPS.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${params}`)
    },
    getProfile: () => {
        return HTTPS.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    },
    dangKyKhoaHoc: (data) => {
    return HTTPS.post(`/api/QuanLyKhoaHoc/DangKyKhoaHoc`, data);
  },
  searchCourse: (searchTerm) => {
    return HTTPS.get(
        `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${searchTerm}`
    )

  },
  huyGhiDanh: (data) => {
    return HTTPS.post("/api/QuanLyKhoaHoc/HuyGhiDanh", data);
  },
}

export const userServices = {
  requestLogin:(value) => {
      return HTTPS.post('/api/QuanLyNguoiDung/DangNhap',value);
  },
  requestRegister:(value) => {
      return HTTPS.post('/api/QuanLyNguoiDung/DangKy',value);
  }
}