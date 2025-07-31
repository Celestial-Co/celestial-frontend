import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

// Note: This component doesn't need its own stylesheet; 
// it will be styled from its parent's SCSS file for simplicity.
const ValueCard = ({ icon, title, description }) => {
    return (
        <div className="value-card">
            <div className="value-card__icon-wrapper">
                <i className={`bi ${icon}`}></i>
            </div>
            <div className="value-card__content">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ValueCard;