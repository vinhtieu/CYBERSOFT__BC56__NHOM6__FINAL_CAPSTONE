import HTTPS from "./config";

export const userService = {
  getUsers: () => {
    return HTTPS.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
  },
  addUser: (value) => {
    return HTTPS.post("/api/QuanLyNguoiDung/ThemNguoiDung", value);
  },
  updateUser: (value) => {
    return HTTPS.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", value);
  },
  deleteUser: (account) => {
    return HTTPS.delete("/api/QuanLyNguoiDung/XoaNguoiDung", account);
  },
};
