const express = require('express');
const userController = require('../Controller/userController')

const userRouter = express.Router();

userRouter.post('/signup', userController.createUser)
userRouter.post('/login', userController.loginUser)
userRouter.get('/', userController.getUser)

module.exports = userRouter;