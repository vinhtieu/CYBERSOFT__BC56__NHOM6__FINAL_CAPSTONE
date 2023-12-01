
import HTTPS from "./config";

export let courses ={
    getListCourse:() => {
     return HTTPS.get("api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?maNhom=GP01")
    } 
}