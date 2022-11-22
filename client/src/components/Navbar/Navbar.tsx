import React, { FC } from "react";
import Gods from "../../../resources/images/zeus.svg";
import Demigods from "../../../resources/images/mythology.svg";
import Titans from "../../../resources/images/atlas.svg";
import Creatures from "../../../resources/images/medusa.svg";
import Mortals from "../../../resources/images/heart.svg";
import "./Navbar.css";
import NavbarLink from "../NavbarLink/NavbarLink";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../slices/categoriesSlice";

interface IProps {
    changeShowHero: (showHero: boolean) => void;
}

const Navbar: FC<IProps> = ({ changeShowHero }) => {
    const dispatch = useDispatch();

    return (
        <nav className="navbar-container">
            <div className="navbar-logo">
                <a
                    href="#"
                    onClick={() => {
                        changeShowHero(true);
                        dispatch(setSelectedCategory(""));
                    }}
                >
                    Greek
                    <br />
                    Mythology
                </a>
            </div>
            <div className="navbar-links">
                <NavbarLink
                    category="god"
                    image={Gods}
                    changeShowHero={changeShowHero}
                />
                <NavbarLink
                    category="demigod"
                    image={Demigods}
                    changeShowHero={changeShowHero}
                />
                <NavbarLink
                    category="titan"
                    image={Titans}
                    changeShowHero={changeShowHero}
                />
                <NavbarLink
                    category="creature"
                    image={Creatures}
                    changeShowHero={changeShowHero}
                />
                <NavbarLink
                    category="mortal"
                    image={Mortals}
                    changeShowHero={changeShowHero}
                />
            </div>
        </nav>
    );
};

export default Navbar;
