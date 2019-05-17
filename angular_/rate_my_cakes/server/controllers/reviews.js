require("../models/review.js");
require("../models/cake.js");

const mongoose = require("mongoose");
const Review = mongoose.model("Review");
const Cake = mongoose.model("Cake");

module.exports = {
    allreviews: function(req, res){
        console.log(req.body);
        Cake.find({_id: req.params.id}, function(err, data){
            if(err){
                console.log("err retrieving all reviews")
                res.json({message: "Error", error: err});
            } else {
                res.json({data});
            }
        });
    },
    createreview: function(req, res){
        Review.create(req.body, function(err, data){
            console.log(req.body);
            if(err){
                console.log("err creating review");
                res.json({message: "Error", error: err});
            } else {
                Cake.updateOne({_id: req.body.cake_id}, {$push: {reviews: req.body}}, function(err){
                    if(err){
                        console.log("Error connecting cake");
                    } else {
                        console.log("Successfully added review");
                        res.json({message: "Success", data: data});
                    }
                })
            }
        });
    },
};