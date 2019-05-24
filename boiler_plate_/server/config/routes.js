const parents = require("../controllers/parents.js");
const childs = require("../controllers/childs.js");

module.exports = function(app){
    app.get("/parents", function(req, res){
        parents.allparents(req, res);
    });
    app.get("/parents/:id", function(req, res){
        //this gives all children of a SINGLE parent as well as that parent info
        childs.allchilds(req, res);
    });
    app.post("/parents/new", function(req, res){
        parents.createparent(req, res);
    });
    app.put("/childs/new/:id", function(req, res){
        childs.createchild(req, res);
    });
    app.put("/parents/edit/:id", function(req, res){
        console.log("WE MADE IT WE MADE IT WE MADE IT WE MADE IT");
        parents.updateparent(req, res);
    });
    //edit child
    app.delete("/parents/remove/:id", function(req, res){
        parents.deleteparent(req, res);
    });
    app.get("/childs/remove/:pid/:cid", function(req, res){
        childs.deletechild(req, res);
    });
    
    
    //include update and delete for nested models for black belt feature?
    //pass parent+ child id
    // https://mongoosejs.com/docs/subdocs.html
}