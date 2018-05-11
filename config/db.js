const mysql = require('mysql');

var db = {
	pool: mysql.createPool({
		connectionLimit: process.env.BID_DB_POOL_SIZE,
		host: process.env.BID_DB_HOST,
		user: process.env.BID_DB_USER,
		password: process.env.BID_DB_PASSWORD,
		database: process.env.BID_DB_DATABASE,
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