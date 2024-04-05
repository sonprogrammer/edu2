const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


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
    console.log(result)
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



const {
    MongoClient
} = require('mongodb')

let db;
const url = 'mongodb+srv://ods04139:cVCzld1lb8HhdUVO@cluster0.lyyr1v9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
new MongoClient(url).connect().then((client) => {
    console.log('db connection successful')
    db = client.db('forum')
    app.listen(8080, () => {
        console.log('sever is runnding')
    })
}).catch((err) => {
    console.error(err)
})