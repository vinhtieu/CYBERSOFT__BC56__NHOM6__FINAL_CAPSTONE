import HTTPS from "./config";

export const userService = {
  getUsers: (currentPage, pageSize) => {
    return HTTPS.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01&page=${currentPage}&pageSize=${pageSize}`
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

  getCoursesByUser: (user) => {
    return HTTPS.post(
      `/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
      user
    );
  },
};
