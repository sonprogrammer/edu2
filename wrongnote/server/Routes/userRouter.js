const express = require('express');
const userController = require('../Controller/userController')

const router = express.Router()


router.post("/signup", userController.createUser)
router.post("/login", userController.loginUser)
router.get('/', userController.getUser)

module.exports = router;