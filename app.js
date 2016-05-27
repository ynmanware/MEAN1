var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser");


var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}))

var bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api', bookRouter);

app.get('/', function(req, res) {
	res.send('Welcome to Book API!!!!!!!!!!!!!');
});

app.listen(port, function() {
	console.log("Running on port " + port);
})