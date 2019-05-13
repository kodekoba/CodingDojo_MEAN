var express = require("express");
var app = express();

app.get('/', function(request, response) {
   response.send("<h1>Hello Express</h1>");
})

app.use(express.static(__dirname + "/static"));

app.set('images', __dirname + '/images');
// app.set('stylesheets', __dirname + '/stylesheets'); 

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/cars", function (request, response){
    var cars_array = [
        {source: "/images/lotus.jpg"},
        {source: "/images/bug.jpg"},
        {source: "/images/rx7.jpg"}
    ];
    response.render('cars', {cars: cars_array});
})

app.get("/cats", function (request, response){
  var cats_array = [
      {source: "/images/cat.gif"}
  ];
  response.render('cats', {cats: cats_array});
})

app.get("/form", function (request, response){
  response.render('form');
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})