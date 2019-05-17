const mongoose = require("mongoose");

const ReviewSchema = require("./review.js").schema;

const CakeSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, trim: true, unique: true},
        image: {type: String, required: true, trim: true},
        rating: {type: Number, required: false, default: 0},
        reviews: [ReviewSchema]
    }, {timestamps: true}
);

module.exports = mongoose.model("Cake", CakeSchema);