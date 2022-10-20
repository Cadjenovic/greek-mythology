import React from "react";
import HeroCover from "../../../resources/images/hero-cover.png";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="explore-container">
                <p className="explore-text">
                    Heroes, Myths and Legends of Ancient Greece...
                </p>
                <button className="explore-btn">Explore</button>
            </div>
        </div>
    );
};

export default Hero;
