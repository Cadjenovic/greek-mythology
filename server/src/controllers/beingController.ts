const Being = require("../models/beingModel");
import { Request, Response, NextFunction } from "express";

exports.getAll = async (req: Request, res: Response, next: NextFunction) => {
    const queryObj = { ...req.query };

    // Setting limit if it is sent, otherwise 5 default
    let limit = queryObj.limit ? queryObj.limit : 5;
    delete queryObj.limit;

    const beings = await Being.find(queryObj).limit(limit);

    if (!beings) {
        new AppError("Could not find anything!", 404);
    }

    res.status(200).json({
        status: "success",
        size: beings.length,
        data: {
            beings,
        },
    });
};
