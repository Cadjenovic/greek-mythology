import React, { FC } from "react";
import Dot from "../Dot/Dot";
import "./DotContainer.css";

interface IProps {
    activeDot: number;
    onDotClick: (index: number) => void;
}

const titles = ["General", "Lore", "Family"];

const DotContainer: FC<IProps> = ({ activeDot, onDotClick }) => {
    const dotArray = titles.map((item, i) => (
        <Dot
            key={i}
            onDotClick={() => onDotClick(i)}
            active={i === activeDot}
            title={item}
            index={i}
        ></Dot>
    ));

    return <div className="dot-container">{dotArray}</div>;
};

export default DotContainer;
