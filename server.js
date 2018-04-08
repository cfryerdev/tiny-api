// INIT
var express = require('express')
	, app = express()
    , bodyParser = require('body-parser')
    , db = require('./server_data');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
app.get('/', function (req, res) {
    res.send(db);
});

app.get('/:id', function (req, res) {
    var record = db.filter(function( obj ) {
        return obj.id == req.params.id;
    }); 
    res.send(record);
});

app.put('/', function (req, res) {
	req.header("Content-Type", "application/json");
	var record = req.body;
	db.push(record);
	res.send(record);
});

app.delete('/:id', function (req, res) {
    var record = db.filter(function( obj ) {
        return obj.id == req.params.id;
    });
	if (record)
	{
		var index = db.indexOf(record);
		db.splice(index, 1);
	}
    res.send("Delete successful."); 
});

app.get('*', function(req, res) {
    res.send('Method not found');
});

// SERVICE
var server = app.listen(3000, function () {
    console.log('Api:   http://localhost:3000/');
});