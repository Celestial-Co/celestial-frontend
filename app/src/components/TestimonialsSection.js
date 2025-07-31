import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

// --- Swiper.js Imports ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Import the fade effect CSS

const TestimonialsSection = () => {
    // Keep your testimonials in a neat array. Easy to update!
    const testimonialsData = [
        {
            quote: "Our business gained more exposure and customer engagement within weeks. Their strategic advertising made a real, measurable impact!",
            name: "James Otieno",
            title: "Founder, Urban Eats Cafe",
            image: "/images/profile_img_1.jpg"
        },
        {
            quote: "The team's creativity and data-driven approach is unmatched. They understood our vision and delivered a campaign that exceeded all expectations.",
            name: "Aisha Mohammed",
            title: "Marketing Director, Nova Tech",
            image: "/images/profile_img_1.jpg"
        },
        {
            quote: "Working with them was a seamless experience. Their professionalism and dedication to our brand's success were evident from day one. Highly recommended!",
            name: "David Kinyua",
            title: "CEO, Pamoja Logistics",
            image: "/images/profile_img_1.jpg"
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="testimonials-section__title">Testimonials</h2>
                        <p className="testimonials-section__subtitle">What our happy clients say about us</p>
                    </div>
                </div>

                <div className="testimonials-carousel-wrapper">
                    <Swiper
                        modules={[Navigation, Pagination, EffectFade]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        loop={true}
                        navigation={{
                            nextEl: '.testimonial-swiper-button-next',
                            prevEl: '.testimonial-swiper-button-prev',
                        }}
                        pagination={{ clickable: true }}
                        spaceBetween={50}
                        slidesPerView={1}
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-slide">
                                    <div className="row align-items-center gy-4">
                                        <div className="col-md-4 text-center">
                                            <div className="testimonial-slide__client-info">
                                                <img src={testimonial.image} alt={`Photo of ${testimonial.name}`} className="client-info__image" />
                                                <h5 className="client-info__name">{testimonial.name}</h5>
                                                <p className="client-info__title">{testimonial.title}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="testimonial-slide__quote-wrapper">
                                                <i className="bi bi-quote quote-icon"></i>
                                                <p className="quote-text">
                                                    {testimonial.quote}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Custom Navigation Buttons */}
                    <div className="swiper-button testimonial-swiper-button-prev"><i className="bi bi-arrow-left-short"></i></div>
                    <div className="swiper-button testimonial-swiper-button-next"><i className="bi bi-arrow-right-short"></i></div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;