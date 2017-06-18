var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlService = require('../services/urlService');
///api/v1
router.post("/urls", jsonParser, function(req, res) {
    var longUrl = req.body.longUrl;

    var shortUrl = urlService.getShortUrl(longUrl, function(url) {
        res.json(url);
    });
});

router.get("/urls/:shortUrl", function getShortUrl(req, res) {
    var shortUrl = req.params.shortUrl;

    urlService.getLongUrl(shortUrl, function callback(url) {
        res.json({
            shortUrl: shortUrl,
            longUrl: url.longUrl
        });
    });
});
module.exports = router; // return to outside
