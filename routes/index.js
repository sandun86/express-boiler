const express = require('express');
const router = express.Router();

const sms = require('./sms');
const campaigns = require('./campaigns');
const webuser = require('./webuser');
const profile = require('./profile');
const bids = require('./bids');

router.post('/api/sms', sms.sendSms);
router.post('/api/user/register', webuser.register);
router.post('/api/user/login', webuser.login);
router.post('/api/user/send-otp', webuser.sendOtt);
router.post('/api/user/login/facebook', webuser.loginFacebook);
router.post('/api/user/login/google', webuser.loginGoogle);
router.post('/api/user/reset-password', webuser.resetPasswordRequest);
router.get('/api/user/reset-password', webuser.resetPassword);

router.get('/api/protected/profile/:profile_id', profile.show);
router.put('/api/protected/profile/:profile_id', profile.update);
router.post('/api/protected/profile/update-password', profile.updatePassword);
router.post('/api/protected/profile/deactivate', profile.deactivate);

router.post('/api/protected/bids/bid', bids.bid);
router.post('/api/protected/bids/bulk-bid', bids.bulkBid);
router.post('/api/protected/bids/user-bids', bids.getUserBids);



module.exports = router;