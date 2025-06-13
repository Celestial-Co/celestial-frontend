import React from "react";
import "./styles/components.scss";

const Home_hero = () => {

    return (
        <section className="home_hero mx-auto">
            <div className="d-flex justify-content-between align-items-center">
                <div className="hero d-flex flex-column justify-content-center align-items-start">
                    <h3>Transforming Nairobi Into The Times Square Of Africa</h3>
                    <p>We make advertising simple, effective and impactful, turning visibility into growth!</p>
                    <button className="btn btn-secondary">Learn more 
                        <i class="bi bi-arrow-right-short ms-2"></i>
                    </button>
                </div>
                <div className="hero_image">
                    <img src="/images/led_screen_billboard.jpg" alt="Hero" />
                </div>
            </div>
            <div className="why_celestial d-flex justify-content-between align-items-center">
                <div className="images_div">
                    <img src="/images/led_screen2.jpg" alt="led_screen" />
                    <img src="/images/led_screen3.jpg" alt="led_screen" />
                </div>
                <div className="why_celestial_text d-flex flex-column justify-content-center align-items-start">
                    <h5>Why Celestial?</h5>
                    <p>Whether you're a small business looking for affordable visibility or a corporation seeking high-exposure campaigns.
                    <br /><br />
                    Our strategic placements and data-driven approach ensure your brand reaches the right audience with measurable results.</p>
                </div>
            </div>
        </section>
    );
}

export default Home_hero;