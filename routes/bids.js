const response = require('../config/response');
const Bids = require('../models/bids');

const bids = {
    bid: (req, res) => {

        Bids.bid((err, result) => {
            if (err) {
                response.fail(req, res, err)
            } else {
                response.success(
                    req,
                    res,
                    {
                        value: 2
                    },
                    'You have successfully bid'
                );
            }
        });
    },

    bulkBid: (req, res) => {

        Bids.bulkBid((err, result) => {
            if (err) {
                response.fail(req, res, err);
            } else {
                response.success(
                    req,
                    res,
                    [
                        { value: 2 },
                        { value: 34 },
                        { value: 987 }
                    ],
                    'You have successfully bid the bulk'
                );
            }
        });
    },

    getUserBids: (req, res) => {

        Bids.getUserBids((err, result) => {
            if (err) {
                response.fail(req, res, err);
            } else {
                response.success(
                    req,
                    res,
                    [
                        { id: 1, value: 2, created_at: '2018-05-13 23:12' },
                        { id: 2, value: 34, created_at: '2018-05-14 13:12' },
                        { id: 3, value: 987, created_at: '2018-05-25 03:12' }
                    ],
                    'User Bids'
                );
            }
        });
    }
}

module.exports = bids;