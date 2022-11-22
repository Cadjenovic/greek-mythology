"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Being = require("../models/beingModel");
exports.getAll = async (req, res, next) => {
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
        beings,
    });
};
exports.getByName = async (req, res, next) => {
    const queryObj = { ...req.query };
    let name = queryObj.name;
    let regexp = new RegExp(`^${name}`);
    // Setting limit if it is sent, otherwise 5 default
    let limit = queryObj.limit ? queryObj.limit : 5;
    delete queryObj.limit;
    const beings = await Being.find({ name: regexp }).limit(limit);
    if (!beings) {
        new AppError("Could not find anything!", 404);
    }
    res.status(200).json({
        status: "success",
        size: beings.length,
        beings,
    });
};
