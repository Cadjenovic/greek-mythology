import React, { FC } from "react";
import "./LoreSlide.css";

interface IProps {
    name: string;
    image: string;
    desc: string;
    active: boolean;
}

const LoreSlide: FC<IProps> = ({ name, desc, image, active }) => {
    return (
        <div className={active ? "lore-slide" : "lore-slide hidden"}>
            <div className="lore-slide-content">
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default LoreSlide;
