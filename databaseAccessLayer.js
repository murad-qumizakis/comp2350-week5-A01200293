const database = include('/databaseConnection');


function getAllUsers(callback) {
	let sqlQuery = "SELECT web_user_id, first_name, last_name, email FROM xk5ybhse2dt2qvk1.web_user";
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


module.exports = { getAllUsers }
