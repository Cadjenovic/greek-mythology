import express from "express";
import { resolve } from "path";
const cors = require("cors");
const beingRouter = require("./routes/beingRouter");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routers
app.use("/", beingRouter);

// Global catch

// Global error handler

module.exports = app;
