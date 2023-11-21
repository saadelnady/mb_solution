import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import Home from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mb_solution" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
