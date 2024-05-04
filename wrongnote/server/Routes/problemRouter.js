const express = require('express');
const problemController = require('../Controller/problemController')
const problemRouter = express.Router();

problemRouter.post('/', problemController.createProblem)
problemRouter.get('/', problemController.getProblem)


module.exports = problemRouter;