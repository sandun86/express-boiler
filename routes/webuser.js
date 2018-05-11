const response = require('../config/response');
const WebUser = require('../models/webuser');
const moment = require('moment');
const jwt = require('jwt-simple');

const webuser = {

    register: (req, res) => {
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {

            name: input.name,
            mobilenumber: input.mobilenumber,
            password: input.password,
            created_at: moment().format()
        };
        WebUser.registerUser((err, user) => {
            if (err) {
                response.fail(req, res, err)
            } else {
                response.success(req, res, user);
            }
        }, data);
    },

    login: (req, res) => {
        WebUser.loginUser((err, user) => {
            if (err) {
                response.fail(req, res, response.message.db_error)
            } else {

                const date_objt = new Date();
                date_objt.setDate(date_objt.getDate() + 1);

                const token = jwt.encode({
                    exp: date_objt,
                    mobilenumber: user[0].mobilenumber
                }, process.env.BID_AUTH_SECRET);

                user[0].token = token;

                response.success(req, res, user[0], 'Login success 33');
            }
        })
    },

    sendOtt: (req, res) => {
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            mobilenumber: input.mobilenumber,
        };
        WebUser.sendOtt((err, user) => {
            if (err) {
                response.fail(req, res, err)
            } else {
                response.success(req, res, { 'token': '@39042r9203ljlkalk$8984' }, 'SMS has send successfully');
            }
        });
    },

    loginFacebook: (req, res) => {
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            fb_id: input.fb_id,
        };
        WebUser.loginFacebook((err, user) => {
            if (err) {
                response.fail(req, res, err)
            } else {
                response.success(
                    req,
                    res,
                    {
                        'token': '@39042r9203ljlkalk$8984',
                        'user_id': 3,
                        'fb_id': 'kjalkjasglkjoqeoriqori'
                    },
                    'You have logged successfully'
                );
            }
        });
    },

    loginGoogle: (req, res) => {
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            fb_id: input.fb_id,
        };
        WebUser.loginGoogle((err, user) => {
            if (err) {
                response.fail(req, res, err)
            } else {
                response.success(
                    req,
                    res,
                    {
                        'token': '@39042r9203ljlkalk$8984',
                        'user_id': 3,
                        'gplus_id': 'kjalkjasglkjoqeoriqori'
                    },
                    'You have logged successfully'
                );
            }
        });
    },

    resetPasswordRequest: (req, res) => {
        WebUser.resetPasswordRequest((err, user) => {
            if (err) {
                response.fail(req, res, err)
            } else {
                response.success(
                    req,
                    res,
                    user,
                    'Please check your email to reset your password'
                );
            }
        });
    },

    resetPassword: (req, res) => {
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
            email: input.email,
        };
        WebUser.resetPassword((err, user) => {
            if (err) {
                response.fail(req, res, err)
            } else {
                response.success(
                    req,
                    res,
                    user,
                    'You have updated password successfully.'
                );
            }
        });
    },

}
module.exports = webuser;



