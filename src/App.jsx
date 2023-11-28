import React from "react"; 
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import "./App.css";
import HomePage from "./app/user/pages";
import Layout from "./app/user/layout/layout";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Router path="/" element={<Layout/>}>
            <Route path="/" element={<HomePage />}/> 
        </Router>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
