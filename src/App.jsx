import React from "react"; 
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import "./App.css";
import HomePage from "./app/user/pages";
import Layout from "./app/user/layout/layout";
import DanhMuc from "./app/user/components/ListDanhMuc/DanhMuc";
import DetailPage from "./app/user/components/DetailPage/DetailPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<HomePage />}/> 
            <Route path="/danhmuc" element={<DanhMuc/>}/>
            <Route path="/detail" element={<DetailPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
