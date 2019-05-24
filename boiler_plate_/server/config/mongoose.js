const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
mongoose.connect('mongodb://localhost/boiler_plate',{useNewUrlParser:true});

const models_paths = path.join(__dirname, './../models');
fs.readdirSync(models_paths).forEach(function(file){
    if(file.indexOf('.js') >=  0){
        require(models_paths + '/' + file);
    }
});