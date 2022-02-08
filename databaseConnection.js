const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "u6354r3es4optspf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "fz2s6o13usj3v61a",
	password: "j3usf0zfbgxmikpo",
	database: "xk5ybhse2dt2qvk1",
	multipleStatements: false,
	reconnect: true
};

const dbConfigLocal = {
	host: "u6354r3es4optspf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "fz2s6o13usj3v61a",
	password: "j3usf0zfbgxmikpo",
	database: "xk5ybhse2dt2qvk1",
	multipleStatements: false,
	reconnect: true
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
