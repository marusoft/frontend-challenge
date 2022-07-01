import React, { useState } from "react";
import Brand from "../../assets/brand/Union.png";
import Pablo from "../../assets/images/pablo-sign-in 1.png";
import "./Login.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <div className="left-content">
          <img src={Brand} alt="lendsqr-logo" className="logo" />
          <span className="logo-text">lendsqr</span>
        </div>
        <div className="image">
          <img src={Pablo} alt="pablo-sign-in" className="img-desc" />
        </div>
      </div>
      <div className="login-right">
        <div className="welcome-container">
          <h2 className="welcome-text">Welcome!</h2>
          <p className="welcome-desc">Enter details to login.</p>
        </div>
        <div className="login-form">
          <form>
            <div className="email">
              <input
                type="email"
                className="text-input"
                placeholder="Email"
                required
              />
            </div>
            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                className="text-input"
                placeholder="Password"
                required
              />
              <span className="show" onClick={togglePassword}>
                {showPassword ? "hide" : "show"}
              </span>
            </div>
            <div className="fpassword">
              <p>Forgot PASSWORD?</p>
            </div>
            <button type="submit" className="login-btn">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
