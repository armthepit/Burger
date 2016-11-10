/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'homework',
	password: 'homework',
	database: 'burgers_db'
});

connection.connect(function (error) {
	if (error) {
		console.error('error connecting: ' + error.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;