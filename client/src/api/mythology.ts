import axios from "axios";

interface IData {
    status: string;
    size: number;
    beings: IBeing[];
}

interface IBeing {
    __id: string;
    name: string;
    short_desc: string;
    desc: string;
    portrait: string;
    img: string;
    olympian: boolean;
    gender: string;
    category: string;
    children?: string[];
}

const mythology = axios.create({
    baseURL: "https://greek-mythology-vtz0.onrender.com",
});

const getAllBeings = async (limit: number = 5) => {
    const { data }: { data: IData } = await mythology.get<IData>("/", {
        params: {
            limit,
        },
    });

    return data;
};

const getAllByCategory = async (category: string, limit: number = 5) => {
    const { data }: { data: IData } = await mythology.get("/", {
        params: {
            category,
            limit,
        },
    });

    return data;
};

const getAllOlympians = async (limit: number = 5) => {
    const { data }: { data: IData } = await mythology.get("/", {
        params: {
            olympian: true,
            limit,
        },
    });

    return data;
};

const getAllByGender = async (gender: string, limit: number = 5) => {
    const { data }: { data: IData } = await mythology.get("/", {
        params: {
            gender,
            limit,
        },
    });

    return data;
};

const getByName = async (name: string) => {
    const { data }: { data: IData } = await mythology.get("/name", {
        params: {
            name,
        },
    });

    return data;
};

export default {
    getAllBeings,
    getAllByCategory,
    getAllOlympians,
    getAllByGender,
    getByName,
};
