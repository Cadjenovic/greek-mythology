import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./NavbarLinkDropdownMenu.css";

interface IProps {
    hovered: boolean;
}

const NavbarLinkDropdownMenu: FC<IProps> = ({ hovered }) => {
    const classList = hovered
        ? "navbar-link-dropdown-menu-container active"
        : "navbar-link-dropdown-menu-container";

    const categories = useSelector(
        (state: RootState) => state.category.categories
    );

    return <div className={classList}></div>;
};

export default NavbarLinkDropdownMenu;
