import React from "react";
import "./pages.scss";

import Header from "../components/header";
import Home_hero from "../components/Home_hero";

const Landing_page = () => {

    return (
        <div className="landing_page">
            <Header />
            <div className="content  mx-auto">
                <Home_hero />
            </div>
        </div>
    );
}

export default Landing_page;