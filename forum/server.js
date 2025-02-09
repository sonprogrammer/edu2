const express = require('express');
const app = express();



const {
    MongoClient,
    ObjectId
} = require('mongodb')
const methodOverride = require('method-override')
const bcrypt = require('bcrypt')
require('dotenv').config

let connectDB = require('./database')

let db;
connectDB.then((client) => {
    console.log('db connection successful')
    db = client.db('forum')
    app.listen(8080, () => {
        console.log('sever is runnding')
    })
}).catch((err) => {
    console.error(err)
})

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(methodOverride('_method'))

const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const MongoStore = require('connect-mongo'); //세션데이터를 디비에 저장하기위한 라이브러리

app.use(passport.initialize())
app.use(session({
    secret: '암호화에 쓸 비번', //세션의 documentId는 암호화해서 유저에게 보냄
    resave: false,  //유저가 서버로 요청할 때마다 세션 갱신할건지 여부 보통은 false
    saveUninitialized: false, //로그인 안해도 세션 만들것인지
    cookie: {
        maxAge: 60 * 60 * 1000
    },
    store: MongoStore.create({ //세션데이터를 디비에 저장
        mongoUrl: 'mongodb+srv://ods04139:cVCzld1lb8HhdUVO@cluster0.lyyr1v9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', //db접속용 url
        dbName: 'forum' //db이름
    })
}))

app.use(passport.session())





app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/news', (req, res) => {
    db.collection('post').insertOne({
        title: 'hi'
    })
    res.sendFile(__dirname + '/index.html')
})

app.get('/list', async (req, res) => {
    let result = await db.collection('post').find().toArray()
    // console.log(result)
    res.render('list.ejs', {
        posts: result
    })
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
})
app.get('/time', (req, res) => {
    res.render('time.ejs', {
        date: new Date()
    })
})

app.get('/write', (req, res) => {
    res.render('write.ejs')
})

app.post('/write', async (req, res) => {

    try {
        if (req.body.title == '') {
            res.send('there is no title')
        } else {
            await db.collection('post').insertOne({
                title: req.body.title,
                content: req.body.content
            })
            res.redirect('/list')

        }
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.get('/detail/:id', async (req, res) => {
    try {
        const result = await db.collection('post').findOne({
            _id: new ObjectId(req.params.id)
        })
        res.render('detail.ejs', {
            result: result
        })
        if (result === null) {
            res.status(404).send('there is no this url')
        }
    } catch (error) {
        console.log(error.message)
        res.status(400).send('there is no this url')
    }
})

app.get('/edit/:id', async (req, res) => {

    // db.collection('post').updateOne({})

    const result = await db.collection('post').findOne({
        _id: new ObjectId(req.params.id)
    });
    res.render('edit.ejs', {
        result: result
    })
})


app.post('/edit/:id', async (req, res) => {
    try {
        await db.collection('post').updateOne({
            _id: new ObjectId(req.params.id)
        }, {
            $set: {
                title: req.body.title,
                content: req.body.content
            }
        })
        res.redirect('/list')

    } catch (error) {
        console.log(error.message)
    }
})


app.post('/abc', async (req, res) => {
    console.log('hi')
    console.log(req.body)
})

app.delete('/delete', async (req, res) => {
    console.log(req.query)
    await db.collection('post').deleteOne({
        _id: new ObjectId(req.query.docid)
    })
    res.send('success')
})


app.get('/list/next/:id', async (req, res) => {
    let result = await db.collection('post')
        .find({
            _id: {
                $gt: new ObjectId(req.params.id)
            }
        })
        .limit(5).toArray()
    res.render('list.ejs', {
        posts: result
    })
})
app.get('/list/:id', async (req, res) => {
    let result = await db.collection('post').find().skip((req.params.id - 1) * 5).limit(5).toArray()
    res.render('list.ejs', {
        posts: result
    })
})


//passport.authenticate('local')() 쓰면 아래 코드가 실행됨 
passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
    let result = await db.collection('user').findOne({
        username: 입력한아이디
    })
    if (!result) {
        return cb(null, false, {
            message: 'No such user'
        })
    }
    // if(result.password == 입력한비번){
    //     return cb(null, result)
    // }else{
    //     return cb(null, false, {message: 'Invalid password'})
    // }
    //위 코드를 trycatch로 묶어도됨 위는 전체다 try안에다 집어넣으면됨

    let check = await bcrypt.compare(입력한비번, result.password) //해쉬된 비번과 유저가 입력한 비번이랑 비교해줌
    //password는 사용자가 입력한 비번, result.password는 디비에 저장되어있는 해쉬된 비번
    if (check) {
        return cb(null, result)
    } else {
        return cb(null, false, {
            message: 'password mismatch'
        })
    }
}))

