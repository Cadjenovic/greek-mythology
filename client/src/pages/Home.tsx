import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Explore from "../components/Explore/Explore";
import Gallery from "../components/Gallery/Gallery";

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
