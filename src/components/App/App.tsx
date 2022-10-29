import React, { useRef } from "react";
import Hero from "../Hero/Hero";
import Explore from "../Explore/Explore";
import Gallery from "../Gallery/Gallery";
import "./App.css";

const App = () => {
    const ref = useRef(null);

    return (
        <>
            <Hero />
            <Explore />
            <Gallery />
        </>
    );
};

export default App;
