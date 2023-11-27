import HTTPS from "./config";

export const userService = {
  getUsers: () => {
    return HTTPS.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
  },
};
