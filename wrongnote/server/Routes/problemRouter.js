const express = require('express');
const problemController = require('../Controller/problemController')
const problemRouter = express.Router();

problemRouter.post('/add', problemController.createProblem)
problemRouter.get('/', problemController.getProblem)
problemRouter.get('/user/:userId', problemController.getUserProblems)
problemRouter.put('/update', problemController.updateProblem)
problemRouter.delete('/delete', problemController.deleteProblem)



module.exports = problemRouter;