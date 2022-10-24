import React, { FC } from "react";

interface IProps {
    name: string;
    description: string;
    image: string;
}

const CarouselCard: FC<IProps> = ({ name, description, image }) => {
    return (
        <div>
            {name}
            {description}
            <img src={image} />
        </div>
    );
};

export default CarouselCard;
