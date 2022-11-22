import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IBeing from "../../interfaces/IBeing";
import { setSelectedBeing } from "../../slices/beingSlice";
import { setSelectedCategory } from "../../slices/categoriesSlice";
import { RootState } from "../../store";
import DotContainer from "../DotContainer/DotContainer";
import FamilySlide from "../FamilySlide/FamilySlide";
import GeneralSlide from "../GeneralSlide/GeneralSlide";
import LoreSlide from "../LoreSlide/LoreSlide";
import "./Carousel.css";

const Carousel = () => {
    const beings = useSelector((state: RootState) => state.beings.beings);
    const being = useSelector((state: RootState) => state.beings.selectedBeing);
    const dispatch = useDispatch();
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        setActive(0);
    }, [being]);

    const onDotClick = (index: number) => {
        setActive(index);
    };

    const getByName = (name: string) => {
        return beings.find((being: IBeing) => being.name === name);
    };

    const onPortraitClick = (being: IBeing) => {
        dispatch(setSelectedCategory(being.category));
        dispatch(setSelectedBeing(being));
    };

    const dfs = (node: IBeing | null, cont: any[]) => {
        if (!node) return;

        const bigDiv = [];
        const smallDiv = (
            <div
                key={Math.random()}
                className="small-div"
                onClick={() => {
                    onPortraitClick(node);
                }}
            >
                <p>{node.name}</p>
                <img src={node.portrait} />
            </div>
        );
        let style = {};

        bigDiv.push(smallDiv);

        if (node.children) {
            style = {
                ...style,
                display: "grid",
                gridTemplateColumns: `repeat(${node.children.length},1fr)`,
                justifyItems: "center",
                alignItems: "start",
                flexGrow: "1",
                height: "min-content",
                rowGap: "50px",
                userSelect: "none",
            };

            for (const child of node.children) {
                const c = getByName(child);
                if (c) {
                    dfs(c, bigDiv);
                }
            }
        }

        cont.push(
            <div key={Math.random()} className="big-div" style={style}>
                {bigDiv}
            </div>
        );

        return cont;
    };

    return (
        <div className="carousel-container">
            {being ? (
                <article className="carousel-card">
                    <GeneralSlide
                        name={being.name}
                        desc={being.short_desc}
                        image={being.img}
                        active={active === 0}
                    />
                    <LoreSlide
                        name={being.name}
                        desc={being.desc}
                        image={being.img}
                        active={active === 1}
                    />
                    <FamilySlide
                        familyTree={dfs(being, [])}
                        active={active === 2}
                    />
                </article>
            ) : (
                <div className="carousel-card">No Data</div>
            )}

            <div className="carousel-menu">
                <DotContainer activeDot={active} onDotClick={onDotClick} />
            </div>
        </div>
    );
};

export default Carousel;
