
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
    getDetail:() => {
    return HTTPS.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    },
}