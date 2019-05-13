const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//no paths to static or views

require('./server/config/routes.js')(app);
require('./server/config/mongoose.js');

app.listen(8000, function() {
    console.log("listening on port 8000");
})