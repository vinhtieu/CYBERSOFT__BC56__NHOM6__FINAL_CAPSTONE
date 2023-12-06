import React from "react";
import "./App.css";
import { QuanLyNguoiDung } from "./app/admin/pages/quanLyNguoiDung";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./app/admin/layout";

function App() {
  // const num = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Layout />}>
            <Route path="quan-ly-nguoi-dung" element={<QuanLyNguoiDung />} />
            {/* <Route path="quan-ly-khoa-hoc" element={<QuanLyKhoaHoc />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
