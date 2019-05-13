var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

app.use(session({
    secret: 'yahyeetus',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    if(!(req.session.counter)){
        req.session.counter = 0;
    }
    req.session.counter++;
    res.render("index", {counter: req.session.counter});
})

app.post("/plustwo", function(req, res){
    req.session.counter++;
    res.redirect('/');
});

app.post("/reset", function(req, res){
	req.session.destroy();
	res.redirect('/');
});

app.listen(8000, function() {
 console.log("listening on port 8000");
});


