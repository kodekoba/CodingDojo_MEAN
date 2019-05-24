require("../models/parent.js");

const mongoose = require("mongoose");
const Parent = mongoose.model("Parent");

module.exports = {
    allparents: function(req, res){
        Parent.find({}, function(err, data){
            if(err){
                console.log("err retrieving all parents")
                res.json({errorMsg: "Error", error: err});
            } else {
                res.json({data});
            }
        });
    },
    createparent: function(req, res){
        Parent.create(req.body, function(err, data){
            console.log(req.body);
            if(err){
                console.log("err creating parent");
                res.json({errorMsg: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        });
    },
    updateparent: function(req, res){
        Parent.findOneAndUpdate({_id: req.params.id}, {name: req.body.name, image: req.body.image}, function(err, data){
            if(err){
                console.log("err updating parent");
                res.json({errorMsg: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        });
    },
    deleteparent: function(req, res){
        Parent.findOneAndDelete({_id: req.params.id}, function(err, data){
            if(err || data == null){
                console.log("err deleting parent");
                res.json({errorMsg: "Error", error: err});
            } else {
                res.json({message: "Success deleting parent", data: data});
            }
        });
    },
}