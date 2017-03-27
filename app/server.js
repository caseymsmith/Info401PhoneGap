// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/test6.html", function (request, response) {
  response.sendFile(__dirname + '/public/test6.html');
});


app.get("/test7.html", function (request, response) {
  response.sendFile(__dirname + '/public/test7.html');
});


app.get("/test7.html", function (request, response) {
  response.sendFile(__dirname + '/public/test8.html');
});


app.get("/test7.html", function (request, response) {
  response.sendFile(__dirname + '/public/test10.html');
});

app.get("/note.html", function (request, response) {
  response.sendFile(__dirname + '/public/note.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
