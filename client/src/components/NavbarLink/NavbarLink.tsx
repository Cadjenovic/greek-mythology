import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedBeing } from "../../slices/beingSlice";
import { setSelectedCategory } from "../../slices/categoriesSlice";
import { RootState } from "../../store";
import IBeing from "../../interfaces/IBeing";
import "./NavbarLink.css";

interface IProps {
    category: string;
    image: string;
    changeShowHero: (showHero: boolean) => void;
}

const NavbarLink: FC<IProps> = ({ category, image, changeShowHero }) => {
    const selectedCategory = useSelector(
        (state: RootState) => state.categories.selectedCategory
    );
    const beings = useSelector((state: RootState) => state.beings.beings);

    const dispatch = useDispatch();

    return (
        <a
            href="#"
            className={
                selectedCategory === category
                    ? "navbar-link selected-category"
                    : "navbar-link"
            }
            onClick={() => {
                changeShowHero(false);
                dispatch(setSelectedCategory(category));
                dispatch(
                    setSelectedBeing(
                        beings.find(
                            (being: IBeing) => being.category === category
                        ) || beings[0]
                    )
                );
            }}
        >
            <img src={image} className="navbar-icon" />
            <div className="navbar-icon-title">{category}s</div>
        </a>
    );
};

export default NavbarLink;
