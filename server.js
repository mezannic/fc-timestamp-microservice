var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send(String(Date.now()))
})

app.listen(process.env.PORT, function () {
  console.log('Listening on port ' + process.env.PORT)
})