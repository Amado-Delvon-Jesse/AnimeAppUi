const express = require("express")
const MongoClient = require("mongodb").MongoClient

const app = express()
const url = 'mongodb://localhost:27017'

app.use(express.json());
var database

app.get('/', (req, resp) => {
    resp.send('Welcome to AnimeDB')
})

app.get('/Anime', (req, resp) => {
    database.collection('Anime').find({}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)
    })
})

app.listen(8080, () => {
    MongoClient.connect(url, { useNewUrlParser: true}, (error, result) => {
        if(error) throw error
        database = result.db('AnimeDB')
        console.log('Connection Successful!');
    })
})