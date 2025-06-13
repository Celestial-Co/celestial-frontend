import React from "react";

import "./styles/about.scss";

const Value_card = ({ title, description }) => {

    return (
        <div className="value_card d-flex flex-column justify-content-center align-items-center">
            <div className="value_icon mx-auto"></div>
            <h4>{title}</h4>
            <p className="text-center">{description}</p>
        </div>
    );
}
const Team_member_card = ({ name, position, image }) => {
    return (
        <div className="team_member_card d-flex flex-column justify-content-center align-items-center">
            <img src="/images/lady_profile_pic.jpg" alt={name} className="team_member_image" />
            <div className="team_member_info text-center col-12">
                <h5>{name}</h5>
                <p>{position}</p>
            </div>
        </div>
    );
}

const About_our_values = () => {

    return (
        <section className="about_values_section d-flex flex-column justify-content-center align-items-center col-12">
            <div className="values_intro">
                <h3 className="text-center">Our Values</h3>
                <p className="text-center col-10 mx-auto">We are committed to delivering exceptional value to our clients through innovation, integrity, and excellence. Our values guide us in every decision we make, ensuring that we not only meet but exceed expectations.</p>
            </div>
            <div>
                <div className="values_container d-flex flex-wrap justify-content-center align-items-start col-12">
                    <Value_card title="Innovation" description="We embrace change and continuously seek new ways to improve our services and deliver value to our clients." />
                    <Value_card title="Integrity" description="We uphold the highest standards of honesty and transparency in all our interactions, building trust with our clients and partners." />
                    <Value_card title="Excellence" description="We strive for excellence in everything we do, ensuring that our clients receive the best possible service and results." />
                    <Value_card title="Collaboration" description="We believe in the power of teamwork and collaboration, working closely with our clients to achieve shared goals." />
                </div>
            </div>
            <Our_team />
        </section>
    );
}

const Our_team = () => {

    return (
        <section className="our_team_section d-flex flex-column justify-content-center align-items-center col-12">
            <div className="team_intro col-12 d-flex align-items-center justify-content-between">
                <h3 className="col-5">Experience and integrity by our team</h3>
                <p className="col-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
            </div>
            <div className="team_gallery col-12">
                <div id="team_members_carousel" className="team_members_carousel carousel slide col-12" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#team_members_carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#team_members_carousel" data-bs-slide-to="1" className="" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-between align-items-start col-12">
                                <Team_member_card name="John Doe" position="CEO" image="/images/team/john_doe.jpg" />
                                <Team_member_card name="Jane Smith" position="CTO" image="/images/team/jane_smith.jpg" />
                                <Team_member_card name="Alice Johnson" position="CMO" image="/images/team/alice_johnson.jpg" />
                                <Team_member_card name="Bob Brown" position="CFO" image="/images/team/bob_brown.jpg" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className=" d-flex justify-content-between align-items-start col-12">
                                <Team_member_card name="Charlie Davis" position="COO" image="/images/team/charlie_davis.jpg" />
                                <Team_member_card name="Emily Evans" position="CPO" image="/images/team/emily_evans.jpg" />
                                <Team_member_card name="Franklin Green" position="CSO" image="/images/team/franklin_green.jpg" />
                                <Team_member_card name="Grace White" position="CTO" image="/images/team/grace_white.jpg" />
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#team_members_carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#team_members_carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default About_our_values;