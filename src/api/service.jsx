import HTTPS from "./config";

export const userService = {
  getUsers: (currentPage = 1, key = "") => {
    console.log("key: ", key);
    console.log("currentPage: ", currentPage);
    return HTTPS.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01${
        typeof key === "string" && key.length > 0 ? "&tuKhoa=" + key : ""
      }&page=${currentPage}&pageSize=10`
    );
  },
  addUser: (value) => {
    return HTTPS.post("/api/QuanLyNguoiDung/ThemNguoiDung", value);
  },
  updateUser: (value) => {
    return HTTPS.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", value);
  },
  deleteUser: (account) => {
    return HTTPS.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`
    );
  },
  getUserDetail: (account) => {
    return HTTPS.get(
      `/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${account}`
    );
  },

  getCoursesByUser: (user) => {
    return HTTPS.post(
      `/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
      user
    );
  },
};
