import React, { FC } from "react";
import "./Dot.css";

interface IProps {
    active: boolean;
}

const Dot: FC<IProps> = ({ active }) => {
    const classList = active ? "dot active" : "dot";

    return <div className={classList}> </div>;
};

export default Dot;
