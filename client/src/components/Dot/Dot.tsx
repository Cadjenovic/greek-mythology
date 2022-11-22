import React, { FC } from "react";
import "./Dot.css";

interface IProps {
    active: boolean;
    title: string;
    onDotClick: (index: number) => void;
    index: number;
}

const Dot: FC<IProps> = ({ active, title, onDotClick, index }) => {
    const classList = active ? "dot active" : "dot";

    return (
        <div onClick={() => onDotClick(index)} className={classList}>
            {title}
        </div>
    );
};

export default Dot;
