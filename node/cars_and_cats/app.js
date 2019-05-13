var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    // Views
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    } else if(request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    } else if(request.url === '/cars/new') {
        fs.readFile('./views/new_car.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }
    // Stylesheets 
    else if(request.url === '/stylesheets/bootstrap.css') {
        fs.readFile('./stylesheets/bootstrap.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'}); //remember to change this content-type
            response.write(contents);
            response.end();
        });
    } else if(request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    } 
    // Images
    else if(request.url === '/images/lotus.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/lotus.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'}); // change content-type
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/2'){
        fs.readFile('./images/bug.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/3'){
        fs.readFile('./images/rx7.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    } else if(request.url === '/4'){
        fs.readFile('./images/cat.gif', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/gif'});
            response.write(contents);
            response.end();
        })
    }
    // Else error
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(7070);
console.log("Running in localhost at port 7070");