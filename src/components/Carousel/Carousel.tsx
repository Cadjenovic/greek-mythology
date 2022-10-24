import React, { FC, useState } from "react";
import CarouselCard from "../CarouselCard/CarouselCard";
import DotContainer from "../DotContainer/DotContainer";
import "./Carousel.css";

interface IProps {
    data: any;
}

const Carousel: FC<IProps> = ({ data }) => {
    const [active, setActive] = useState(0);

    const onPreviousClick = () => {
        if (active <= 0) return;
        setActive((prev) => prev - 1);
    };

    const onNextClick = () => {
        if (active >= data.length - 1) return;
        setActive((prev) => prev + 1);
    };

    return data.length === 0 ? (
        <div className="no-data">No data</div>
    ) : (
        <div className="carousel">
            <CarouselCard {...data[active]} />
            <div className="carousel-nav">
                <button onClick={onPreviousClick}>Left</button>
                <DotContainer length={data.length} activeDot={active} />
                <button onClick={onNextClick}>Right</button>
            </div>
        </div>
    );
};

export default Carousel;
