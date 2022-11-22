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

export default IBeing;
