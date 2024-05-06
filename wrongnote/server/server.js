const express = require('express')
const passport = require('passport')
const session = require('express-session')
const userRouter = require('./Routes/userRouter')
const { default: mongoose } = require('mongoose')
const problemRouter = require('./Routes/problemRouter')

const app = express()

mongoose.connect('mongodb+srv://ods04139:N8cxD39GfjQIVG82@cluster0.4rfishh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('mongodb connect success'))
.catch(err => console.log('mongodb connect error'))


app.use(passport.initialize()) //passport를 사용한다고 express에 알림
// app.use(passport.session()) //session을 이용하여 passport를 동작한다

app.get('/', (req, res) =>{
    res.send('Welcome')
})

app.use(express.json());
app.use('/signup', userRouter)
app.use('/login', userRouter)
app.use('/problem', problemRouter)


// app.post('/login', passport.authenticate('local', { successRedirect : '/browse', failureRedirect: '/', failureFlash: true}))



app.listen(3000, ()=>{
    console.log('listening on port 3000')
})