import React from "react";
import "./styles/components.scss";

const Footer = () => {

    return (
        <footer className="mx-auto">
            <div className="footer_content d-flex justify-content-between align-items-start mx-auto pt-3 pb-3">
                <div className="cta_links d-flex flex-column col-7">
                    <div className="d-flex flex-column justify-content-center align-items-start">
                        <h5 className="mb-3">Ready to make your brand unmissable?</h5>
                        <p>Advertise with us today and turn visibility into growth!</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pe-4">
                        <div className="footer_logo">
                            {/* <img src="/images/celestial_logo_png.png" alt="Celestial Co. KE" width={'100px'} /> */}
                            <div className="logo_n_name d-flex align-items-center justify-content-start">
                                <img src="/images/celestial_logo_png.png" alt="Celestial Co. KE" width={'100px'} />
                                <h1>Celestial Co. KE</h1>
                            </div>
                        </div>
                        <div className="footer_quick_links d-flex flex-column justify-content-center align-items-start">
                            <p>Quick Links</p>
                            <a href="">Home</a>
                            <a href="">About us</a>
                            <a href="">Services</a>
                            <a href="">Events</a>
                            <a href="">Contact us</a>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-start align-items-end" style={{position: "relative"}}>
                    <button className="btn btn-secondary mb-3 d-flex justify-content-center align-items-center">
                        <i class="bi bi-telephone me-2"></i> Advertise now
                    </button>
                    <div className="social_media_links d-flex flex-column justify-content-between align-items-center">
                        <a>
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a>
                            <i class="bi bi-twitter-x"></i>
                        </a>
                        <a>
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a>
                            <i class="bi bi-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="cp_rights mx-auto text-center pt-3">
                <p>Celestial Co. KE <i class="bi bi-c-circle"></i> 2023 All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;