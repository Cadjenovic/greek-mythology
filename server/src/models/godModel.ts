const mongoose = require("mongoose");

const godSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Specify name"] },
    desc: { type: String, required: [true, "Specify desc"] },
    img: { type: String, required: [true, "Specify img"] },
    olympian: { type: Boolean, required: [true, "Specify olympian"] },
    gender: { type: Boolean, required: [true, "Specify gender"] },
});

const God = mongoose.model("gods", godSchema);

module.exports = God;
