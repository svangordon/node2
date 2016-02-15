// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/public/:filename', function(req, res){
  // res.send('WHAT')
  var fileContents = fs.readFile(req.params.filename, function(err,data) {
  	if (err) throw err;
    res.header('Content-Type', 'text/html');
  	res.send(data)
  })
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})

