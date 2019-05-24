const mongoose = require("mongoose");
const ChildSchema = require("./child.js").schema;

//change schema attributes as needed
const ParentSchema = new mongoose.Schema(
    {
    name: {type: String, required: true, trim: true, unique: true},
    image: {type: String, required: true, trim: true},
    childs: [ChildSchema]
    }, {timestamps: true}
);

module.exports = mongoose.model("Parent", ParentSchema);