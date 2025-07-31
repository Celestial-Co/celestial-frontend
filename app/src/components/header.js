import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
    // State to manage the mobile menu's visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="site-header">
            <div className="site-header__container container-fluid">
                {/* Top bar with logo and call button */}
                <div className="site-header__topbar d-flex justify-content-between align-items-center">
                    <div className="logo d-flex align-items-center">
                        <img src="/images/celestial_logo_png.png" alt="Celestial Co. KE Logo" className="logo__image" />
                        <h1 className="logo__name">Celestial Co. KE</h1>
                    </div>

                    {/* Call Us button - now a proper link and hidden on small screens for a cleaner look */}
                    <a href="tel:+254700000000" className="btn btn-secondary d-none d-md-flex align-items-center">
                        <i className="bi bi-telephone me-2"></i>
                        <span>Call Us</span>
                    </a>

                    {/* Hamburger Menu Button - only visible on screens smaller than lg */}
                    <button
                        className="hamburger-btn d-lg-none"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                        aria-expanded={isMenuOpen}
                    >
                        {/* Changes icon based on menu state */}
                        <i className={isMenuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
                    </button>
                </div>

                {/* Desktop Navigation - hidden on screens smaller than lg */}
                <nav className="site-header__nav d-none d-lg-flex justify-content-center align-items-center">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="">Services</a>
                    <a href="">Events</a>
                    <a href="">Contact</a>
                </nav>
            </div>

            {/* Mobile Navigation Menu - shown only when isMenuOpen is true */}
            {isMenuOpen && (
                <nav className="mobile-nav d-lg-none">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/events">Events</a>
                    <a href="/contact">Contact</a>
                </nav>
            )}
        </header>
    );
};

export default Header;