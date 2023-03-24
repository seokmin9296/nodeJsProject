const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://seokmin9296:GIqWucDbKqKzWSY3@boiler-plate.csit5bu.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB Conncected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})