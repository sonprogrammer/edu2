const userModel = require('../db/models/userModel');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');



// async function loginUser(req, res){
//     const { email, password } = req.body
//     console.log('email', email)
//     try {
//         const user = await userModel.findOne({ userId : email});
//         console.log('user',user);
//         if(!user || !user.validPassword(password)){
//             return res.status(401).json({ message : 'Invalid password11'})
//         }
//         return res.status(200).json({ message: 'login successful' })
//     } catch (error) {
//         console.error('errorhehe',error)
//         return res.status(500).json({ message: 'internal'})
//     }
// }



async function createUser(req, res, next){
    try {
        let hashedpPassword = await bcrypt.hash(req.body.userPassword, 10)
        console.log(hashedpPassword)
        const newUser = await userModel.create({
            userId : req.body.userId,
            userPassword : hashedpPassword
        })
        console.log('newUser',newUser)
        res.status(201).json(newUser)

    } catch (error) {
        next(error)
    }
}


//관리자만 접근가능
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
    getUser,
    // loginUser
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
