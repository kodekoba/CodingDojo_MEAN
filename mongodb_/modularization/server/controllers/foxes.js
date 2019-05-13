require('../models/fox.js');

var mongoose = require('mongoose');
var Fox = mongoose.model('Fox');

module.exports = {
    index: function(req,res){
        Fox.find({}, function(err,data){
            if(err){
                console.log("Error occured")
            } else {
                foxies = data;
                res.render('index', {foxes_info:foxies});
            }
        })
    },
    showfox: function(req,res){
        Fox.find({_id:req.params.id}, function(err,data){
            if(err){
                console.log("Error occured on showfox")
            } else {
                res.render('showfox', {foxes_info:data});
            }
        })
    },
    createfox: function(req,res){
        Fox.create(req.body, function(err) {
            if(err) {
            console.log('something went wrong');
            } else { 
            console.log('successfully added a foxy!');
            }
            res.redirect('/');
        })
    },
    showfox2: function(req,res){
        Fox.find({_id:req.params.id}, function(err,data){
            if(err){
                console.log("Error occured on showfox")
            } else {
                res.render('editfox', {foxes_info:data});
            }
        })
    },
    editfox: function(req,res){
        Fox.update({_id:req.params.id}, {name: req.body.name, age: req.body.age}, function(err){
            if(err) {
            console.log('something went wrong');
            } else { 
            console.log('successfully edited a foxy!');
            res.redirect('/');
            }
        })
    },
    deletefox: function(req,res){
        Fox.remove({_id:req.params.id}, function(err){
            if(err) {
            console.log('something went wrong');
            } else { 
            console.log('successfully deleted a foxy!');
            }
        res.redirect('/');
        })
    },
};