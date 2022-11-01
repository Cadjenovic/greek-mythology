import React, { useEffect, useState } from "react";
import "./Gallery.css";
import mythology from "../../api/mythology";

const Gallery = () => {
    const [beings, setBeings] = useState([]);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        const defaultData = async () => {
            const data = await mythology.getAllBeings();
            setBeings(data.data.data.beings);
        };
        defaultData();
    }, []);

    const onResetClick = () => {
        setInputText("");
    };

    const onInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value);
    };

    const images = beings ? (
        beings.map((being: any, i: number) => (
            <img key={i} src={being.img} alt={being.desc} />
        ))
    ) : (
        <div>Loading</div>
    );

    return (
        <div className="gallery-container">
            <div className="gallery-title">Gallery</div>
            <div className="gallery-search-bar">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => onInputTextChange(e)}
                />
                <button onClick={onResetClick}>Reset</button>
            </div>
            <div>{images}</div>
        </div>
    );
};

export default Gallery;
