const God = require("../models/godModel");
import { Request, Response, NextFunction } from "express";

exports.getAll = async (req: Request, res: Response, next: NextFunction) => {
    const queryObj = { ...req.query };
    const gods = await God.find(queryObj);
    console.log("cao");
    console.log(gods);
    res.status(200).json({
        status: "success",
        data: {
            gods,
        },
    });
};
