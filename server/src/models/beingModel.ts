const mongoose = require("mongoose");

const beingSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Specify name"], unique: true },
    short_desc: { type: String, required: [true, "Specify desc"] },
    desc: { type: String, required: [true, "Specify desc"] },
    portrait: { type: String, required: [true, "Specify img"] },
    img: { type: String, required: [true, "Specify img"] },
    category: { type: String, required: [true, "Specify category"] },
    olympian: { type: Boolean, required: [true, "Specify olympian"] },
    gender: { type: String, required: [true, "Specify gender"] },
    children: { type: [String], required: [true, "Specify children"] },
});

const Being = mongoose.model("beings", beingSchema);

module.exports = Being;
