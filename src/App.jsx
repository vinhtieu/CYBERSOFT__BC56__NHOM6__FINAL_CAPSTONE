import React from "react"; 
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import "./App.css";
import HomePage from "./app/user/pages";
import Layout from "./app/user/layout/layout";
import DanhMuc from "./app/user/components/ListDanhMuc/DanhMuc";
import DetailPage from "./app/user/components/DetailPage/DetailPage";
import Profile from "./app/user/components/Profile/Profile";
import Search from "./app/user/components/Search/Search";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<HomePage />}/> 
            <Route path="/danhmuc" element={<DanhMuc/>}/>
            <Route path="/detail/:id" element={<DetailPage/>}/>
            <Route path="/profile/detail/:id" element={<DetailPage/>}/>
            <Route path="/danhmuc/detail/:id" element={<DetailPage/>}/>
            <Route path="/search/detail/:id" element={<DetailPage/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/search" element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
