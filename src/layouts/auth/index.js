import React, { useEffect } from "react";

import { ReactComponent as Logo } from "../../assets/images/SFS-LOGOS-4-150x150.svg";
import { NavLink, useLocation } from "react-router-dom";
import "./styles.scss";

const AuthLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  return (
    <div className="auth-layout">
      <header className="header">
        <div className="logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>

        <div className="header__lead">
          {/* <span>Welcome to:</span> */}

          {location.pathname === "/login" && <span>Welcome to:</span>}

          {location.pathname === "/signup" && <span>Get started with</span>}

          <h1>SFS Capital</h1>
        </div>
      </header>

      <main className="main">{children}</main>
    </div>
  );
};

export default AuthLayout;
