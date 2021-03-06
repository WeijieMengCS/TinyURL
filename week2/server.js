var express = require('express'); //import package
var app = express();

var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect'); //require file
var indexRouter = require('./routes/index');

app.use("/public", express.static(__dirname + "/public"));
app.use("/api/v1", restRouter);
app.use("/:shortUrl", redirectRouter); //:shortUrl is a var
app.use("/", indexRouter);


app.listen(3000);
