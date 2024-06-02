
const db = require('../db/db');
const router = require("express").Router();

router.get('/positionreport/:id',async (req,res,next)=>{
    let positionreport = await db.get().positionreport.findByIds([req.params['id']]);
    res.send(positionreport);
});

router.post('/positionreport',async (req,res,next)=>{
    await db.get().patch(req.body);
});

module.exports = router;