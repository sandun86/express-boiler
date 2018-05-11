const response = require ('../config/response');

const sms = {
    sendSms: (req, res) => {

        response.success(req, res, {data:'Hello'}, 'Successfully send sms');
    },
}

module.exports = sms;