import React from "react";

import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/SFS-LOGOS-4-150x150.png";
import "./styles.scss";

const Signup = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

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
            Lets onboard you so we will know who you are. it will only take a
            minute
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>

          <div className="form-footer">
            <button type="submit">Signup</button>

            <a href="/">Previous</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
