const jwt = require('jwt-simple');
const bearerToken = require('bearer-token');

const response = require("../config/response");

module.exports = function (req, res, next) {
    if (req.url.indexOf('/api/protected/') < 0) {
        next();
    } else {
        try {
            bearerToken(req, function (err, token) {
                
                if (err) {
                    response.fail(req, res, response.message.empty_header);
                    return;
                } else {
                    try {
                        const decoded = jwt.decode(token, process.env.BID_AUTH_SECRET);                       

                        if (decoded.exp <= Date.now() || !decoded.mobilenumber) {
                            response.fail(req, res, response.message.expired_token);
                            return;
                        }
                        req.mobilenumber = decoded.mobilenumber;
                        next();
                    } catch (err) {
                        
                        console.log('invalid_access_token');
                        
                        response.fail(req, res, response.message.invalid_access_token);
                        return;
                    }
                }
            });
        } catch (err) {
            console.log('empty_header');
            response.fail(req, res, response.message.empty_header);
            return;
        }
    }
};