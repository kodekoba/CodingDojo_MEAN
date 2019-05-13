require("../models/person.js");

const mongoose = require("mongoose");
const Person = mongoose.model("Person");

module.exports = {
    index: function(req, res){
        Person.find({}, function(err, data){
            if(err){
                console.log("Could not retrieve all people.");
                res.json({message: "Error", error: err});
            } else {
                res.json({data: data});
            }
        });
    },
    createperson: function(req, res){
        Person.create(req.params, function(err, data){
            if(err){
                console.log("Could not create a person.");
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        });
    },
    showperson: function(req, res){
        Person.findOne(req.params, function(err, data){
            if(err || data == null){
                console.log("Could not find this person.");
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        });
    },
    deleteperson: function(req, res){
        Person.findOneAndDelete(req.params, function(err, data){
            if(err || data == null){
                console.log("Could not delete this person.");
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Deleted person", data: data});
            }
        });
    },
};