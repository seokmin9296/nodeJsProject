const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        typeof: String,
        maxlength: 50
    },
    email: {
        typeof: String,
        trim: true,
        unique: 1
    },
    password: {
        typeof: String,
        maxlength: 50
    },
    lastname: {
        typeof: String,
        maxlength: 50
    },
    role: {
        typeof: Number,
        default: 0
    },
    image: String,
    token: {
        typeof: String
    },
    tokenExp: {
        typeof: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }