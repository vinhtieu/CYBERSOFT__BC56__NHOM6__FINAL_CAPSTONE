import HTTPS from "./config";

export const userService = {
  getUsers: () => {
    return HTTPS.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
  },
  addUsers: (value) => {
    return HTTPS.post("/api/QuanLyNguoiDung/ThemNguoiDung", value);
  },
  updateUsers: (value) => {
    return HTTPS.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", value);
  },
  deleteUsers: (account) => {
    return HTTPS.delete("/api/QuanLyNguoiDung/XoaNguoiDung", account);
  },
};
