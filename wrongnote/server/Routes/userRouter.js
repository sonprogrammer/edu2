const express = require('express');
const userController = require('../Controller/userController')
const userModel = require('../db/models/userModel');
const router = express.Router()
const bcrypt = require('bcrypt');

const search = require('../utils/search')


// const mongoose = require('mongoose');
const passport = require('passport')
// const session = require('express-session')
const LocalStrategy = require('passport-local')
// const MongoStore = require('connect-mongo');
const { UserSearch } = require('../utils/search');



//* 로그인 -> 디비에 있는 정보와 사용자가 입력한 정보랑 일치하는지 확인 
passport.use(new LocalStrategy(
    {
    usernameField : 'userId',
    passwordField : 'userPassword',
    // session: true
    }
    , 
    async (userId, userPassword, cb) =>{
    console.log('userid :', userId);
    console.log('userPassword :', userPassword);
    try {
        const user = await userModel.findOne({userId : userId})
        console.log('user1',user)
        if(!user){
            return cb(null, false, { message: 'User not founddd'})
        }
        const result = await bcrypt.compare(userPassword, user.userPassword)
        if(result){
            return cb(null, user)
        }else{
            return cb(null, false, { message : 'Password mismatch' })
        }
    } catch (error) {
        console.error(error)
        return cb(error)
        }
    }
))


//* 로그인시 세션만들기
passport.serializeUser((user, done) => {
    process.nextTick(() =>{
        console.log('serializeUser',user)
        done(null, user.id)
    })
})


//* 쿠키 까보는 역할 -> 사용자의 세션 정보를 검색해 사용자 객체로 변환하는 역할 -> 어디서든 req.user하면 유저 정보가 뜬다
passport.deserializeUser(async (id, done) => {
    try {
        const user = await userModel.findById(id)
        done(null, user)
    } catch (error) {
        done(error)
    }
    // process.nextTick(() =>{
    //     console.log('deserialize', user)
    //     done(null, user)
    // })
})

// * 로그인 api
router.post('/login', (req, res, next) =>{
    passport.authenticate('local', {session: false}, async (err, user, info) =>{
        console.log('err, user, info',err, user, info)
        console.log('req.userefdasfdsa', req.user)
        if(err){
            console.error(err)
            return next(err)
        }
        if(info){
            return res.status(401).send(info.message)
        }
         return req.logIn(user, async(loginerror)=>{
             // console.log('dsafsadf', user)
             if(loginerror){
                console.error(loginerror)
                return next(loginerror)
            }
            console.log('req.isAuthenticated', req.isAuthenticated())
            console.log('req.user', req.user)
            return res.status(200).json(user)
        })
    })(req, res, next)
})


// router.post('/login', passport.authenticate('local', {
//     successRedirect: '/browse',
//     failureRedirect: '/'
// }))


// * 아이디 중복확인 api
router.get('/check-email', async(req, res, next)=>{
    const {email} = req.query
    try {
        await search.EmailExist(email)
        res.status(200).json({message: 'can use email'})
    } catch (error) {
        next(error)
    }
})



//* 로그아웃 api
router.post('/logout', (req, res) => {
    //세션 삭제
    req.session.destroy((err)=>{
        if(err){
            console.error('error destroying session', err)
            res.status(500).send('Error logging out')
        }else{
            res.send('logout successful')
        }
    })
})

//* 회원가입 API
router.post("/signup", userController.createUser)

// *유저들의 정보
router.get('/', userController.getUser)

//*현재 로그인된 정보
router.get('/current-user', (req, res)=>{
    console.log('req.user', req.user)
    console.log('res.authentication', req.isAuthenticated())
    if(req.user){
        res.status(200).json(req.user)
    }else{
        res.status(404).json({message: 'no user logged in'})
    }
})



module.exports = router;

