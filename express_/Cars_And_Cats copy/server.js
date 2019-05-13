var express = require("express");
console.log("Let's find out what express is", express);
var app = express();
console.log("Let's find out what app is", app);

app.get('/', function(request, response) {
   console.log("The request object", request);
   console.log("The response object", response);
   response.send("<h1>Hello Express</h1>");
})

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));

app.listen(8000, function() {
  console.log("listening on port 8000");
})