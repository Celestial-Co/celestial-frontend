import React from "react";
import "./pages.scss";

import Header from "../components/header";
import Footer from "../components/footer";
import About_about from "../components/About_about";
import About_our_values from "../components/About_our_values";

const About = () => {

    return (
        <div className="about_page col-11 mx-auto">
            <Header />
            <div className="content  mx-auto">
                <About_about />
                <About_our_values />
            </div>
            <Footer />
        </div>
    );
}

export default About;