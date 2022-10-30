import express from "express";
const cors = require("cors");
const godRouter = require("./routes/godRouter");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routers
app.use("/gods", godRouter);

// Global catch

// Global error handler

module.exports = app;
