const database = include('/databaseConnection');


function getAllTodos(callback) {
	let sqlQuery = "SELECT * FROM xmluo7zb2bdpkt72.todo";
	database.query(sqlQuery, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});
}


module.exports = {getAllTodos}
