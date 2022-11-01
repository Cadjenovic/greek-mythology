import axios from "axios";

const mythology = axios.create({
    baseURL: "http://localhost:5000",
});

const getAllBeings = async () => {
    return await mythology.get("/");
};

const getAllByCategory = async (category: string) => {
    return await mythology.get("/", {
        params: {
            category,
        },
    });
};

const getAllOlympians = async () => {
    return await mythology.get("/", {
        params: {
            olympian: true,
        },
    });
};

const getAllByGender = async (gender: string) => {
    return await mythology.get("/", {
        params: {
            gender,
        },
    });
};

const getByName = async (name: string) => {
    return await mythology.get("/", {
        params: {
            name,
        },
    });
};

export default {
    getAllBeings,
    getAllByCategory,
    getAllOlympians,
    getAllByGender,
};
