"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AppError = require("./utils/appError");
const cors = require("cors");
const beingRouter = require("./routes/beingRouter");
const app = (0, express_1.default)();
// Middleware
app.use(cors());
app.use(express_1.default.json());
// Routers
app.use("/", beingRouter);
// Global catch
app.use("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 504));
});
// Global error handler
module.exports = app;
