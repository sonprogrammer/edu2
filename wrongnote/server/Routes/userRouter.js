const express = require('express');
const userController = require('../Controller/userController')
const userModel = require('../db/models/userModel');
const router = express.Router()
const bcrypt = require('bcrypt');

const search = require('../utils/search')


const mongoose = require('mongoose');
const passport = require('passport')
const session = require('express-session')
const { Strategy : LocalStrategy} = require('passport-local')
const MongoStore = require('connect-mongo');
const { UserSearch } = require('../utils/search');

// router.use(passport.initialize()) //passport를 사용한다고 express에 알림
// router.use(session({
//     secret: 'son',
//     resave: false, //유저가 서버로 요청할 때마다 세션 갱신할건지 여부
//     saveUninitialized: false, //로그인 안해도 세션 만들것인지
//     cookie: {
//         maxAge: 60 * 60 * 1000
//     },
//     store: MongoStore.create({ //세션데이터를 디비에 저장
//         mongoUrl: 'mongodb+srv://ods04139:N8cxD39GfjQIVG82@cluster0.4rfishh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', //db접속용 url
//         dbName: 'test' //db이름
//     })
// }))
// router.use(passport.session()) //session을 이용하여 passport를 동작한다



//* 로그인 -> 디비에 있는 정보와 사용자가 입력한 정보랑 일치하는지 확인 
passport.use(new LocalStrategy({
    usernameField : 'userId',
    passwordField : 'userPassword',
    session: true
}, async (userId, userPassword, cb) =>{
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
        }
        return cb(null, false, { message : 'Password mismatch' })
    } catch (error) {
        console.error(error)
        return cb(error)
    }
}))


//* 로그인시 세션만들기
passport.serializeUser((user, done) => {
    console.log('userSession', user)
    process.nextTick(() => {
        done(null, user.id)
    })
})

//* 쿠키 까보는 역할 -> 사용자의 세션 정보를 검색해 사용자 객체로 변환하는 역할 -> 어디서든 req.user하면 유저 정보가 뜬다
passport.deserializeUser(async (id, done) => {
    // console.log('userId', userId)
    // process.nextTick(() => {
    //     done(null, user)
    // })
    try {
        const user = await userModel.findOne({where: {id}})
        console.log('Deserialized user', user)
        if (!user) {
            return done(null, false, { message: 'user not found' })
        }
        return done(null, user)
    } catch (error) {
        done(error)
    }
})


// * 로그인 api
router.post('/login', (req, res, next) =>{
    passport.authenticate('local', (err, user, info) =>{
        console.log('err, user, info',err, user, info)
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
            return res.status(200).json(user)
        })
    })(req, res, next)
})


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


// router.post('/login', passport.authenticate('local', 
// { successRedirect : '/browse', failureRedirect: '/', failureFlash: true}))