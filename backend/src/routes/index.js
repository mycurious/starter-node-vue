var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("respond with a sdsss");
});

module.exports = router;