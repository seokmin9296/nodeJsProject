const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const { User } = require('./models/User');
const config = require('./config/key');

const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose.connect(config.mongoURI).then(() => console.log('MongoDB Conncected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save()
    .then(() => {
        return res.status(200).json({
            success: true
        })
    })
    .catch((err) => {
        return res.json({
            success: false,
            err
        })
    })
})










app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})