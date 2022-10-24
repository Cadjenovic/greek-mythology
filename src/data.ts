// Simulating API data

export const data = [
    {
        name: "zeus",
        description:
            "A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. ",
        image: "https://www.ancient-origins.net/sites/default/files/field/image/Unshakeable-Power-of-Zeus.jpg",
        category: "gods",
    },
    {
        name: "hades",
        description:
            "A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. ",
        image: "https://i.ytimg.com/vi/BMeNMdLMVN0/maxresdefault.jpg",
        category: "gods",
    },
    {
        name: "poseidon",
        description:
            "A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. A bunch of fucking words. ",
        image: "https://miro.medium.com/max/1400/0*3IqOpZXcsC61Bi4u.jpg",
        category: "gods",
    },
    {
        name: "prometeus",
        category: "demigods",
    },
    {
        name: "medusa gorgon",
        category: "creatures",
    },
    {
        name: "achilleus",
        category: "mortals",
    },
    {
        name: "some myth",
        category: "myths",
    },
];

export const getAllCategories: () => string[] = () => {
    return Array.from(new Set(data.map((item) => item.category)));
};

export const getDataByCategory = (category: string) => {
    return data.filter((item) => item.category === category);
};
