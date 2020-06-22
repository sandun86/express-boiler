const mysql = require('mysql');

var db = {
	pool: mysql.createPool({
		connectionLimit: process.env.DB_POOL_SIZE,
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		debug: false
	}),
	query: function (qry, params, next) {
		qry = mysql.format(qry, params);
		db.pool.query(qry, function (err, rows) {
			next(err, rows);
		});
	}
}

module.exports = db;
