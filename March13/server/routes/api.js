const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router;
const User = require('../models/user')

const mongoose = require('mongoose')
const db = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2"
mongoose.connect(db, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('connected to MongoDB')
    }
})

const JWT_SECRET = "zkdjxchjk872y34iu238jdfli2908340913ondx7@2176u#tqgopi";

router.get('/', (req, res)=>{
    res.send('From API route')
})

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token==='null'){
        res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, JWT_SECRET)
    if(!payload){
        res.status(401).send('Unauthorized request')
    }
    req.userID = payload.subject
    next()
}

router.post('/login', (req, res)=>{
    let userData = req.body;

    User.findOne({username: userData.username}, (error, user)=>{
        if(error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send('Invalid Username')
            }else{
                if(user.password !== userData.password){
                    res.status(401).send('Invalid credentials')
                }else{
                    let payload = {subject:user._id}
                    let token = jwt.sign(payload, JWT_SECRET)
                    res.status(200).send({token})
                }
            }
        }
    })
})

module.exports = router