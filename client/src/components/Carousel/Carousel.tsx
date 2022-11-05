import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CarouselCard from "../CarouselCard/CarouselCard";
import DotContainer from "../DotContainer/DotContainer";
import "./Carousel.css";

interface IProps {
    data: any;
}

const Carousel = () => {
    const beings = useSelector((state: RootState) => state.beings.beings);

    console.log("RENDERED");
    console.log(beings);

    return (
        <div className="carousel-container" onClick={() => console.log(beings)}>
            {beings.length > 0 ? (
                <CarouselCard
                    name={beings[0].name}
                    image={beings[0].img}
                    desc={beings[0].desc}
                />
            ) : (
                <div>No data</div>
            )}
            <div className="carousel-menu">Bottom Menu</div>
        </div>
    );
};

export default Carousel;
