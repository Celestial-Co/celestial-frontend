import React from "react";
import classNames from "classnames";

// We can define the styles for this small component in its own file
const ServiceCard = ({ title, description, isActive, onClick }) => {
    // The classNames utility makes adding conditional classes clean.
    // It will add 'service-card--active' only when isActive is true.
    const cardClasses = classNames("service-card h-100", {
        "service-card--active": isActive,
    });

    return (
        <div className={cardClasses} onClick={onClick}>
            <h5>{title}</h5>
            <p>{description}</p>
            <div className="service-card__cta">
                <i className="bi bi-arrow-right-circle"></i>
            </div>
        </div>
    );
};

export default ServiceCard;