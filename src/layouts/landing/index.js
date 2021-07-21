import React from "react";

import "./styles.scss";
import Header from "../../components/ui/header";
import Footer from "../../components/ui/footer";

const LandingLayout = ({ children }) => {
  return (
    <div className="landing-layout">
      <Header />

      <main className="main">{children}</main>

      <Footer />
    </div>
  );
};

export default LandingLayout;
