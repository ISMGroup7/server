const router = require('express').Router();
const verify = require('./verifyToken')

router.get("/", verify,  (req, res)=> {
    res.json({
        posts:{
            title: "random",
            description: "Lorem ipsum"
        }
    })
})

module.exports = router