const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./model/user');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "zkdjxchjk872y34iu238jdfli2908340913ondx7@2176u#tqgopi";


const url = 'mongodb://127.0.0.1:27017/login-app-db';

mongoose.connect(url);


const app = express();


app.use(express.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname + "static")))


app.post('/api/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email:email}).lean();
    if(!user){
        return res.json({status:'error', error:'Invalid email/password'})
    }
    if(await bcrypt.compare(password, user.password)){
        const token = jwt.sign({id:user._id, email: user.email}, JWT_SECRET)
        return res.json({status:'ok', data: token})
    }
    return res.json({status:'error', error: "Invalid"})
})


app.post('/api/register', async (req, res) => {
    console.log(req.body);
    const {username, email, password:plainTextPassword} = req.body;
    if(!username || typeof username !== 'string'){
        return res.json({status:'error', error:"Inavlid username"})
    }
    if(!email || typeof email !== 'string'){
        return res.json({status:'error', error:"Inavlid email"})
    }
    if(!plainTextPassword || typeof plainTextPassword !== 'string'){
        return res.json({status:'error', error:"Inavlid password"})
    }
    const password = await bcrypt.hash(plainTextPassword, 10);
    try{
        const response = await User.create({
            username,
            email,
            password
        })
        console.log(response)
    }catch(error){
        if(error.code===11000){
            return res.json({status:'error', error:"Email already in use"})
        }
        throw error        
    }
    res.json({ status : 'ok' });
})


const port = 3000;
app.listen(port, () => {
    console.log(`Server up at ${port}`)
})