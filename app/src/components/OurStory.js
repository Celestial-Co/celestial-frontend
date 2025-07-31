import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

// --- Swiper.js Imports ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// --- End Swiper.js Imports ---

const OurStory = () => {
    const statsData = [
        { number: "10K+", label: "Impressions Delivered" },
        { number: "250+", label: "Brands Elevated" },
        { number: "98%", label: "Client Satisfaction" },
    ];

    const HighlightCard = ({pills, className=""}) => (
        <div className={`our-story__highlight-card ${className}`}>
             <div className="pills">
                {pills.map(pill => <span key={pill}>{pill}</span>)}
            </div>
        </div>
    );

    return (
        <section className="our-story">
            <div className="container">
                {/* --- TOP SECTION --- */}
                <div className="row align-items-center mb-5 gy-4">
                    <div className="col-lg-5">
                        <div className="our-story__headline">
                            <p className="our-story__headline__label">Our story</p>
                            <h3>
                                Your vision, our expertise. <br />
                                Clients' successes gets noticed.
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        {/* MOBILE: Swiper.js Carousel (visible below lg) */}
                        <div className="d-lg-none">
                             <Swiper
                                modules={[Pagination]}
                                spaceBetween={15}
                                slidesPerView={1.2}
                                centeredSlides={true}
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <HighlightCard pills={['Biz Blog', 'Trends']} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <HighlightCard pills={['Case Study', 'Results']} />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        {/* DESKTOP: Flex Layout (hidden below lg) */}
                        <div className="d-none d-lg-flex justify-content-lg-end gap-4">
                           <HighlightCard pills={['Biz Blog', 'Trends']} />
                           <HighlightCard pills={['Case Study', 'Results']} />
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM SECTION (Content Box) --- */}
                <div className="our-story__content-box">
                    <div className="row gy-5">
                         {/* This column is visually first on desktop, second on mobile */}
                        <div className="col-lg-6 order-lg-2">
                             <div className="d-flex flex-column h-100 justify-content-center">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                </p>
                                
                                <div className="stat-list my-4">
                                    {statsData.map((stat, index) => (
                                        <div className="stat-item" key={index}>
                                            <span className="stat-item__number">{stat.number}</span>
                                            <span className="stat-item__label">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="d-flex flex-column flex-sm-row align-items-center gap-4">
                                    <div className="client-profiles">
                                        <div className="client-profiles__bubble" style={{backgroundImage: `url(/images/client1.jpg)`}}></div>
                                        <div className="client-profiles__bubble" style={{backgroundImage: `url(/images/client2.jpg)`}}></div>
                                        <div className="client-profiles__bubble" style={{backgroundImage: `url(/images/client3.jpg)`}}></div>
                                    </div>
                                    <a href="/testimonials" className="testimonials-link">
                                        Our clients testimonials <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* This column is visually second on desktop, first on mobile */}
                        <div className="col-lg-6 order-lg-1">
                            <img src="/images/cooperate_img_1.jpg" alt="A team collaborating around a desk" className="img-fluid rounded-3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;