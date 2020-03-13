const express = require("express");
const router = express.Router();
const fs = require('fs');
const position = 1;
const file_path = 'db.json';
const axios = require('axios');

router.get("/", function (req, res, next) {
res.type("json");
  JSON.stringify(
    res.json(
      fs.readFileSync(file_path, {
        encoding: "utf-8"
      })
    )
  );
});

router.post("/", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");

fs.readFile(file_path, function read(err, data) {
  if (err) {
    throw err;
  }
  let file_content = data.toString();
  file_content = file_content.substring(position);
  const file = fs.openSync(file_path, "r+");
  const bufferedText = new Buffer(`"${req.body.message}", ` + file_content);
  fs.writeSync(file, bufferedText, 0, bufferedText.length, position);
});
  res.send(req.body);
});

module.exports = router;
