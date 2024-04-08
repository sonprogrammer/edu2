const { MongoClient } = require("mongodb")

const url = 'mongodb+srv://ods04139:cVCzld1lb8HhdUVO@cluster0.lyyr1v9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
let connectDB = new MongoClient(url).connect()


module.exports = connectDB