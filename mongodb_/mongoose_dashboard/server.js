var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard',{useNewUrlParser:true});
var FoxSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('Fox', FoxSchema);
var Fox = mongoose.model('Fox');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var foxies = []
    Fox.find({}, function(err,data){
        if(err){
            console.log("Error occured")
        } else {
            foxies = data;
            res.render('index', {foxes_info:foxies});
        }
    })
})

app.get('/foxes/new', function(req, res) {
    res.render('newfox');
})

app.get('/foxes/:id', function(req, res) {
    Fox.find({_id:req.params.id}, function(err,data){
        if(err){
            console.log("Error occured on showfox")
        } else {
            res.render('showfox', {foxes_info:data});
        }
    })
})

app.post('/foxes', function(req, res) {
    console.log("POST DATA", req.body);
    var fox = new Fox({name: req.body.name, age: req.body.age});
    fox.save(function(err) {
        if(err) {
        console.log('something went wrong');
        } else { 
        console.log('successfully added a foxy!');
        }
        res.redirect('/');
    })
})

app.get('/foxes/edit/:id', function(req, res) {
    Fox.find({_id:req.params.id}, function(err,data){
        if(err){
            console.log("Error occured on showfox")
        } else {
            res.render('editfox', {foxes_info:data});
        }
    })
})

app.post('/foxes/:id', function(req, res) {
    console.log("POST DATA", req.body);
    Fox.update({_id:req.params.id}, {name: req.body.name, age: req.body.age}, function(err){
        if(err) {
        console.log('something went wrong');
        } else { 
        console.log('successfully edited a foxy!');
        res.redirect('/');
        }
    })
})

app.get('/foxes/destroy/:id', function(req, res) {
    Fox.remove({_id:req.params.id}, function(err){
        if(err) {
        console.log('something went wrong');
        } else { 
        console.log('successfully deleted a foxy!');
        }
    res.redirect('/');
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})