import React, { FC } from "react";
import Dot from "../Dot/Dot";
import "./DotContainer.css";

interface IProps {
    length: number;
    activeDot: number;
}

const DotContainer: FC<IProps> = ({ length, activeDot }) => {
    const dotArray = [...Array(length)].map((item, i) => (
        <Dot key={i} active={i === activeDot}></Dot>
    ));

    console.log(dotArray);

    return <div className="dot-container">{dotArray}</div>;
};

export default DotContainer;
