import React from "react"; 
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import "./App.css";
import HomePage from "./app/user/pages";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
