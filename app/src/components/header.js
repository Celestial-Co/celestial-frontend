import React from "react";
import "./styles/components.scss";

const Header = () => {

    return (
        <header className="d-flex flex-column mx-auto">
            <div className="logo_n_name d-flex justify-content-between align-items-center border">
                <div>
                    <h1>Celestial Co. KE</h1>
                </div>
                <div className="btn btn-secondary">
                    <i class="bi bi-telephone me-1"></i>
                    <a href="">Call Us</a> 
                </div>
            </div>
            <nav className="d-flex justify-content-center align-items-center border">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Events</a>
                <a href="">Contact</a>
            </nav>
        </header>
    );
}

export default Header;