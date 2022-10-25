import React, { useState } from "react";
import NavbarLinkDropdownMenu from "../NavbarLinkDropdownMenu/NavbarLinkDropdownMenu";

const NavbarLink = () => {
    const [hovered, setHovered] = useState<boolean>(false);

    const onLinkMouseOver = () => {
        setHovered(true);
    };

    const onLinkMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div>
            <a
                href="#"
                onMouseOver={onLinkMouseOver}
                onMouseLeave={onLinkMouseLeave}
            >
                Link
            </a>
            <NavbarLinkDropdownMenu hovered={hovered} />
        </div>
    );
};

export default NavbarLink;
