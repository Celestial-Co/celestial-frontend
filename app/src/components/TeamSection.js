import React from 'react';
import TeamMemberCard from './_components/TeamMemberCard';

// --- Swiper.js Imports ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TeamSection = () => {
    // Manage all team data here. Easy to add/remove members.
    const teamData = [
        { name: 'Rachael Jane', title: 'Lead Developer', image: '/images/profile_img_1.jpg', socials: { linkedin: '#', twitter: '#' } },
        { name: 'Alex Johnson', title: 'Marketing Strategist', image: '/images/profile_img_1.jpg', socials: { linkedin: '#' } },
        { name: 'Samantha Lee', title: 'Creative Director', image: '/images/profile_img_1.jpg', socials: { linkedin: '#', twitter: '#' } },
        { name: 'David Chen', title: 'Account Manager', image: '/images/profile_img_1.jpg', socials: { linkedin: '#' } },
        { name: 'Maria Garcia', title: 'UI/UX Designer', image: '/images/profile_img_1.jpg', socials: { twitter: '#' } },
    ];

    return (
        <section className="team-section">
            <div className="container">
                <div className="row align-items-center mb-5 text-center text-md-start">
                    <div className="col-md-6">
                        <h2 className="team-section__title">Experience and Integrity by Our Team</h2>
                    </div>
                    <div className="col-md-6">
                        <p className="team-section__description">
                            Our success is driven by a diverse team of passionate experts dedicated to bringing your brand's vision to life with creativity and precision.
                        </p>
                    </div>
                </div>

                <div className="position-relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        loop={true}
                        navigation={{
                            nextEl: '.team-swiper-button-next',
                            prevEl: '.team-swiper-button-prev',
                        }}
                        pagination={{ clickable: true }}
                        // Responsive breakpoints are key to a great carousel
                        breakpoints={{
                            320: { slidesPerView: 1.2, spaceBetween: 15, centeredSlides: true },
                            768: { slidesPerView: 3, spaceBetween: 20, centeredSlides: false },
                            1200: { slidesPerView: 4, spaceBetween: 30 }
                        }}
                    >
                        {teamData.map((member, index) => (
                            <SwiperSlide key={index}>
                                <TeamMemberCard {...member} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Custom Navigation Buttons */}
                    <div className="swiper-button team-swiper-button-prev"><i className="bi bi-arrow-left"></i></div>
                    <div className="swiper-button team-swiper-button-next"><i className="bi bi-arrow-right"></i></div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;