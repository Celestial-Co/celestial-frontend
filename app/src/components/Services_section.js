import React from "react";

import "./styles/components.scss";

const Service_card = ({ title, description }) => {
    return (
        <div className="service_card d-flex flex-column justify-content-start align-items-start">
            <h5>{title}</h5>
            <p>{description}</p>
            <div className="service_card_cta">
                <i class="bi bi-arrow-right-circle"></i>
            </div>
        </div>
    );
}

const services = [
  {
    title: "Social media & Digital marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    title: "Events ticketing, planning and management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    title: "LED Screens advertising",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
];

const Services_section = () => {

    return (
        <section className="services_section d-flex flex-column justify-content-center align-items-center border">
            <h3 className="text-center">Our Services</h3>
            <div className="selected_service col-10 mx-auto">
                <div className="col-6">
                    <h5>Social Media & Marketing</h5>
                    <p>We help businesses grow and connect with their target audience through strategic social media and digital marketing solutions.
                    <br /><br />
                    Our campaigns enhance brand visibility, drive engagement, and generate leads.</p>

                    {/* <p>Our digital billboards are strategically placed in high-traffic areas, ensuring maximum visibility for your brand. With vibrant displays and dynamic content, we capture attention and drive engagement.</p> */}
                </div>
                <div className="service_cta_button d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-secondary mb-3 d-flex justify-content-center align-items-center">
                        Advertise now <i class="bi bi-arrow-right-circle ms-2"></i>
                    </button>
                </div>
                <div className="services_scrollers d-flex justify-content-between align-items-center">
                    <i class="bi bi-arrow-left"></i>
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div className="services_list col-9 mx-auto d-flex justify-content-between align-items-center">
                {/* <div className="service_card"></div>
                <div className="service_card"></div>
                <div className="service_card"></div> */}
                {services.map((service, index) => (
                <Service_card
                key={index}
                title={service.title}
                description={service.description}
                />))}
            </div>
        </section>
    );
}

export default Services_section;