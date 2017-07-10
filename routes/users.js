var express = require('express');
var router = express.Router();
var user = require('../controllers/user');
/* GET users listing. */
router.post('/reg', user.reg);
router.post('/login',user.login);
router.get('/list',user.list);
router.get('/detailjd',user.detailjd);
router.post('/pinglun',user.pinglun);
router.get('/menpiao',user.menpiao);
router.get('/dingpiao',user.dingpiao);
module.exports = router;
