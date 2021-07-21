import React from "react";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions";
import { ReactComponent as Logo } from "../../../assets/images/SFS-LOGOS-4-150x150.svg";
import "./styles.scss";

const Header = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => {
    return {
      currentUser: state.auth.currentUser,
    };
  });

  const logout = () => {
    dispatch(actions.setCurrentUser(null));
  };

  return (
    <header className="header">
      <nav>
        <div className="brand-logo">
          <Logo />
        </div>

        <div className="nav-links">
          <ul>
            {!currentUser && (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}

            {!currentUser && (
              <li>
                <NavLink to="/signup" className="signup-btn">
                  Signup
                </NavLink>
              </li>
            )}

            {currentUser && (
              <li>
                <span className="log-out" onClick={logout}>
                  Logout
                </span>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
