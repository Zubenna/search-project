const express = require('express');
const router = express.Router();
const apiControllers = require('../controllers/apiControllers');

router.get('/searchUser/:dename', apiControllers.searchName)

module.exports = router;