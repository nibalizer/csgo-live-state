var bodyParser = require('body-parser');
const express = require('express')

const app = express()
app.use(bodyParser.json()); // for parsing application/json

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  if (req.body.round.phase != undefined) {
    console.log("Phase: " + req.body.round.phase);
  }
  if (req.body.round.bomb != undefined) {
    console.log("Bomb: " + req.body.round.bomb);
  }
  console.log(req.body);
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

