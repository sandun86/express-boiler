const db = require('../config/db');

const campaign = {
    getActiveCampaigns: (next) => {
        const query = "SELECT * FROM campaigns where deleted = 0";
        db.query(query, null, next);
    }
};

module.exports = campaign;