const response = require('../config/response');
const Campaign = require('../models/campaigns');

const campaign = {
    index: (req, res) => {
        Campaign.getActiveCampaigns((err, campaigns) => {
            if (err) {
                response.fail(req, res, response.message.db_error)
            } else {
                response.success(req, res, campaigns);
            }
        })
    }
}

module.exports = campaign;