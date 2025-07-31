import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

const HomeHero = () => {

    const { ref, inView } = useInView({
        triggerOnce: true, // The animation will only play once
        threshold: 0.2,   // Trigger when 20% of the element is visible
    });
    return (
        // The container is now within the component, not outside.
        // We add a specific class to the section for the new styles.
        <section className="home-hero-section">
            {/* --- NEW OVERLAY HERO SECTION --- */}
            <div className="home-hero__main-overlay">
                <img
                    src="/images/led_screen_billboard.jpg"
                    alt="A vibrant digital billboard cityscape in Nairobi at dusk"
                    className="home-hero__main-overlay__bg-image" // The Ken Burns effect will be applied here
                />
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center">
                        <div 
                            className={classNames("col-md-10 col-lg-8 text-center text-white hero-content", { 'is-visible': inView })} 
                            ref={ref}
                        >
                            <h1 className="display-4 fw-bold hero-content__title">Transforming Nairobi Into The Times Square Of Africa</h1>
                            <p className="lead mt-3 mb-4 hero-content__subtitle">
                                We make advertising simple, effective, and impactful, turning visibility into growth!
                            </p>
                            <a href="/services" className="btn btn-secondary btn-lg hero-content__cta">
                                Learn More <i className="bi bi-arrow-right-short ms-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- WHY CELESTIAL SECTION --- */}
            <div className="home-hero__why-us">
                <div className="container">
                    <div className="row align-items-center gy-5"> {/* gy-5 for mobile stacking gap */}
                        
                        {/* Image cluster column */}
                        <div className="col-12 col-lg-6 home-hero__image-cluster">
                            <img
                                src="/images/led_screen2.jpg"
                                alt="A vertical digital advertisement screen"
                                className="home-hero__image-cluster__img-front img-fluid"
                            />
                            {/* This second image will now only appear on large screens and up */}
                            <img
                                src="/images/led_screen3.jpg"
                                alt="An LED screen on a building facade"
                                className="home-hero__image-cluster__img-back d-none d-lg-block"
                            />
                        </div>
                        
                        {/* "Why Celestial" text column */}
                        <div className="col-12 col-lg-6 home-hero__why-us-content">
                            <h5>Why Celestial?</h5>
                            <p>
                                Whether you're a small business looking for affordable visibility or a corporation seeking high-exposure campaigns.
                                <br /><br />
                                Our strategic placements and data-driven approach ensure your brand reaches the right audience with measurable results.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;