import React, { FC } from "react";
import "./CarouselCard.css";

interface IProps {
    name: string;
    desc: string;
    img: string;
}

const CarouselCard: FC<IProps> = ({ name, desc, img }) => {
    return (
        <div className="carousel-card">
            <div className="carousel-card-img-container">
                <img className="carousel-card-img" src={img} alt={name} />
            </div>
            <div className="carousel-card-text">
                {name}
                {desc}
            </div>
        </div>
    );
};

export default CarouselCard;
