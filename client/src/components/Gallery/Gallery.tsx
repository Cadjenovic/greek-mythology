import React, { useState } from "react";
import { getAllImages, getImagesByName } from "../../data";
import "./Gallery.css";

const Gallery = () => {
    const [images, setImages] = useState<(string | undefined)[]>(
        getAllImages()
    );
    const [inputText, setInputText] = useState("");

    const onResetClick = () => {
        setImages(getAllImages());
        setInputText("");
    };

    const onSearchClick = () => {
        setImages(getImagesByName(inputText));
    };

    const onInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value);
    };

    const mappedImages = images.map((img, i) => {
        return (
            <div key={i} className="gallery-image-card">
                <img className="gallery-image" src={img} alt="no" />
            </div>
        );
    });

    return (
        <div className="gallery-container">
            <div className="gallery-title">Gallery</div>
            <div className="gallery-search-bar">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => onInputTextChange(e)}
                />
                <button onClick={onSearchClick}>Search</button>
                <button onClick={onResetClick}>Reset</button>
            </div>
            <div className="gallery-grid">{mappedImages}</div>
        </div>
    );
};

export default Gallery;
