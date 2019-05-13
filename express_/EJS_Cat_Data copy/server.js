var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.set('images', __dirname + '/images');

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/cats", function (request, response){
    var cats_array = [
        {source: "/images/tea.jpg", name: "cuddles"},
        {source: "/images/simba.jpg", name: "fuzzles"},
        {source: "/images/evil.jpg", name: "puddles"}
    ];
    response.render('cats', {cats: cats_array});
})

app.get("/cuddles", function (request, response){
    var cat_info = [
        {
            source: "/images/tea.jpg", 
            name: "Cuddles", 
            food: "Spaghetti", 
            age: "3", 
            spots:["Under the bed","In a sunbeam"]
        }
    ];
    response.render('cuddles', {cat: cat_info});
})

app.get("/fuzzles", function (request, response){
    var cat_info = [
        {
            source: "/images/simba.jpg", 
            name: "Fuzzles", 
            food: "Warthogs", 
            age: "9", 
            spots:["Pride Rock","In a hammock"]
        }
    ];
    //response.render('fuzzles', {cat: cat_info});
    response.render('cuddles', {cat: cat_info});
})

app.get("/puddles", function (request, response){
    var cat_info = [
        {
            source: "/images/evil.jpg", 
            name: "Puddles", 
            food: "Flesh", 
            age: "infinity", 
            spots:["Dante's Inferno","Under your bed"]
        }
    ];
    //response.render('puddles', {cat: cat_info});
    response.render('cuddles', {cat: cat_info});
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})