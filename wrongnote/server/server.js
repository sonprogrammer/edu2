const express = require('express')
const userRouter = require('./Routes/userRouter')
const { default: mongoose } = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://ods04139:N8cxD39GfjQIVG82@cluster0.4rfishh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('mongodb connect success'))
.catch(err => console.log('mongodb connect error'))

app.get('/', (req, res) =>{
    res.send('Welcome')
})

app.use('/signup', userRouter)
app.use(express.json());

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})