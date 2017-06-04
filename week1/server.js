var express = require('express');//import package
var app = express();

var restRouter= require('./routes/rest');
var redirectRouter= require('./routes/redirect');//require file

app.use("/api/v1",restRouter);
app.use("/:shortUrl",redirectRouter);//:shortUrl is a var



app.listen(3000);
