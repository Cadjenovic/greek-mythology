import React, { FC, useState } from "react";
import "./Explore.css";
import { getDataByCategory } from "../../data";
import Carousel from "../Carousel/Carousel";

interface IProps {
    categories: string[];
}

const Explore: FC<IProps> = ({ categories }) => {
    // TODO Active category state, bound to change place
    const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
    const [categoryData, setCategoryData] = useState(getDataByCategory("gods"));

    // Category state change
    const onCategoryClick = (e: React.MouseEvent) => {
        setActiveCategory(e.currentTarget.textContent || "gods");
        setCategoryData(
            getDataByCategory(e.currentTarget.textContent || "gods")
        );
    };

    // TODO Width calculation
    const widthForCat = window.innerWidth / categories.length;

    // TODO Mapping categories
    const mappedCategories = categories.map((category, i) => {
        return (
            <div
                key={i}
                className="explore-nav-btn"
                style={{ width: widthForCat, textTransform: "capitalize" }}
                onClick={onCategoryClick}
            >
                {category}
            </div>
        );
    });

    // Return
    return (
        <div className="explore-container">
            <nav className="explore-nav">{mappedCategories}</nav>
            <div className="explore-content">
                <Carousel data={categoryData} />
            </div>
        </div>
    );
};

export default Explore;
