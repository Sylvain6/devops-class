var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get("/", function (req, res, next) {
  JSON.stringify(res.send(fs.readFileSync('db.json', {
    encoding: 'utf-8'
  })));
});

router.post("/", function (req, res, next) {
  res.send(req.body);
});

module.exports = router;
