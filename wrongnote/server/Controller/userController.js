const userModel = require('../db/models/userModel');

// async function createUser(req, res, next){
//     try {
//         const createdUser = await userModel.create(req.body)
//         res.status(201).json(createdUser)
//     } catch (error) {
//         next(error)
//     }
// }

const createUser = function(req, res){
    let userId = req.body.userId;
    let userPassword = req.body.userPassword;
    User.create({
        userId: userId,
        userPassword: userPassword
    }, function(err, user){
        if(err){
            console.log('error creating user : ', err)
            res.status(400).json(err)
        }else{
            console.log('success creating user : ', user)
            res.status(200).json(user)
        }
    })
}


async function getUser(req, res, next){
    try {
        const getUser = await userModel.find(req.body)
        res.status(200).json(getUser)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUser,
    getUser
}