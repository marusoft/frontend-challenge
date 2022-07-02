import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Login from "./pages/login/Login.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
