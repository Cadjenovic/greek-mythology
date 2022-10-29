import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Explore.css";
import { getDataByCategory } from "../../data";
import Carousel from "../Carousel/Carousel";
import { RootState } from "../../store";

const Explore = () => {
    const categories = useSelector(
        (state: RootState) => state.category.categories
    );
    const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
    const [categoryData, setCategoryData] = useState(getDataByCategory("gods"));

    // Category state change
    const onCategoryClick = (e: React.MouseEvent) => {
        const category = e.currentTarget.textContent;
        setActiveCategory(category || "gods");
        setCategoryData(getDataByCategory(category || "gods"));
    };

    // Width calculation
    const widthForCat = window.outerWidth / categories.length;

    // TODO Mapping categories
    const mappedCategories = categories.map((category, i) => {
        return (
            <div
                key={i}
                className={
                    category === activeCategory
                        ? "explore-nav-btn active"
                        : "explore-nav-btn"
                }
                style={{ width: widthForCat, textTransform: "capitalize" }}
                onClick={onCategoryClick}
            >
                {category}
            </div>
        );
    });

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
