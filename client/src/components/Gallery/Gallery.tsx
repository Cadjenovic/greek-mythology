import React, { useEffect, useState } from "react";
import "./Gallery.css";
import mythology from "../../api/mythology";
import IBeing from "../../interfaces/IBeing";

const Gallery = () => {
    const [beings, setBeings] = useState<IBeing[]>([]);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        const defaultData = async () => {
            const data = await mythology.getAllBeings(10);
            setBeings(data.beings);
        };
        defaultData();
    }, []);

    const onInputTextChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setInputText(e.currentTarget.value);

        if (!e.currentTarget.value) {
            const data = await mythology.getAllBeings();
            setBeings(data.beings);
            return;
        }

        const data = await mythology.getByName(e.currentTarget.value);
        setBeings(data.beings);
    };

    const images = beings ? (
        beings.map((being: any, i: number) => (
            <img
                className="gallery-image"
                key={i}
                src={being.img}
                alt={being.desc}
            />
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
            </div>
            <div className="gallery-grid">{images}</div>
        </div>
    );
};

export default Gallery;
