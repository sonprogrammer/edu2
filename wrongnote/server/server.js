const express = require('express')
const cors = require('cors')


const userRouter = require('./Routes/userRouter')
const problemRouter = require('./Routes/problemRouter')
const { mongoose } = require('mongoose')
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()


mongoose.connect('mongodb+srv://ods04139:N8cxD39GfjQIVG82@cluster0.4rfishh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('mongodb connect success'))
.catch(err => console.log('mongodb connect error'))


app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: false, //유저가 서버로 요청할 때마다 세션 갱신할건지 여부
    saveUninitialized: false, //로그인 안해도 세션 만들것인지
    cookie: {
        maxAge: 60 * 60 * 1000,
        secure: false,
    },
    store: MongoStore.create({ //세션데이터를 디비에 저장
        mongoUrl: 'mongodb+srv://ods04139:N8cxD39GfjQIVG82@cluster0.4rfishh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', //db접속용 url
        dbName: 'test' //db이름
    })
}))
const passport = require('passport')
app.use(passport.initialize()) //passport를 사용한다고 express에 알림
app.use(passport.session()) //session을 이용하여 passport를 동작한다



app.get('/', (req, res) =>{
    res.send('Welcomedfd')
})


app.use("/api/account", userRouter)
// app.use("/login", userRouter)
app.use("/api/problem", problemRouter)


app.listen(3000, ()=>{
    console.log('listening on port 3000')
})