const userModel = require('../db/models/userModel');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// passport LocalStrategy설정
// passport.use(new LocalStrategy)(
//     {userIdField: 'userId' },
//     async(userId, password, done) =>{
//         try {
//             const user = await userModel.findOne({ userId })
//             if(!user || !user.validPassword(password)){
//                 return done(null, false, { message : 'Invalid userId or password'})
//             }
//             return done(null, user)
//         } catch (error) {
//             return done(error)   
//         }
//     }
// )

// passport.serializeUser((user, done)=>{
//     done(null, user._id)
// })

// passport.deserializeUser(async (id, done) =>{
//     try {
//         const user = await userModel.findById(id)
//         done(null, user)
//     } catch (error) {
//         done(error)
//     }
// })


// 로그인 미들웨어
// const loginMiddleware = passport.authenticate('local', {
//     successRedirect: '/success', // 로그인 성공 시 이동할 경로
//     failureRedirect: '/failure', // 로그인 실패 시 이동할 경로
//     failureFlash: true, // 실패 플래시 메시지 표시 여부
//   });


async function loginUser(req, res){
    const { email, password } = req.body
    console.log('email', email)
    try {
        const user = await userModel.findOne({ email : user});
        console.log('user',user);
        if(!user || !user.validPassword(password)){
            return res.status(401).json({ message : 'Invalid password'})
        }
        return res.status(200).json({ message: 'login successful' })
    } catch (error) {
        console.error('errorhehe',error)
        return res.status(500).json({ message: 'internal'})
    }
}


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
    getUser,
    // loginMiddleware
    loginUser
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
