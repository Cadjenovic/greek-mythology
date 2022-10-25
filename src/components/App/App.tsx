import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Explore from "../Explore/Explore";
import "./App.css";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Explore />
        </>
    );
};

export default App;
