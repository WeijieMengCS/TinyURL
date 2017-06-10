var express = require('express');
var router = express.Router();
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlService = require('../services/urlService');
///api/v1
router.post("/urls", jsonParser, function(req, res) {
  var longUrl = req.body.longUrl;

  var shortUrl = urlService.getShortUrl(longUrl, function(url) {
    res.json(url);
  });
});

router.get("/urls/:shortUrl", function(req, res) {
  var shortUrl = req.params.shortUrl;

  var longUrl = urlService.getLongUrl(shortUrl, function(url) {
    res.sendStatus(200);
  });
});
module.exports = router; //return to outside