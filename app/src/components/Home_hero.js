import React from "react";
import "./styles/components.scss";

const Home_hero = () => {

    return (
        <section className="home_hero d-flex justify-content-between align-items-center mx-auto">
            <div className="hero d-flex flex-column justify-content-center align-items-start border">
                <h3>Transforming Nairobi Into The Times Square Of Africa</h3>
                <p>We make advertising simple, effective and impactful, turning visibility into growth!</p>
                <button className="btn btn-secondary">Learn more 
                    <i class="bi bi-arrow-right-short ms-2"></i>
                </button>
            </div>
            <div className="hero_image border"></div>
        </section>
    );
}

export default Home_hero;