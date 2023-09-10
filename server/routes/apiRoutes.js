const express = require('express');
const router = express.Router();
const apiControllers = require('../controllers/apiControllers');

router.get('/userGenome/:username', apiControllers.getUser);

module.exports = router;