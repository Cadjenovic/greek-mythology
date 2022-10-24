import React, { FC } from "react";
import "./CarouselCard.css";

interface IProps {
    name: string;
    description: string;
    image: string;
}

const CarouselCard: FC<IProps> = ({ name, description, image }) => {
    return (
        <div className="carousel-card">
            <div className="carousel-card-img-container">
                <img className="carousel-card-img" src={image} />
            </div>
            <div className="carousel-card-text">
                {name}
                {description}
            </div>
        </div>
    );
};

export default CarouselCard;
