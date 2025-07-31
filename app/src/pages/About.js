import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CompanyIntro from "../components/CompanyIntro";
import OurStory from "../components/OurStory";
import CoreValues from "../components/CoreValues";
import TeamSection from "../components/TeamSection";

const About = () => {

    return (
        <div className="about-page-container">
            <Header />
            <main>
                <CompanyIntro />
                <OurStory />
                {/* You can add more components for the About page here */}
                <CoreValues />
                <TeamSection />
            </main>
            <Footer />
        </div>
    );
}

export default About;