const problemModel = require("../db/models/problemModel");

async function createProblem(req, res, next) {
    try {
        const createdProblem = await problemModel.create(req.body)
        res.status(200).json(createdProblem)
    } catch (error) {
        next(error);
    }
}

async function getProblem(req, res, next) {
    try {
        const Problem = await problemModel.find()
        res.status(200).json(Problem)
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createProblem,
    getProblem
}