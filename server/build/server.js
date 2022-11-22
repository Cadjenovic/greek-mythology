"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/config.env" });
const app = require("./app");
const port = process.env.PORT || 5000;
const database = (process.env.DATABASE || "").replace("<PASSWORD>", process.env.DATABASE_PASSWORD || "");
mongoose
    .connect(database, {
    useNewUrlParser: true,
})
    .then(() => {
    console.log("Database connection established successfully.");
})
    .catch((err) => console.log(`Database connection failed with error: ${err}`));
app.listen(port, () => {
    console.log("Server started");
});
