const express = require('express');
const userController = require('../Controller/userController')
const userModel = require('../db/models/userModel');
const router = express.Router()
const bcrypt = require('bcrypt');



const passport = require('passport')
const session = require('express-session')
const { Strategy : LocalStrategy} = require('passport-local')
const MongoStore = require('connect-mongo')

router.use(passport.initialize()) //passport를 사용한다고 express에 알림
router.use(session({
    secret: 'son',
    resave: false, //유저가 서버로 요청할 때마다 세션 갱신할건지 여부
    saveUninitialized: false, //로그인 안해도 세션 만들것인지
    cookie: {
        maxAge: 60 * 60 * 1000
    },
    store: MongoStore.create({ //세션데이터를 디비에 저장
        mongoUrl: 'mongodb+srv://ods04139:N8cxD39GfjQIVG82@cluster0.4rfishh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', //db접속용 url
        dbName: 'test' //db이름
    })
}))
router.use(passport.session()) //session을 이용하여 passport를 동작한다



// 로그인 -> 디비에 있는 정보와 사용자가 입력한 정보랑 일치하는지 확인 
passport.use(new LocalStrategy({
    usernameField : 'userId',
    passwordField : 'userPassword',
    session: true
}, async (userId, userPassword, cb) =>{
    console.log('userid :', userId);
    console.log('userPassword :', userPassword);
    try {
        const user = await userModel.findOne({userId : userId})
        console.log('user',user)
        if(!user){
            return cb(null, false, { message: 'User not founddd'})
        }
        if (user.userPassword == userPassword) {
                    return cb(null, user)
                } else {
                    return cb(null, false, {
                        message: 'invalid password'
                    })
                }
        // const result = await bcrypt.compare(userPassword, user.userPassword)
        // if(result){
        //     return done(null, user)
        // }
        // return done(null, false, { message : 'Password mismatch' })
    } catch (error) {
        console.error(error)
        return done(error)
    }
}))



// passport.use(new LocalStrategy(async (userId, userPassword, cb) => {
//     console.log('uerid' , req.body)
//     let result = await userModel.findOne({
//         userId: userId
//     })
//     if (!result) {
//         return cb(null, false, {
//             message: 'no such user'
//         })
//     }
//     if (result.userPassword == userPassword) {
//         return cb(null, result)
//     } else {
//         return cb(null, false, {
//             message: 'invalid password'
//         })
//     }
    // let check = await bcrypt.compare(userPassword, result.userPassword)
    // if(check){
    //     return cb(null, result)
    // }else{
    //     return cb(null, false,{
    //         message: 'password mismatch'
    //     })
    // }
// }))

// 로그인시 세션만들기
passport.serializeUser((user, done) => {
    
    console.log('user', user._id)
    process.nextTick(() => {
        done(null, user._id)
    })
    // local()
})

// 쿠키 까보는 역할
passport.deserializeUser(async (id, done) => {
    // let result = await userModel.findOne({
    //     _id: new ObjectId(user.id)
    // })
    // delete result.userPassword
    // console.log('user1', user)
    // process.nextTick(() => {
    //     done(null, result)
    // })
    try {
        const user = await userModel.findById(id)
        console.log('user._id', user)
        if (!user) {
            return done(null, false, { message: 'user not found' })
        }
        done(null, user)
    } catch (error) {
        done(error)
    }
})

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
        return req.logIn(user, async(loinerr)=>{
            if(loinerr){
                console.error(loinerr)
                return next(loinerr)
            }
            return res.status(200).json(user)
        })
    }) (req, res, next)
})


// router.post('/login', async (req, res, next) => {
//     console.log(req.body)
//     passport.authenticate('local', (error, user, info) => {
//         console.log(user) //성공적으로 인증된 사용자 객체. 실패하면 false가 출력된다
//         if (error) return res.status(500).json(error)
//         if (!user) return res.status(401).json(info.message)
//         req.logIn(user, (err) => {
//             if (err) return next(err)
//             res.redirect('/browse')
//         })
//     })(req, res, next)
// })

// 로그아웃 api
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

router.post("/signup", userController.createUser)
router.get('/', userController.getUser)



module.exports = router;


// router.post('/login', passport.authenticate('local', 
// { successRedirect : '/browse', failureRedirect: '/', failureFlash: true}))