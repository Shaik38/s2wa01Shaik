var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const x= req.query.x || getRandomArbitrary(0, 60);
  var a1 = Math.pow(x);
  var a2 = Math.sign(x);
  var a3 = Math.tanh(x);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  res.send(`Math.pow(${x}) is ${a1} ; Math.sign(${x}) is ${a2} ; Math.tanh(${x}) is ${a3}\n`);
});

module.exports = router;