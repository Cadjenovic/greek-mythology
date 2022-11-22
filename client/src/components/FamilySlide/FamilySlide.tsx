import React, { FC, useEffect, useRef, useState } from "react";
import "./FamilySlide.css";

interface IProps {
    familyTree: any;
    active: boolean;
}

const FamilySlide: FC<IProps> = ({ familyTree, active }) => {
    const ref = useRef<HTMLDivElement>(null);
    let grabbing = false;

    let startX = 0;
    let startY = 0;
    let scrollX = 0;
    let scrollY = 0;
    let pageX = 0;
    let pageY = 0;

    let popupStyle = {};
    const style = {
        cursor: grabbing ? "grabbing" : "grab",
    };

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollLeft =
                (ref.current.scrollWidth - ref.current.clientWidth) / 2;
        }
    }, [active]);

    const onMove = (e: React.MouseEvent) => {
        if (!grabbing) return;

        const x = e.pageX - (ref.current?.offsetLeft || 0);
        const y = e.pageY - (ref.current?.offsetTop || 0);

        const deviationX = x - startX;
        const deviationY = y - startY;

        if (ref.current) {
            ref.current.scrollLeft = scrollX - deviationX;
            ref.current.scrollTop = scrollY - deviationY;
        }
    };

    const onDown = (e: React.MouseEvent) => {
        grabbing = true;
        pageX = e.pageX;
        startX = pageX - (ref.current?.offsetLeft || 0);
        startY = pageY - (ref.current?.offsetTop || 0);

        if (ref.current) {
            scrollX = ref.current.scrollLeft;
            scrollY = ref.current.scrollTop;
        }
    };

    const onUp = (e: React.MouseEvent) => {
        grabbing = false;
    };

    return (
        <div
            ref={ref}
            className={active ? "family-slide" : "family-slide hidden"}
            style={style}
            onMouseDown={(e) => onDown(e)}
            onMouseUp={(e) => onUp(e)}
            onMouseLeave={(e) => onUp(e)}
            onMouseMove={(e) => onMove(e)}
        >
            {familyTree}
        </div>
    );
};

export default FamilySlide;
