const mongoose = require("mongoose");

//change schema attributes as needed
const ChildSchema = new mongoose.Schema(
    {
        rating: {type: Number, required: true, min: 1, max: 5},
        comment: {type: String, required: true, trim: true, minlength: 3},
    }, {timestamps: true}
);

module.exports = mongoose.model("Child", ChildSchema);