const express = require('express');
const userController = require('../Controller/userController')

const router = express.Router()


const passport = require('passport')
const session = require('express-session')
const LocalStrategy = require('passport-local')
const MongoStore = require('connect-mongo')

router.use(passport.initialize()) //passport를 사용한다고 express에 알림
router.use(session({
    secret: 'son',
    resave: false, //유저가 서버로 요청할 때마다 세션 갱신할건지 여부
    saveUninitialized: false, //로그인 안해도 세션 만들것인지
    cookie: {
        maxAge: 60 * 60 * 1000
    }
}))
router.use(passport.session()) //session을 이용하여 passport를 동작한다



// 로그인 -> 디비에 있는 정보와 사용자가 입력한 정보랑 일치하는지 확인 
passport.use(new LocalStrategy(async (userId , userPassword, cb) =>{
    let result = await db.collection('user').findOne({
        userId : userId
    })
    if(!result){
        return cb(null, false,{
            message : 'no such user'
        })
    }
    if(result.userPassword == userPassword){
        return cb(null, result)
    }else{
        return cb(null, false, {message : 'invalid password'})
    }
    // let check = await bcrypt.compare(userPassword, result.userPassword)
    // if(check){
    //     return cb(null, result)
    // }else{
    //     return cb(null, false,{
    //         message: 'password mismatch'
    //     })
    // }
}))

// 로그인시 세션만들기
passport.serializeUser((user, done) =>{
    console.log('user',user)
    process.nextTick(()=>{
        done(null, {
            id : user._id,
            userId : user.userId
        })
    })
})

// 쿠키 까보는 역할
passport.deserializeUser(async (user, done)=>{
    let result = await db.collection('user').findOne({
        _id: new ObjectId(user.id)
    })
    delete result.userPassword
    console.log('user1', user)
    process.nextTick(() =>{
        done(null, result)
    })
})

router.post('/login', async(req, res, next) =>{
    passport.authenticate('local', (error, user, info) =>{
        console.log(user)
        if(error) return res.status(500).json(error)
        if(!user) return res.status(401).json(info.message)
        req.logIn(user, (err) => {
            if(err) return next(err)
            res.redirect('/browse')
        })
    })(req, res, next)
})


router.post("/", userController.createUser)
router.get('/', userController.getUser)






module.exports = router;