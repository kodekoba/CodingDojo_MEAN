var foxes = require('../controllers/foxes.js');

module.exports = function(app){
    app.get('/', function(req, res) {
        var foxies = [];
        foxes.index(req,res);
    })
    
    app.get('/foxes/new', function(req, res) {
        res.render('newfox');
    })
    
    app.get('/foxes/:id', function(req, res) {
        foxes.showfox(req,res);
    })
    
    app.post('/foxes', function(req, res) {
        console.log("POST DATA", req.body);
        foxes.createfox(req,res);
    })
    
    app.get('/foxes/edit/:id', function(req, res) {
        foxes.showfox2(req,res);
    })
    
    app.post('/foxes/:id', function(req, res) {
        console.log("POST DATA", req.body);
        foxes.editfox(req,res);
    })
    
    app.get('/foxes/destroy/:id', function(req, res) {
        foxes.deletefox(req,res);
    })
};
