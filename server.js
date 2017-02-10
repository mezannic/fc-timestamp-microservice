var express = require('express')
var app = express()

app.get('/:date?', function (req, res) {
  var date, ret
  
  if (/^\d+$/.test(req.params.date)) {
    // unix timestamp
    date = new Date(req.params.date * 1000)
  } else {
    // natural language date
    date = new Date(req.params.date)
  }
  
  if (isNaN(date.getTime())) {
    ret = {
      unix: null,
      natural: null
    }
  } else {
    ret = {
      unix: Math.round(date.getTime() / 1000),
      natural: date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    }
  }
  
  res.setHeader('Content-type', 'application/json; charset=utf-8')
  res.json(ret)
})

app.listen(process.env.PORT, function () {
  console.log('Listening on port ' + process.env.PORT)
})