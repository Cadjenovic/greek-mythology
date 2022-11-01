const mongoose = require("mongoose");

const beingSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Specify name"], unique: true },
    desc: { type: String, required: [true, "Specify desc"] },
    img: { type: String, required: [true, "Specify img"] },
    category: { type: String, required: [true, "Specify category"] },
    olympian: { type: Boolean, required: [true, "Specify olympian"] },
    gender: { type: String, required: [true, "Specify gender"] },
});

const Being = mongoose.model("beings", beingSchema);

module.exports = Being;
