require("../models/parent.js");
require("../models/child.js");

const mongoose = require("mongoose");
const Parent = mongoose.model("Parent");
const Child = mongoose.model("Child");

module.exports = {
    allchilds: function (req, res) {
        Parent.find({ _id: req.params.id }, function (err, data) {
            if (err) {
                console.log("err retrieving all childs");
                res.json({ errorMsg: "Error", error: err });
            } else {
                res.json({ data: data });
            }
        });
    },
    createchild: function (req, res) {
        Child.create(req.body, function (err, data) {
            console.log(req.params);
            console.log(req.body);
            if (err) {
                console.log("err creating child");
                res.json({ errorMsg: "Error", error: err });
            } else {
                Parent.updateOne({ _id: req.params.id }, { $push: { childs: req.body } }, function (err) {
                    if (err) {
                        console.log("Error connecting parent");
                        res.json({ errorMsg: "Error", error: err });
                    } else {
                        console.log("Successfully added child");
                        res.json({ message: "Success", data: data });
                    }
                });
            }
        });
    },

    //update child fxn ?

    deletechild: function (req, res) {
        console.log("Got to models");
        Parent.updateOne({ _id: req.params.pid }, { $pull: { childs: {_id:req.params.cid }} }, function (err, data) {
            if (err) {
                console.log("err deleting child")
                res.json({ errorMsg: "Error", error: err });
            } else {
                Child.remove({ _id: req.params.cid }, function (err, data2) {
                    if (err) {
                        console.log("err deleting child")
                        res.json({ errorMsg: "Error", error: err });
                    } else {
                        console.log("Successfully deleted child");
                        res.json({ message: "Success", data: data2 });
                    }
                })
            }
        });
    }
}