import React, { FC, useState } from "react";
import CarouselCard from "../CarouselCard/CarouselCard";

interface IProps {
    data: any;
}

const Carousel: FC<IProps> = ({ data }) => {
    const [active, setActive] = useState(0);

    return data.length === 0 ? (
        <div>No data</div>
    ) : (
        <div>
            <CarouselCard {...data[active]} />
        </div>
    );
};

export default Carousel;
