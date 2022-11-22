import React, { FC } from "react";
import "./GeneralSlide.css";

interface IProps {
    name: string;
    image: string;
    desc: string;
    active: boolean;
}

const GeneralSlide: FC<IProps> = ({ name, desc, image, active }) => {
    return (
        <div className={active ? "general-slide" : "general-slide hidden"}>
            <div className="general-slide-content">
                <h1 className="general-slide-content-title">{name}</h1>
                <p className="general-slide-content-desc">{desc}</p>
            </div>
            <div className="general-slide-image">
                <div>
                    <img src={image} alt={name} />
                </div>
            </div>
        </div>
    );
};

export default GeneralSlide;
