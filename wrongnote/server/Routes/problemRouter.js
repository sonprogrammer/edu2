const express = require('express');
const problemController = require('../Controller/problemController')
const problemRouter = express.Router();

problemRouter.post('/add', problemController.createProblem)
problemRouter.get('/', problemController.getProblem)
problemRouter.get('/user/:userId', problemController.getUserProblems)



module.exports = problemRouter;