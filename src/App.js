import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import Home from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
