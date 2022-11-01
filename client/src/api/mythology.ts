import axios from "axios";

const mythology = axios.create({
    baseURL: "http://localhost:5000",
});

const getAllBeings = async (limit: number = 5) => {
    return await mythology.get("/", {
        params: {
            limit,
        },
    });
};

const getAllByCategory = async (category: string, limit: number = 5) => {
    return await mythology.get("/", {
        params: {
            category,
            limit,
        },
    });
};

const getAllOlympians = async (limit: number = 5) => {
    return await mythology.get("/", {
        params: {
            olympian: true,
            limit,
        },
    });
};

const getAllByGender = async (gender: string, limit: number = 5) => {
    return await mythology.get("/", {
        params: {
            gender,
            limit,
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
    getByName,
};
