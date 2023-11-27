import React from "react";
import "./App.css";
import { increment, decrement } from "./lib/redux/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { QuanLyNguoiDung, QuanLyKhoaHoc } from "./app/admin/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./app/admin/layout";

function App() {
  // const num = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Layout />}>
            <Route path="quan-ly-nguoi-dung" element={<QuanLyNguoiDung />} />
            <Route path="quan-ly-khoa-hoc" element={<QuanLyKhoaHoc />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
