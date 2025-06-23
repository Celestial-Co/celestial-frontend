import React from "react";
import "./pages.scss";

import Header from "../components/header";
import Home_hero from "../components/Home_hero";
import Service from "../components/Service";
import Partnerships from "../components/Partnerships";

const Landing_page = () => {
  return (
    <div className="landing_page" style={{ backgroundColor: "#1e3a8a" }}>
      <Header />
      <div className="content  mx-auto">
        <Home_hero />
        <Service />
        <Partnerships />
      </div>
    </div>
  );
};

export default Landing_page;
