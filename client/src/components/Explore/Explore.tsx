import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import mythology from "../../api/mythology";
import {
    setBeings,
    setLoading,
    setSelectedBeing,
} from "../../slices/beingSlice";
import { RootState } from "../../store";
import Carousel from "../Carousel/Carousel";
import Hero from "../Hero/Hero";
import Loader from "../Loader/Loader";
import NoContent from "../NoContent/NoContent";
import Sidebar from "../Sidebar/Sidebar";
import "./Explore.css";

interface IProps {
    showHero: boolean;
}

const Explore: FC<IProps> = ({ showHero }) => {
    const beings = useSelector((state: RootState) => state.beings.beings);
    const loading = useSelector((state: RootState) => state.beings.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            dispatch(setLoading(true));
            try {
                const data = await mythology.getAllBeings(1000);
                dispatch(setBeings(data.beings));
                dispatch(setSelectedBeing(data.beings[0]));
                dispatch(setLoading(false));
            } catch {
                dispatch(setLoading(false));
            }
        };

        getData();
    }, []);

    if (showHero) {
        return (
            <main className="explore-container">
                <Hero />
            </main>
        );
    }

    if (loading) {
        return (
            <main className="explore-container">
                <Loader />
            </main>
        );
    }

    if (beings.length === 0) {
        return (
            <main className="explore-container">
                <NoContent />
            </main>
        );
    }

    return (
        <main className="explore-container">
            <Sidebar />
            <Carousel />
        </main>
    );
};

export default Explore;
