import React from "react";

import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/SFS-LOGOS-4-150x150.png";
import "./styles.scss";

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="login__logo">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>

        <div className="welcome-text-mobile">
          <span>Welcome to:</span>

          <h1>SFS Capital</h1>
        </div>
      </div>

      <div className="login__header">
        <span>Don't have an account?</span>

        <NavLink to="/signup">Signup</NavLink>
      </div>

      <div className="login-form">
        <div className="login-form__header">
          <h2>Login</h2>
          <p>Sign in with your username or email and password</p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>

          <div className="form-footer">
            <button type="submit">Login</button>

            <a href="/">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
