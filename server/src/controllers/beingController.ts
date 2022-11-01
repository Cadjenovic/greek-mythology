const Being = require("../models/beingModel");
import { Request, Response, NextFunction } from "express";

exports.getAll = async (req: Request, res: Response, next: NextFunction) => {
    const queryObj = { ...req.query };
    const beings = await Being.find(queryObj);

    res.status(200).json({
        status: "success",
        data: {
            beings,
        },
    });
};
