/**
 * REGISTRATION MODULE FOR STUDENT ABODE
 * MODULE CREATED -  14/03/20222
 * MODULE AUTHOR - SHUBHAM TAWADE
 * MODULE DESCRIPTION:
 * 1. VALIDATION RULES FOR EMAIL, NAME, AND PASSWORD
 * 2. VALIDATION FOR EXISTING USER BY INSPECTING EMAIL
 * 3. HASHING PASSWORD TO STORE IT IN COLLECTION FOR SECURITY PURPOSE
 * 4. ADDING THE DOCUMENT INTO COLLECTION AND SENDING BACK THE RESPONSE
 * **/
 const router = require('express').Router();
 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');
 const User = require('../models/User');


 router.post('/', async (req, res) => {
    //VALIDATE DATA
    let error = false;
    if(req.body.email.length < 6){
        error = true;
    }
    if(error) 
        return res.status(400).send("email error")

    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) 
        return res.status(400).send("Email already exists!")

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try{
        const savedUser = await user.save();
        res.send({user: user._id})
    }
    catch(error){
        res.status(400).send(error)
    }
})

module.exports = router