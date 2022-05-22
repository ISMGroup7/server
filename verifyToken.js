/**
 * TOKEN VERIFICATION MODULE FOR STUDENT ABODE
 * MODULE CREATED -  14/03/20222
 * MODULE AUTHOR - SHUBHAM TAWADE
 * MODULE DESCRIPTION:
 * 1. VERIFYING TOKEN OF EXISTING USER
 * 2. IF TOKEN IS NOT VERIFIED, THEN ERROR RESPONSE SHOULD BE SENT
 * 3. IF TOKEN IS VERIFIED, THEN NEXT FUNCTION IS EXECUTED
 * **/
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next){
    const token = req.header('auth-token');
    if(!token){
        return res.status(400).send('Access Denied');
    }
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
    }
    catch(err){
        res.status(400).send('Invalid Token')
    }
}