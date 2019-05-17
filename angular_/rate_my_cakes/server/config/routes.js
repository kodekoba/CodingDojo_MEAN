const cakes = require("../controllers/cakes.js");
const reviews = require("../controllers/reviews.js");

module.exports = function(app){
    app.get("/cakes", function(req, res){
        cakes.allcakes(req, res);
    });
    // app.get("/cakes/show", function(req, res){
    //     cakes.readcake(req, res);
    // });
    app.post("/cakes/new", function(req, res){
        cakes.createcake(req, res);
    });

    app.get("/reviews/:id", function(req, res){
        console.log(req.body + "here");
        reviews.allreviews(req, res);
    });
    app.post("/reviews/new", function(req, res){
        reviews.createreview(req, res);
    });

    // there are no update and delete routes for both cakes and reviews
    // app.put("/cakes/edit", function(req, res){
    //     cakes.updatecake(req, res);
    // });
    // app.delete("/cakes/remove", function(req, res){
    //     cakes.deletecake(req, res);
    // });
}