//로그인시 세션만들기
passport.serializeUser((user, done) => { 
    console.log(user)//user는 로그인중인 유저 정보이다
    process.nextTick(() => {    //내부 코드를 비동기적으로 처리해줌(process.nextTick())
        done(null, { //이안에는 세션document에 기록할 내용이다 -> req.logIn()을 사용하면 자동 실행됨
            id: user._id,
            username: user.username 
            //id, username과 같이 이 안에 기록된 세션 document만들어주고 쿠키도 알아서 보내줌, 
            //세션유효기간도 알아서 보내줌 BUT 아무설정안해주면 유효기간이 기본 2주이다.(그걸 설정해주고 싶으면 
            //상단 app.use(session({ 이 부분에 cookie: {maxAge : 60 * 60 * 1000}처럼 밀리세컨단위로 정할 수 있음
        })
    })
})

//유저가 보낸 쿠키 분석 , 쿠키는 서버로 요청을 보낼때마다 서버로 자동으로 전송된다
//세션정보 적힌 쿠키가지고 있는 유저가 요청날릴 때마다 실행됨 -> 비효율적임(쓸때없는 디비조회가 반복됨)
passport.deserializeUser(async (user, done) => { //쿠키까보는 역할을 하는 코드
    let result = await db.collection('user').findOne({
        _id: new ObjectId(user.id)
    })
    delete result.password
    console.log(user)
    process.nextTick(() => {
        done(null, result) //여기 result가 req.user에 들어감
        //쿠키가 이상없으면 현재 로그인된 유저정보를 알려줌
    })
})
//passport.deserializeUser()를 설정해놓으면 아무 api에서나 req.user코드 쓰면 현재 로그인된 유저 정보 알려줌

app.get('/login', async (req, res) => {
    console.log(req.user)
    res.render('login.ejs')
})

app.post('/login', async (req, res, next) => {
    passport.authenticate('local', (error, user, info) => {
        //에러시 error이게 들어오고 성공하면 user(로그인한 유저정보), 로그인 실패시 이유(info) 
        console.log(user)
        if (error) return res.status(500).json(error)
        if (!user) return res.status(401).json(info.message)
        req.logIn(user, (err) => { //req.logIn을 하면 세션만들기 시작됨
            if (err) return next(err)
            res.redirect('/') //로그인 완료시
        })
    })(req, res, next)
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
    console.log('req.user', req.user)
})

app.post('/register', async (req, res) => {
    let password = await bcrypt.hash(req.body.password, 10)
    console.log(password)
    await db.collection('user').insertOne({
        username: req.body.username,
        password: password
    })
    res.redirect('/')
})

app.use('/shop', require('./routes/shop'))

app.get('/search', async (req, res) => {

    let 검색조건 = [{
        $search: {
            index: 'title_index',
            text: {
                query: 'req.query.val',
                path: 'title'
            }
        }
    }]

    let result = await db.collection('post').aggregate([]).toArray()
    res.render('search.ejs', {
        posts: result
    })
})

app.get('/chat/request', async (req,res) =>{
    console.log(req.user._id)
    // await db.collection('chatroom').insertOne({
    //     member: [req.user._id , req.query.writerId]
    // })
    req.query.writerId
})