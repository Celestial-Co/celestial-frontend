import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

const TeamMemberCard = ({ image, name, title, socials }) => {
    return (
        <div className="team-card">
            <img src={image} alt={`Profile of ${name}`} className="team-card__image" />
            <div className="team-card__overlay">
                <div className="team-card__details">
                    <h5 className="team-card__name">{name}</h5>
                    <p className="team-card__title">{title}</p>
                </div>
                <div className="team-card__socials">
                    {socials.linkedin && <a href={socials.linkedin} aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>}
                    {socials.twitter && <a href={socials.twitter} aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>}
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;