import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import mythology from "../../api/mythology";
import { RootState } from "../../store";
import "./Sidebar.css";

const Sidebar = () => {
    const beings = useSelector((state: RootState) => state.beings.beings);

    // const [beings, setBeings] = useState<any>(null);

    // useEffect(() => {
    //     const getData = async () => {
    //         const data = await mythology.getAllBeings(100);
    //         setBeings(data.beings);
    //     };

    //     getData();
    // }, []);

    const mappedBeings = beings ? (
        beings.map((being: any) => {
            return (
                <button key={being.name} className="sidebar-btn">
                    {being.name}
                </button>
            );
        })
    ) : (
        <div> No data </div>
    );

    return <div className="sidebar-container">{mappedBeings}</div>;
};

export default Sidebar;
