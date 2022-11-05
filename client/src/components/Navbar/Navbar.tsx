import React, { useState } from "react";
import Gods from "../../../resources/images/zeus.svg";
import Demigods from "../../../resources/images/mythology.svg";
import Titans from "../../../resources/images/atlas.svg";
import Creatures from "../../../resources/images/medusa.svg";
import Mortals from "../../../resources/images/heart.svg";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-logo">
                <a href="#">Greek</a>
            </div>
            <div className="navbar-links">
                <a href="#" className="navbar-link">
                    <img src={Gods} className="navbar-icon" />
                </a>
                <a href="#" className="navbar-link">
                    <img src={Demigods} alt="Gods" className="navbar-icon" />
                </a>
                <a href="#" className="navbar-link">
                    <img src={Titans} alt="Gods" className="navbar-icon" />
                </a>
                <a href="#" className="navbar-link">
                    <img src={Creatures} alt="Gods" className="navbar-icon" />
                </a>
                <a href="#" className="navbar-link">
                    <img src={Mortals} alt="Gods" className="navbar-icon" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
