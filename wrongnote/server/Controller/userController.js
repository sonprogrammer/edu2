const userModel = require('../db/models/userModel');

async function createUser(req, res, next){
    try {
        const createdUser = await userModel.create(req.body)
        res.status(201).json(createdUser)
    } catch (error) {
        next(error)
    }
}

async function getUser(req, res, next){
    try {
        const users = await userModel.find()
        res.status(200).json(users)
    } catch (error) {
        next('error',error)
    }
}


module.exports = {
    createUser,
    getUser
}
    // const createUser = function(req, res){
    //     let userId = req.body.userId;
    //     let userPassword = req.body.userPassword;
    //     User.create({
    //         userId: userId,
    //         userPassword: userPassword
    //     }, function(err, user){
    //         if(err){
    //             console.log('error creating user : ', err)
    //             res.status(400).json(err)
    //         }else{
    //             console.log('success creating user : ', user)
    //             res.status(200).json(user)
    //         }
    //     })
    // }
