require("../models/task.js");

const mongoose = require("mongoose");
const Task = mongoose.model("Task");

module.exports = {
    index: function(req, res){
        Task.find({}, function(err, data){
            if(err){
                console.log("err retrieving all tasks")
                res.json({message: "Error", error: err});
            } else {
                res.json({data});
            }
        });
    },
    createtask: function(req, res){
        Task.create(req.params, function(err, data){
            if(err){
                console.log("err creating task");
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        });
    },
    readtask: function(req, res){
        Task.findOne(req.params, function(err, data){
            if(err || data == null){
                console.log("err reading task");
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        });
    },
    updatetask: function(req, res){
        Task.findOneAndUpdate({_id: req.params.id}, {title: req.params.title, description: req.params.description, completed: req.params.completed}, function(err, data){
            if(err || data == null){
                console.log("err updating task");
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        });
    },
    deletetask: function(req, res){
        Task.findOneAndDelete(req.params, function(err, data){
            if(err || data == null){
                console.log("err deleting task");
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Deleted task", data: data});
            }
        });
    },
};