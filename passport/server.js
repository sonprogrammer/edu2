const express = require('express')
const app = express()


//passport 라이브러리 기본 세팅
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

app.use(passport.initialize())
app.use(session({
    secret: '암호화에 쓸 비번', //세션의 documentId는 암호화해서 유저에게 보냄
    resave: false,  //유저가 서버로 요청할 때마다 세션 갱신할건지 여부 보통은 false
    saveUninitialized: false //로그인 안해도 세션 만들것인지
}))
app.use(passport.session())



app.listen('3000',(req, res) =>{
    console.log('listening on 3000')
})