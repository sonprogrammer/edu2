const express = require('express');
const app = express();

app.listen(8080, ()=>{
    console.log('sever is runnding')
})

app.get('/', (req,res) =>{
    res.send('hello')
    // res.sendFile(__dirname + '/index.html')
})

app.get('/news', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/about', (req,res) =>{
    res.sendFile(__dirname + '/about.html')
})

