//design table
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UrlSchema = new Schema({
  shortUrl: String,
  longUrl: String

});

const urlmodel = mongoose.model('UrlModel', UrlSchema);

module.exports = urlmodel;
