const mongoose = require('mongoose')

const schema = mongoose.Schema
const userSchema = new Schema({
    username: String,
    password: String,
    usertype: String
})

module.exports = mongoose.model('user', userSchema, 'users')