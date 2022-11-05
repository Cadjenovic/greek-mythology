import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Explore from "../components/Explore/Explore";
import Gallery from "../components/Gallery/Gallery";
import mythology from "../api/mythology";
import { useDispatch } from "react-redux";
import { setBeings } from "../slices/beingSlice";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            const data = await mythology.getAllBeings(100);
            console.log(data);

            dispatch(setBeings(data.beings));
        };

        getData();
    }, []);

    return (
        <>
            <Navbar />
            <Explore />
        </>
    );
};

export default App;
