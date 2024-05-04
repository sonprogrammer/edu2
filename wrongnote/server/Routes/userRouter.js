const express = require('express');
const userController = require('../Controller/userController')
const userRouter = express.Router();

userRouter.post('/', userController.createUser)
userRouter.get('/', userController.getUser)

module.exports = userRouter;