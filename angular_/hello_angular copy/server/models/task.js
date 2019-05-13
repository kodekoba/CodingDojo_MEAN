const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, trim: true,unique: true},
        description: {type: String, required: false, trim: true, default: ""},
        completed: {type: Boolean, required: false, default: false}
    },
    {timestamps: true}
);

module.exports = mongoose.model("Task", TaskSchema);