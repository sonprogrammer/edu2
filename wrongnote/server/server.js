const express = require('express')
const cors = require('cors')

const userRouter = require('./Routes/userRouter')
const problemRouter = require('./Routes/problemRouter')
const { default: mongoose } = require('mongoose')

const app = express()


mongoose.connect('mongodb+srv://ods04139:N8cxD39GfjQIVG82@cluster0.4rfishh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('mongodb connect success'))
.catch(err => console.log('mongodb connect error'))


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.send('Welcome')
})


app.use("/api/account", userRouter)
// app.use("/login", userRouter)
app.use("/api/problem", problemRouter)


app.listen(3000, ()=>{
    console.log('listening on port 3000')
})