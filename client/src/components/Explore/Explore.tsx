import React, { useEffect, useState } from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Carousel from "../Carousel/Carousel";
import mythology from "../../api/mythology";
import IBeing from "../../interfaces/IBeing";
import Sidebar from "../Sidebar/Sidebar";
import "./Explore.css";

const Explore = () => {
    return (
        <div className="explore-container">
            <Sidebar />
            <Carousel />
        </div>
    );
};

export default Explore;
