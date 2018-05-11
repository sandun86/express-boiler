const db = require('../config/db');

const register = {
    registerUser: (next, data) => {
        const query = "INSERT INTO web_users set ? ";
        db.query(query, data, next);
    },

    loginUser: (next) => {
        const query = "SELECT id, mobilenumber, created_at FROM web_users WHERE id = 2";
        db.query(query, null, next);
    },

    sendOtt: (next) => {
        next();
    },

    loginFacebook: (next) => {
        next();
    },

    loginGoogle: (next) => {
        next();
    },

    resetPasswordRequest: (next) => {
        next();
    },

    resetPassword: (next) => {
        next();
    }
};

module.exports = register;

