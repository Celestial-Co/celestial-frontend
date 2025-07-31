import React from "react";


import Header from "../components/header"; // Renamed to PascalCase
import HomeHero from "../components/Home_hero"; // Renamed to PascalCase
import Footer from "../components/footer"; // Renamed to PascalCase
import ServicesSection from "../components/Services_section";
import TestimonialsSection from "../components/TestimonialsSection";

const LandingPage = () => { // Renamed to PascalCase
    return (
        // You can keep a top-level wrapper for page-specific styling if needed
        <div className="landing-page">
            <Header />
            {/* The <main> tag is more semantic than a <div> for your primary content */}
            <main>
                {/* 
                  The redundant '.content' div is removed.
                  Each section now controls its own width via its internal Bootstrap container.
                */}
                <HomeHero />
                <ServicesSection />
                <TestimonialsSection />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;