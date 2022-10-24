import React from "react";
import "./Navbar.css";

const Navbar = () => {
    // TODO make navbar follow only through hero section

    return (
        <nav className="navbar-container">
            <div className="navbar-logo">Greek Mythology</div>
            <div className="navbar-menu">
                <ul className="navbar-list">
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">Myths</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
