import React, { useEffect, useRef } from "react";
import Hero from "../Hero/Hero";
import Explore from "../Explore/Explore";
import Gallery from "../Gallery/Gallery";
import "./App.css";
import Navbar from "../Navbar/Navbar";

const App = () => {
    const ref = useRef(null);

    useEffect(() => {
        const a = async () => {
            const d = await fetch("http://localhost:5000/gods?");
            const data = await d.json();
            console.log(data);
        };
        a();
    }, []);

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
