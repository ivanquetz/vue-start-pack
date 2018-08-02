var express = require('express')
var app = express()
var port = 8080 // process.env.PORT
app.use(express.static('public'))


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html')
});


var listener = app.listen(port, function() {
  console.log('*** listening on port: ' + port + ' ***')
})
