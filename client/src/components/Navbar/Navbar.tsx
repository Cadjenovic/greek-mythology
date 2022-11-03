import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import NavbarLinkMenu from "../NavbarLinkMenu/NavbarLinkMenu";
import "./Navbar.css";

const Navbar = () => {
    const categories = useSelector(
        (state: RootState) => state.beings.categories
    );

    return (
        <nav className="navbar-container">
            <Link to="/" className="navbar-logo">
                Greek Mythology
            </Link>
            <div className="navbar-menu">
                <ul className="navbar-list">
                    <li>
                        <NavbarLinkMenu data={categories} />
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">Myths</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
