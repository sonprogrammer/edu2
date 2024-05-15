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

async function getUserProblems(req, res, next) {
    try {
        console.log('getUserProblems', req.params, req.params.userId)
        const userId = req.params.userId
        const userProblems = await problemModel.find({user: userId})
        res.status(200).json(userProblems)
    } catch (error) {
        next(error)
        console.error('failed to fetch user problems', error)
        res.status(500).json({message : 'failed to fetch user problems'})
    }
}


async function updateProblem(req, res, next) {
    try {
        const { id } = req.params
        const { _id, problem, answer, description } = req.body
        console.log('req.body', req.body)


        const updateProblem = await problemModel.findByIdAndUpdate(_id, {
            problem,
            answer,
            description
        }, { new : true})

        if(!updateProblem){
            return res.status(404).json({error : 'Problem not found'})
        }
        
        res.status(200).json(updateProblem)
        console.log('update successful')
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createProblem,
    getProblem,
    getUserProblems,
    updateProblem
}