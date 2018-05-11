const response = require('../config/response');
const Profile = require('../models/profile');
const moment = require('moment');

const profile = {

    show: (req, res) => {
        Profile.getProfile((err, result) => {
            if (err) {
                response.fail(req, res, err)
            } else {
                response.success(req, res, result);
            }
        });
    },

    update: (req, res) => {
        Profile.update((err, result) => {
            if (err) {
                response.fail(req, res, err)
            } else {
                response.success(req, res, result, 'You have successfully updated the profile');
            }
        });
    },

    updatePassword: (req, res) => {
        Profile.updatePassword((err, result) => {
            if (err) {
                response.fail(req, res, err)
            } else {
                response.success(req, res, result, 'You have successfully updated the password');
            }
        });
    },

    deactivate: (req, res) => {
        Profile.deactivate((err, result) => {
            if (err) {
                response.fail(req, res, err)
            } else {
                response.success(req, res, result, 'You have successfully unsubscribe from the app');
            }
        });
    }
}
module.exports = profile;



