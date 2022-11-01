import express from "express";
import { resolve } from "path";
const AppError = require("./utils/appError");
const cors = require("cors");
const beingRouter = require("./routes/beingRouter");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routers
app.use("/", beingRouter);

// Global catch
app.use("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 504));
});

// Global error handler

module.exports = app;
