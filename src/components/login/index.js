import React, { useState, useEffect } from "react";

import { NavLink, useHistory } from "react-router-dom";
import AlertBox from "../ui/alert";
import Logo from "../../assets/images/SFS-LOGOS-4-150x150.png";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import "./styles.scss";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const { currentUser, error, loading } = useSelector((state) => {
    return {
      currentUser: state.auth.currentUser,
      error: state.auth.error,
      loading: state.auth.loading,
    };
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFields({
      ...fields,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(actions.login({ ...fields }));
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(actions.authError(null));
      }, 4000);
    }

    if (currentUser) history.push("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, currentUser]);

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
            <input
              type="email"
              id="username"
              name="email"
              onChange={handleInputChange}
              value={fields.email}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleInputChange}
              value={fields.password}
              required
            />
          </div>

          {error && <AlertBox>{error}</AlertBox>}

          <div className="form-footer">
            <button type="submit" disabled={loading}>
              {loading && "Loading..."}

              {!loading && "Login"}
            </button>

            <a href="/">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
