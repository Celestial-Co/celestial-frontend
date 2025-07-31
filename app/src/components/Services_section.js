import React, { useState } from "react";
import ServiceCard from "./_components/ServiceCard";

// We'll add a longDescription for the main display area
const servicesData = [
    {
        title: "Social Media & Digital Marketing",
        shortDescription: "Strategic social media and digital marketing solutions.",
        longDescription: "We help businesses grow and connect with their target audience through strategic social media and digital marketing solutions. Our data-driven campaigns are designed to enhance your brand's visibility, drive meaningful engagement, and generate qualified leads for sustainable growth.",
    },
    {
        title: "Events Ticketing & Management",
        shortDescription: "Seamless event planning, ticketing, and execution.",
        longDescription: "From corporate conferences to public festivals, we provide end-to-end event management services. Our platform handles ticketing, promotion, and on-site coordination, ensuring a seamless and memorable experience for both organizers and attendees.",
    },
    {
        title: "LED Screen Advertising",
        shortDescription: "High-impact advertising on premium LED screens.",
        longDescription: "Our digital billboards are strategically placed in high-traffic areas, ensuring maximum visibility for your brand. With vibrant displays and dynamic content capabilities, we capture public attention and drive powerful brand engagement in the real world.",
    },
];

const ServicesSection = () => {
    // State to keep track of the currently selected service index
    const [selectedIndex, setSelectedIndex] = useState(0);

    const selectedService = servicesData[selectedIndex];

    const handleSelectService = (index) => {
        setSelectedIndex(index);
    };

    const handlePrev = () => {
        setSelectedIndex((prevIndex) => (prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setSelectedIndex((prevIndex) => (prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="services-section">
            <div className="container">
                <h3 className="text-center">Our Services</h3>

                {/* --- DISPLAY AREA --- */}
                <div className="services-section__display">
                    {/* Bootstrap row for responsive columns */}
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h5>{selectedService.title}</h5>
                            <p>{selectedService.longDescription}</p>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center pt-3 pt-lg-0">
                             <button className="btn btn-secondary d-flex align-items-center">
                                Advertise now <i className="bi bi-arrow-right-circle ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- SCROLLERS --- */}
                <div className="services-section__scrollers d-flex justify-content-center align-items-center">
                    <i className="bi bi-arrow-left" onClick={handlePrev}></i>
                    <i className="bi bi-arrow-right" onClick={handleNext}></i>
                </div>

                {/* --- SERVICE CARD LIST --- */}
                <div className="services-section__list">
                    <div className="row g-4">
                        {servicesData.map((service, index) => (
                            <div className="col-md-6 col-lg-4" key={index}>
                                <ServiceCard
                                    title={service.title}
                                    description={service.shortDescription}
                                    isActive={selectedIndex === index}
                                    onClick={() => handleSelectService(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;