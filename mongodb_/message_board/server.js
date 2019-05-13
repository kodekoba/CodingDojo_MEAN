var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board', {useNewUrlParser:true});
const CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Comment must have a name"]},content: {type: String, required: [true, "Comment must be filled"]},
}, {timestamps: true})
const MessageSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Message must have a name"]},content: {type: String, required: [true, "Message must be filled"],minlength: [3, "Message content must have at least 3 characters"]},
    comments: [CommentSchema]
}, {timestamps: true})

const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);

app.get('/', function(req, res){
    var msgs = [];
    Message.find({}, function(err,data){
        if(err){
            console.log("Error retrieving all messages")
        } else {
            msgs = data;
            res.render('index', {messages_info: msgs});
        }
    })
})

app.post("/message", function(req, res){
    console.log("POST DATA", req.body);
    var msg = new Message({name: req.body.name, content: req.body.content});
    msg.save(function(err){
        if(err){
            console.log("Error creating message!");
        } else {
            console.log("Successfully created message!");
        }
        res.redirect('/');
    })
})

app.post('/comment/:id', function(req, res){
    console.log("POST DATA", req.body);
    Comment.create(req.body, function(err, data){
        if(err){
            console.log("Error creating comment!");
        } else {
            Message.findOneAndUpdate({_id: req.params.id}, {$push: {comments: data}}, function(err){
                if(err){
                    console.log("Error connecting message")
                } else {
                    console.log("Successfully added comment");
                    res.redirect('/');
                }
            })
        }
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})