import React from "react";

import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/images/SFS-LOGOS-4-150x150.svg";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="brand-logo">
          <Logo />
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>

            <li>
              <NavLink to="/signup" className="signup-btn">
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
