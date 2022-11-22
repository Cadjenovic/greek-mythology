import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Explore from "../components/Explore/Explore";

const Home = () => {
    const [showHero, setShowHero] = useState(true);

    const changeShowHero = (showHero: boolean) => {
        setShowHero(showHero);
    };

    return (
        <>
            <Navbar changeShowHero={changeShowHero} />
            <Explore showHero={showHero} />
        </>
    );
};

export default Home;
