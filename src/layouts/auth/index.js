import React from "react";

import { ReactComponent as Logo } from "../../assets/images/SFS-LOGOS-4-150x150.svg";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <header className="header">
        <div className="logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>

        <div className="header__lead">
          <span>Welcome to:</span>

          <h1>SFS Capital</h1>
        </div>
      </header>

      <main className="main">{children}</main>
    </div>
  );
};

export default AuthLayout;
