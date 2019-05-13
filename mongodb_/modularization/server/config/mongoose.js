var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://localhost/mongoose_dashboard',{useNewUrlParser:true});

// create a variable that points to the path where all the models are located
// read all of the files in the models_path and require each of those js files
const models_paths = path.join(__dirname, './../models');
fs.readdirSync(models_paths).forEach(function(file){
    if(file.indexOf('.js') >=  0){
        require(models_paths + '/' + file);
    }
});
