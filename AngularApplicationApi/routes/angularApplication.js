
const db = require('../db/db');
const router = require("express").Router();

router.get('/',(req,res,next)=>{
let respose = {
    id:1,
    name: 'AngularApplication'
};

res.send(respose);
});

module.exports = router;