import React from "react";
import "./pages.scss";

import Header from "../components/header";
import Home_hero from "../components/Home_hero";
import Footer from "../components/footer";
import Services_section from "../components/Services_section";

const Landing_page = () => {

    return (
        <div className="landing_page">
            <Header />
            <div className="content  mx-auto">
                <Home_hero />
                <Services_section />
            </div>
            <Footer />
        </div>
    );
}

export default Landing_page;