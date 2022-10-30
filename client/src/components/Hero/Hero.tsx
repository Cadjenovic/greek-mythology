import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-explore-container">
                <p className="hero-explore-text">
                    Heroes, Myths and Legends of Ancient Greece...
                </p>
                <button className="hero-explore-btn">Explore</button>
            </div>
        </div>
    );
};

export default Hero;
