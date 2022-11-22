import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setSelectedBeing } from "../../slices/beingSlice";
import "./Sidebar.css";
import IBeing from "../../interfaces/IBeing";

const Sidebar = () => {
    const beings = useSelector((state: RootState) => state.beings.beings);
    const selectedCategory = useSelector(
        (state: RootState) => state.categories.selectedCategory
    );
    const selectedBeing = useSelector(
        (state: RootState) => state.beings.selectedBeing
    );
    const dispatch = useDispatch();

    const beingsFromCategory = beings.filter(
        (being: IBeing) => being.category === selectedCategory
    );

    const mappedBeings = beings ? (
        beingsFromCategory.map((being: IBeing, i: number) => {
            return (
                <button
                    key={being.name}
                    className={
                        selectedBeing?.name === being.name
                            ? "sidebar-btn selected"
                            : "sidebar-btn"
                    }
                    onClick={() =>
                        dispatch(setSelectedBeing(beingsFromCategory[i]))
                    }
                >
                    {being.name}
                </button>
            );
        })
    ) : (
        <div className="loader"> No data </div>
    );

    return <aside className="sidebar-container">{mappedBeings}</aside>;
};

export default Sidebar;
