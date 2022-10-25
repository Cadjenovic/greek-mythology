import React from "react";
import NavbarLink from "../NavbarLink/NavbarLink";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-logo">Greek Mythology</div>
            <div className="navbar-menu">
                <ul className="navbar-list">
                    <li>
                        <NavbarLink />
                    </li>
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
