var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var bcrypt = require('bcrypt');
//New
const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}))

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/login_regi', {useNewUrlParser:true});
const UserSchema = new mongoose.Schema({
    email: {type: String, required: [true, "Email is required"]},first_name: {type: String, required: [true, "First name is required"]}, last_name: {type: String, required: [true, "Last name is required"]}, password: {type: String, required: [true, "Password(hash) is required"]}, birthday: {type: Date, required: [true, "Birthday is required"]},
}, {timestamps: true})

const User = mongoose.model('User', UserSchema);

app.get('/', function(req, res){
    res.render('index');
})


app.post('/registration', (req, res) => {
    bcrypt.hash('password_from_form', 10)
    .then(hashed_password => {
        User.create({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: hashed_password, birthday: req.body.birthday}, (err, user) => {
            if (err) {
                console.log("Error registering");
                res.redirect('/');
            }
            else {
                console.log("Successful registration");
                req.session.user_id = user._id;
                req.session.email = user.email;
                res.redirect('/success')
            }
        })
    })
    .catch(error => {
        console.log("Hashing error");
        res.redirect("/");
    });
})

app.post('/login', (req, res) => {
    User.findOne({email:req.body.email}, (err, user) => {
        if (err) {
            console.log("Error logging in");
            res.redirect('/');
        }
        else {
            bcrypt.compare(req.body.password, user.password)
            .then(result => {
                console.log("Bcrypt match!")
                // Add whatever sessions you want to use here
                req.session.user_id = user._id;
                req.session.first_name = user.first_name;
                req.session.email = user.email;
                res.redirect('/success');
            })
            .catch(error => {
                console.log("Not a bcrypt match");
                res.redirect('/')
            })
        }
    })
})

app.get('/success', function(req, res){
    if(!req.session.user_id){
        res.redirect('/');
    } else {
        res.render('success', {fname:req.session.first_name});
    }
})

app.get("/logout", function(req, res){
	req.session.destroy();
	res.redirect('/');
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})