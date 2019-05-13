var people = require("../controllers/people.js");

module.exports = function(app){
    app.get("/", function(req, res){
        people.index(req, res);
    });
    app.get("/new/:name", function(req, res){
        people.createperson(req, res);
    });
    app.get("/:name", function(req, res){
        people.showperson(req, res);
    });
    app.get("/remove/:name", function(req, res){
        people.deleteperson(req, res);
    });
}