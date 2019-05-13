// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

// Require monGOOSE //NEW
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose',{useNewUrlParser:true});
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    var people = []
    User.find({}, function(err,data){
        if(err){
            console.log("Error occured")
        } else {
            people = data;
            res.render('index', {user_info:people});
        }
    })
})
// Add User Request 
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({name: req.body.name, age: req.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
        console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        }
    res.redirect('/');
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

//commmon mongo commands
//1) Finding all users
// Using the User Schema...
// ...retrieve all records matching {}
// User.find({}, function(err, users) {
//     // Retrieve an array of users
//     // This code will run when the DB is done attempting to retrieve all matching records to {}
//    })
//2) Finding one user
// ...retrieve 1 record (the first record found) matching {} 
// User.findOne({}, function(err, user) {
//     // Retrieve 1 object
//     // This code will run when the DB is done attempting to retrieve 1 record.
//    })
//3) Delete one user
// // ...delete 1 record by a certain key/value.
// User.remove({_id: 'insert record unique id here'}, function(err){
//     // This code will run when the DB has attempted to remove one matching record to {_id: 'insert record unique id here'}
//    })
//4) Update any records
// ...update any records that match the query
// User.update({name:'Andriana'}, {$push: {pets: {name: 'Skippy', type: 'cactus' }}}, function(err){
//     // This code will run when the DB has attempted to update the matching record.
//    })
//    // another way to update a record
//    User.findOne({name: 'Andriana'}, function(err, user){
//     user.name = 'Andri';
//     user.pets.push({name: 'Skippy', type: 'cactus'});
//     user.save(function(err){
//         // if save was successful awesome!
//     })
//    })