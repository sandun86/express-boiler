
const messages = {
	invalid_url: {
		status: 404,
		code: 9001,
		message: "Invalid API URL"
	},
	parameter_missing: {
		status: 400,
		code: 9002,
		message: "Mandatory Parameter Missing"
	},
	db_error: {
		status: 400,
		code: 9003,
		message: "Database Error"
	},
	
	
};

const success = function (req, res, data, friendly_message) {
	const resp = {
		"status": true,
		"code": 0,
		"message": "Success",
		"friendly_message": "Success",
		"data": data

	};

	if (friendly_message) {
		resp.friendly_message = friendly_message;
	}
	res.status(200);

    res.json(resp);
    return;
};

const fail = function (req, res, message, friendly_message, data) {
	const resp = {
		"status": false,
		"code": 202,
		"message": 'Error',
		"friendly_message": 'You have a error',
		"data": data || {}
	};

	if (friendly_message) {
		resp.friendly_message = friendly_message;
	}

	res.status(202);
	res.json(resp);
	return;
};

exports.success = success;
exports.fail = fail;
exports.message = messages;