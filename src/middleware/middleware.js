const jwt = require('jsonwebtoken');

exports.getRequest = function(req, _, next) {
	const _header = (req.headers['token']) ? req.headers['token'] : null;
	const method = req.method;

	let parameters = {
		body: req.body,
		query: req.query,
		urlParams: req.params,
		externalIp: req.ip,
		authToken: _header
	};

  console.log('info',`Method: ${method} - Request: ${req.originalUrl} - Header: ${_header} - Parameters: ${JSON.stringify(parameters)}`);

	next();
}
