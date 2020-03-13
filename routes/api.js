const express = require("express");
const router = express.Router();
const fs = require('fs');
const position = 1;
const file_path = 'db.json';
const axios = require('axios');
const url = 'http://automatic-octo-lamp.herokuapp.com/messages';

router.get("/", async (req, res, next) => {
  const messages = await axios.get(url);
  console.log(await messages);
  res.send(messages.data);
})

router.post("/", async (req, res, next) => {
  const messages = await axios.post(url, req.body);
  res.send(messages.data);
})

module.exports = router;
