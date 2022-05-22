/**
 * LOGOUT MODULE FOR STUDENT ABODE
 * MODULE CREATED -  14/03/20222
 * MODULE AUTHOR - SHUBHAM TAWADE
 * MODULE DESCRIPTION:
 * 1. DELETING GENERATED TOKEN
 * **/

const jwt = require('jsonwebtoken');

const router = require('express').Router();
router.post('/', async (req, res) => {
    const authHeader = req.headers['auth-token'];
    try{
        const token = jwt.sign(authHeader, "", {expiresIn: 1}, (logout, err) => {
            if(logout){
                res.status(200).header('auth-token', "").send("You have been logged out!")
            }
            else{
                res.status(404).send({msg: "Error in logout"})
            }
        })
    }
    catch(err){
        res.status(404).send("Server error")
    }
})

module.exports = router
