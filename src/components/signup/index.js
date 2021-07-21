import React, { useState, useEffect } from "react";

import { NavLink, useHistory, Redirect } from "react-router-dom";
import Logo from "../../assets/images/SFS-LOGOS-4-150x150.png";
import AlertBox from "../ui/alert";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import "./styles.scss";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [fields, setFields] = useState({
    first_name: "",
    last_name: "",
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

    dispatch(actions.signup({ ...fields }));
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(actions.authError(null));
      }, 4000);
    }

    if (currentUser) history.push("/account-success");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, currentUser]);

  if (currentUser) return <Redirect to="/account-user" />;

  return (
    <div className="signup">
      <div className="signup__logo">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>

        <div className="welcome-text-mobile">
          <span>Get started with</span>

          <h1>SFS Capital</h1>
        </div>
      </div>

      <div className="signup__header">
        <span>Already have an account?</span>

        <NavLink to="/login">Login</NavLink>
      </div>

      <div className="signup-form">
        <div className="signup-form__header">
          <h2>Create an account</h2>
          <p>
            Let's onboard you so we will know who you are. it will only take a
            minute
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="first_name"
              onChange={handleInputChange}
              value={fields.first_name}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="last_name"
              onChange={handleInputChange}
              value={fields.last_name}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
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

              {!loading && "Signup"}
            </button>

            <a href="/">Previous</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
