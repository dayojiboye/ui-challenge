import React from "react";

import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/SFS-LOGOS-4-150x150.png";
import { ReactComponent as Right } from "../../assets/images/arrow-right.svg";
import { ReactComponent as Success } from "../../assets/images/success.svg";
import "./styles.scss";

const AccountSuccess = () => {
  return (
    <div className="account-success">
      <div className="account-success__logo">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>

        <div className="welcome-text-mobile">
          <span>You are almost there with</span>

          <h1>SFS Capital</h1>
        </div>
      </div>

      <div className="account-success__header">
        <NavLink to="/">
          <Right /> <span>Back to Home</span>
        </NavLink>
      </div>

      <div className="account-success__message">
        <div className="msg-success-icon">
          <Success />
        </div>

        <h2>Account Created Successfully</h2>

        <p>
          Your account has been successfully created, but to get started, we
          need some information from you, this won’t take long
        </p>

        <button>Continue</button>
      </div>
    </div>
  );
};

export default AccountSuccess;
