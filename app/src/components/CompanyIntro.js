import React from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';


// An abstract video file you would place in your public/videos folder
const backgroundVideo = '/videos/abstract_bg.mp4'; 
const fallbackImage = '/images/abstract_bg_poster.jpg'; // A fallback image

const CompanyIntro = () => {
    // This hook tells us when the component is visible on screen
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation will only play once
        threshold: 0.3,   // Trigger when 30% of the component is visible
    });

    // Dynamically add the 'is-visible' class for animations
    const cardClasses = classNames('company-intro__content-card', {
        'is-visible': inView,
    });

    return (
        <section className="company-intro" ref={ref}>
            <div className="company-intro__video-wrapper">
                {/* The video will autoplay, loop, and be muted. 
                    The poster is a fallback for mobile or slow connections. */}
                <video 
                    className="company-intro__bg-video"
                    poster={fallbackImage}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                >
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>
            
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        {/* The Glassmorphism Card */}
                        <div className={cardClasses}>
                            <h2 className="company-intro__title">Our Company</h2>
                            <p className="company-intro__text">
                                We make advertising simple, effective, and impactful. Whether you're a small business or a corporation, we turn visibility into growth!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyIntro;