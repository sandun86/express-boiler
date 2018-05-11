const db = require('../config/db');

const bids = {

    bid: (next, data) => {
        next();
    },

    bulkBid: (next, data) => {
        next();
    },

    getUserBids: (next, data) => {
        next();
    }
};

module.exports = bids;

