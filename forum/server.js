const express = require('express');
const app = express();


const {
    MongoClient,
    ObjectId
} = require('mongodb')
const methodOverride = require('method-override')

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

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(methodOverride('_method'))





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


app.post('/abc', async(req, res) => {
    console.log('hi')
    console.log(req.body)
})

app.delete('/delete', async(req, res) => {
    console.log(req.query)
    await db.collection('post').deleteOne({_id: new ObjectId(req.query.docid)})
    res.send('success')
})


app.get('/list/next/:id', async (req, res) => {
    let result = await db.collection('post')
    .find({ _id : {$gt: new ObjectId(req.params.id)}})
    .limit(5).toArray()
    res.render('list.ejs', { 
        posts: result
    })
})
app.get('/list/:id', async (req, res) => {
    let result = await db.collection('post').find().skip((req.params.id-1) * 5).limit(5).toArray()
    res.render('list.ejs', {
        posts: result
    })
})
