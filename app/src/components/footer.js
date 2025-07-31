import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                {/* --- Main Footer Content --- */}
                <div className="row gy-5"> {/* gy-5 adds vertical gap between columns when they stack on mobile */}

                    {/* Column 1: CTA and Logo */}
                    <div className="col-12 col-lg-5">
                        <div className="site-footer__cta">
                            <h5 className="mb-3">Ready to make your brand unmissable?</h5>
                            <p>Advertise with us today and turn visibility into growth!</p>
                        </div>
                        <div className="site-footer__logo logo d-flex align-items-center">
                            <img src="/images/celestial_logo_png.png" alt="Celestial Co. KE Logo" className="logo__image" />
                            <div className="logo__name">Celestial Co. KE</div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="site-footer__links">
                            <h6>Quick Links</h6>
                            <a href="/">Home</a>
                            <a href="/about">About us</a>
                            <a href="/services">Services</a>
                            <a href="/events">Events</a>
                            <a href="/contact">Contact us</a>
                        </div>
                    </div>

                    {/* Column 3: Action Button and Socials */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="site-footer__actions">
                            <a href="tel:+254700000000" className="btn btn-secondary w-100 w-md-auto">
                                <i className="bi bi-telephone me-2"></i>
                                <span>Advertise Now</span>
                            </a>
                            <div className="site-footer__socials">
                                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                                <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                                <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                                <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* --- Copyright Bar --- */}
                <hr className="site-footer__divider" />
                <div className="site-footer__copyright text-center">
                    <p>Celestial Co. KE <i className="bi bi-c-circle"></i> {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;