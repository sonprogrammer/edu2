const problemModel = require("../db/models/problemModel");

async function createProblem(req, res, next) {
    const { problem, answer, description, currentUser } = req.body
    try {
        const userId = currentUser

        const newProblem = new problemModel({
            problem,
            answer,
            description,
            user: userId
        })
        const savedProblem = await newProblem.save()
        // const createdProblem = await problemModel.create(req.body)
        res.status(200).json(savedProblem)
    } catch (error) {
        console.error('failed to save problem', error)
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