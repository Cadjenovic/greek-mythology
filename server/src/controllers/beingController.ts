const Being = require("../models/beingModel");
import { Request, Response, NextFunction } from "express";
import IBeing from "../interfaces/IBeing";

exports.getAll = async (req: Request, res: Response, next: NextFunction) => {
    const queryObj = { ...req.query };

    // Setting limit if it is sent, otherwise 5 default
    let limit = queryObj.limit ? queryObj.limit : 5;
    delete queryObj.limit;

    const beings: IBeing[] = await Being.find(queryObj).limit(limit);

    if (!beings) {
        res.json({ msg: "a" });
        new AppError("Could not find anything!", 404);
    }

    res.status(200).json({
        status: "success",
        size: beings.length,
        beings,
    });
};

exports.getByName = async (req: Request, res: Response, next: NextFunction) => {
    const queryObj = { ...req.query };

    let name = queryObj.name;
    let regexp = new RegExp(`^${name}`);
    // Setting limit if it is sent, otherwise 5 default
    let limit = queryObj.limit ? queryObj.limit : 5;
    delete queryObj.limit;

    const beings: IBeing[] = await Being.find({ name: regexp }).limit(limit);

    if (!beings) {
        res.json({ msg: "a" });
        new AppError("Could not find anything!", 404);
    }

    res.status(200).json({
        status: "success",
        size: beings.length,
        beings,
    });
};
