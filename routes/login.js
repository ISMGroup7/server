/**
 * LOGIN MODULE FOR STUDENT ABODE
 * MODULE CREATED -  14/03/20222
 * MODULE AUTHOR - SHUBHAM TAWADE
 * MODULE DESCRIPTION:
 * 1. VALIDATION RULES FOR EMAIL AND PASSWORD
 * 2. FETCHING USERNAME FROM COLLECTION
 * 3. COMPARING HASH VALUES OF PASSWORD FROM REQUEST AND THAT FROM COLLECTION
 * 4. GENERATING AUTH TOKEN USING JWT AND PASSING IT IN RESPONSE HEADER
 * **/

const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/', async(req, res) => {
    let error = false;
    if(req.body.email.length < 6){
        error = true;
    }
    if(error) 
        return res.status(400).send("email error")
    const user = await User.findOne({email: req.body.email});
    if(!user) 
            return res.status(400).send("Email or password is incorrect!")
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass)
        return res.status(400).send('Invalid password')
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)
})

module.exports = router