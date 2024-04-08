const router = require('express').Router()

let connectDB = require('../database')

let db;
connectDB.then((client) => {
    console.log('db connection successful')
    db = client.db('forum')
}).catch((err) => {
    console.error(err)
})

router.get('/shirt', (req, res) => {
    res.send('shirt')
})
router.get('/pants', (req, res) => {
    res.send('pants')
})

module.exports = router