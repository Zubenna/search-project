const express = require('express');
const router = express.Router();
const apiControllers = require('../controllers/apiControllers');
const userControllers = require('../controllers/userControllers')


router.get('/searchUser/:dename', apiControllers.searchName)
router.post('/saveUser/', userControllers.createUser)
router.get('/getSavedUsers/', userControllers.getRecentUsers)


module.exports = router;