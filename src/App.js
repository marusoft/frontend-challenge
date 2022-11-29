import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/dashboard";
import GlobalStyles from "./components/styles/Global.styled";

const theme = {
  colors: {
    body: "#e5e5e5",
    loginBg: "#ffffff;",
    boxShadowColor: "rgba(0, 0, 0, 0.03)",
    borderColor: "rgba(84, 95, 125, 0.15)",
    borderRadius: "8px",
    inputTextColor: "#545f7d",
    loginColor: "#39cdcc",
    buttonBgColor: "#39cdcc"
  },
  breakpoints: {
    xs: "0px",
    sm: "600px",
    md: "960",
    lg: "1280px",
    xl: "1920px",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};

export default App;
