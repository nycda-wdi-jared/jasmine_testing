var express = require("express");
var bodyParser = require("body-parser");
var pg = require('pg');
var messages = require('./tests/db/messages.js');

var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

var dbUrl = {
	user: 'jaredthomas',
	password: '',
	database: 'guestbook',
	host: 'localhost',
	port: 5432
};

var pgClient = new pg.Client(dbUrl);
pgClient.connect();

app.use(express.static("./public"));

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.get("/api/whatever", (req, res) => {
	pgClient.query('SELECT * FROM "Guestbooks"', (err, result) => {
		res.json(result.rows)
	})
});

app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
