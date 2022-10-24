import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Explore from "../Explore/Explore";
import "./App.css";

// Simulating data from the API
import { data, getAllCategories } from "../../data";

const categories = getAllCategories();

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Explore categories={categories} />
        </>
    );
};

export default App;
