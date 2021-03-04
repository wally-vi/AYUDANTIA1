const express = require('express');
const router = express.Router();
const {outcontroler} = require ('../controlers/userout');
router.post('/user',outcontroler);
module.exports = router;