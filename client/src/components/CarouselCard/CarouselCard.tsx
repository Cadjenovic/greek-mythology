import React, { FC } from "react";
import "./CarouselCard.css";

interface IProps {
    name: string;
    image: string;
    desc: string;
}

const CarouselCard: FC<IProps> = ({ name, image, desc }) => {
    return (
        <div className="carousel-card">
            <div className="first-slide">
                <div className="first-slide-content">
                    <h1>{name}</h1>
                    <p>{desc}</p>
                </div>
                <div className="first-slide-image">
                    <img src={image} alt={name} />
                </div>
            </div>
        </div>
    );
};

export default CarouselCard;
