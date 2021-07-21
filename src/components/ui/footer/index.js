import React from "react";

import { ReactComponent as RobotSvg } from "../../../assets/images/robot.svg";
import { ReactComponent as AppleSvg } from "../../../assets/images/apple.svg";
import { ReactComponent as WorldSvg } from "../../../assets/images/world.svg";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__heading">
        <h2>Our channels</h2>
        <p>Get access to sfs life using any of the following plaforms</p>
      </div>

      <div className="footer__links">
        <div className="platforms">
          <div className="platform">
            <div className="platform__icon">
              <RobotSvg />
            </div>

            <div className="platform__content">
              <span>Download on Play Store</span>
            </div>
          </div>

          <div className="platform">
            <div className="platform__icon">
              <AppleSvg />
            </div>

            <div className="platform__content">
              <span>Download on App Store</span>
            </div>
          </div>

          <div className="platform">
            <div className="platform__icon">
              <WorldSvg />
            </div>

            <div className="platform__content no-icon">
              <span>Get Started Online</span>
            </div>
          </div>
        </div>

        <div className="company-link">
          <span>Contact us for more infomation</span>

          <span>Info@sfsnigeria.com</span>

          <span>098-793 079-383</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
