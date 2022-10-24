import React from "react";
import HeroCover from "../../../resources/images/hero-cover.png";
import "./Hero.css";

const Hero = () => {
    // TODO Maybe dynamic text
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
