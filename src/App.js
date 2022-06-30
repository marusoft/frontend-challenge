import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        <Login />
      </div>
    </>
  );
};

export default App;
