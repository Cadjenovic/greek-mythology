import React, { useEffect, useState } from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Carousel from "../Carousel/Carousel";
import mythology from "../../api/mythology";
import "./Explore.css";

const Explore = () => {
    const categories = useSelector(
        (state: RootState) => state.category.categories
    );
    const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
    const [categoryData, setCategoryData] = useState(null);

    // Initial (default) category - god
    useEffect(() => {
        const defaultData = async () => {
            const data = await mythology.getAllByCategory("god");
            setCategoryData(data.data.data.beings);
        };

        defaultData();
    }, []);

    // Category state change
    const onCategoryClick = async (e: React.MouseEvent) => {
        const category = e.currentTarget.textContent;
        setActiveCategory(category || "god");
        const data = await mythology.getAllByCategory(category || "god");
        setCategoryData(data.data.data.beings);
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
        <div
            className="explore-container"
            onClick={() => console.log(categoryData)}
        >
            <nav className="explore-nav">{mappedCategories}</nav>
            <div className="explore-content">
                {categoryData ? (
                    <Carousel data={categoryData} />
                ) : (
                    <div>Loading</div>
                )}
            </div>
        </div>
    );
};

export default Explore;
