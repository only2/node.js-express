var express = require('express');
var router = express.Router();
var welcome = require('../controllers/welcome');
/* GET home page. */
router.get('/', welcome.index);
router.get('/reg',welcome.reg);

router.get('/login1',welcome.login1);
module.exports = router;
