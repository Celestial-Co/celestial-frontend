import React from 'react';
import ValueCard from './_components/ValueCard';

const CoreValues = () => {
    // We'll manage our values in an array of objects. This makes it easy to update later.
    const valuesData = [
        {
            icon: 'bi-people-fill',
            title: 'Collaboration',
            description: 'We believe in the power of synergy. By working together with our clients and partners, we achieve goals that are greater than the sum of their parts.'
        },
        {
            icon: 'bi-lightbulb-fill',
            title: 'Innovation',
            description: 'We are constantly pushing boundaries. From creative strategies to new technologies, we are dedicated to finding fresh ways to make your brand unmissable.'
        },
        {
            icon: 'bi-shield-check',
            title: 'Integrity',
            description: 'Our foundation is built on trust and transparency. We operate with honesty, ensuring our clients feel confident and valued in every interaction.'
        },
        {
            icon: 'bi-bullseye',
            title: 'Impact',
            description: 'We are driven by results. Our focus is on creating measurable impact, turning advertising spend into tangible growth and brand success.'
        }
    ];

    return (
        <section className="core-values">
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-8">
                        <h2 className="core-values__title">Our Core values</h2>
                        <p className="core-values__subtitle">
                            Our values shape the culture of our organization and define the character of our company.
                        </p>
                    </div>
                </div>

                <div className="row gy-5 justify-content-center">
                    {valuesData.map((value, index) => (
                        <div className="col-11 col-md-6 col-lg-5" key={index}>
                             <ValueCard 
                                icon={value.icon}
                                title={value.title}
                                description={value.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;