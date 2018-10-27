var parser = require("body-parser");
var path = require("path");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, './app/public')));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.text());

require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

app.listen(PORT, function(){
    console.log("Listen on PORT: " + PORT)
});



