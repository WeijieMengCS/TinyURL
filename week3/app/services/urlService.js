const UrlModel = require('../models/urlmodel');

let encode = [];

const genCharArray = function(charA, charB) {
    const arr = [];
    let i = charA.charCodeAt(0);
    const j = charB.charCodeAt(0);
    for (; i < j; i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
};
encode = encode.concat(genCharArray('A', 'Z'));
encode = encode.concat(genCharArray('a', 'z'));
encode = encode.concat(genCharArray('0', '9'));

const getShortUrl = function(longUrl, callback) {
    if (longUrl.indexOf('http') === -1) {
        longUrl = `http://${longUrl}`;
    }

    UrlModel.findOne({
        longUrl,
    }, (err, data) => {
        if (data) {
            callback(data);
        } else {
            // undefined
            console.log("not found in database");
            generateShortUrl((shortUrl) => {
                const url = new UrlModel({
                    shortUrl,
                    longUrl,
                });
                url.save();
                callback(url);
            });
        }
    });
};

var generateShortUrl = function(callback) {
    UrlModel.count({}, (err, num) => {
        console.log(num + "#####");
        callback(convertTo62(num));
        console.log("here===");
    });
};

var convertTo62 = function(num) {
    let result = '';
    do {
        result = encode[num % 62] + result;
        num = Math.floor(num / 62);
    } while (num);
    return result;
};
const getLongUrl = function(shortUrl, callback) {
    UrlModel.findOne({
        shortUrl,
    }, (err, data) => {
        callback(data);
    });
};

module.exports = {
    getShortUrl,
    getLongUrl,
}; // return object
