import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Explore from "../Explore/Explore";
import Gallery from "../Gallery/Gallery";
import "./App.css";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Explore />
            <Gallery />
        </>
    );
};

export default App;
