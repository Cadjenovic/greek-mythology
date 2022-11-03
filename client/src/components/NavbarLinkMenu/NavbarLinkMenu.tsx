import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarLinkMenu.css";

interface IProps {
    data: string[];
}

const NavbarLinkMenu: FC<IProps> = ({ data }) => {
    const [hovered, setHovered] = useState<boolean>(false);

    const onLinkMouseOver = () => {
        setHovered(true);
    };

    const onLinkMouseLeave = () => {
        setHovered(false);
    };

    const classList = hovered ? "navbar-link-menu active" : "navbar-link-menu";

    return (
        <div
            className="navbar-link-menu-container"
            onMouseOver={onLinkMouseOver}
            onMouseLeave={onLinkMouseLeave}
        >
            <a href="#">Link</a> {/* TODO Make this NavbarLink component*/}
            <div className={classList}>
                {data.map((cat, i) => (
                    <Link key={i} to="/explore">
                        {cat}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavbarLinkMenu;
