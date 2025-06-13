import React from "react";

import "./styles/about.scss";
import img1 from "../assets/images/cooperate_img_1.jpg";

const About = () => {
    return (
        <section className="about_section d-flex flex-column justify-content-center align-items-center col-12">
            <h3 className="text-center">Our Company</h3>
            <div className="about_content col-10">
                <p className="text-center col-10 mx-auto">We make advertising simple, effective, and impactful, whether you're a small business looking for affordable visibility or a corporation seeking high-exposure campaigns. Our strategic placements and data-driven approach ensure your brand reaches the right audience with measurable results. Advertise with us today and turn visibility into growth!</p>
            </div>
        </section>
    );
}

const Our_story = () => {

    return (
        <section className="our_story_section d-flex flex-column justify-content-center align-items-center col-12">
            <div className="d-flex justify-content-between align-items-start col-12 mx-auto">
                <div className="col-5 d-flex flex-column justify-content-start align-items-start">
                    <h4 className="mb-2">Our Story</h4>
                    <p>
                        Your vision, our expertise, Clients' successes gets noticed Turning impressions into growth
                    </p>
                </div>
                <div className="story_images d-flex align-items-center">
                    <article className="highlight_photo me-2" style={{backgroundImage: `url(/images/cooperate_img_1.jpg)`}}></article>
                    <article className="highlight_photo"  style={{backgroundImage: `url(/images/cooperate_img_1.jpg)`}}></article>
                </div>
            </div>
            <div className="story_content col-12 mt-2 d-flex justify-content-between align-items-center mt-4">
                <div className="story_main_image col-6">
                    <img src="/images/cooperate_img_1.jpg" alt="cooperate" />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-start col-6" style={{ gap: "20px" }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>
                    <div>
                        <div>
                            <h4>10K+</h4>
                            <span>Statistics about</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center col-11">
                        <div className="client_profiles d-flex align-items-start">
                            <div className="client_profile"></div>
                            <div className="client_profile"></div>
                            <div className="client_profile"></div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center btn btn-outline-primary">
                            <a href="">Our clients testimonials <i class="bi bi-arrow-right-short ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const About_about = () => {
    return (
        <div className="about_about col-12">
            <About />
            <Our_story />
        </div>
    );
}

export default About_about;