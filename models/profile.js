const db = require('../config/db');

const profile = {
    getProfile: (next, data) => {
        const query = "SELECT id, mobilenumber, created_at FROM web_users WHERE id = 2";
        db.query(query, data, next);
    },

    update: (next, data) => {
        const query = "SELECT id, mobilenumber, created_at FROM web_users WHERE id = 2";
        db.query(query, data, next);
    },

    updatePassword: (next, data) => {
        next();
    },

    deactivate: (next, data) => {
        next();
    }
};

module.exports = profile;

