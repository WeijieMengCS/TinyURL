// design table
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    shortUrl: String,
    longUrl: String,

});

const urlmodel = mongoose.model('UrlModel', UrlSchema);

module.exports = urlmodel;
