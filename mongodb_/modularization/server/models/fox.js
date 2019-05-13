var mongoose = require('mongoose');

var FoxSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('Fox', FoxSchema);